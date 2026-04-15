"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/Button";
import { unlock } from "@/lib/achievements";

type State = "idle" | "running" | "over";

const WIDTH = 360;
const HEIGHT = 520;
const PLAYER_W = 32;
const PLAYER_H = 12;

export function DodgerGame() {
  const { t } = useTranslation();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [state, setState] = useState<State>("idle");
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const keysRef = useRef<{ left: boolean; right: boolean }>({
    left: false,
    right: false,
  });
  const stateRef = useRef(state);
  stateRef.current = state;

  useEffect(() => {
    const stored = Number(localStorage.getItem("dodger.highScore") || "0");
    setHighScore(stored);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft" || e.key === "a") keysRef.current.left = true;
      if (e.key === "ArrowRight" || e.key === "d") keysRef.current.right = true;
      if (e.key === " " || e.key === "Enter") {
        if (stateRef.current !== "running") start();
      }
    };
    const onKeyUp = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft" || e.key === "a") keysRef.current.left = false;
      if (e.key === "ArrowRight" || e.key === "d") keysRef.current.right = false;
    };
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const start = useCallback(() => {
    setState("running");
    setScore(0);
  }, []);

  useEffect(() => {
    if (state !== "running") return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx2d = canvas.getContext("2d");
    if (!ctx2d) return;
    const ctx: CanvasRenderingContext2D = ctx2d;

    let playerX = WIDTH / 2 - PLAYER_W / 2;
    const bugs: { x: number; y: number; s: number }[] = [];
    let lastSpawn = 0;
    let raf = 0;
    let startTime = performance.now();
    let lastScoreUpdate = 0;
    let alive = true;

    function loop(now: number) {
      if (!alive) return;
      const dt = 1 / 60;

      // Move player
      if (keysRef.current.left) playerX -= 240 * dt;
      if (keysRef.current.right) playerX += 240 * dt;
      playerX = Math.max(0, Math.min(WIDTH - PLAYER_W, playerX));

      // Spawn bugs
      if (now - lastSpawn > Math.max(250, 700 - (now - startTime) / 20)) {
        bugs.push({
          x: Math.random() * (WIDTH - 12),
          y: -12,
          s: 180 + Math.random() * 180,
        });
        lastSpawn = now;
      }

      // Move bugs
      for (const b of bugs) b.y += b.s * dt;
      while (bugs.length && bugs[0].y > HEIGHT) bugs.shift();

      // Collision
      const py = HEIGHT - 24;
      for (const b of bugs) {
        if (
          b.x < playerX + PLAYER_W &&
          b.x + 12 > playerX &&
          b.y + 12 > py &&
          b.y < py + PLAYER_H
        ) {
          alive = false;
          setState("over");
          setScore((s) => {
            const final = Math.floor((now - startTime) / 100);
            if (final > highScore) {
              setHighScore(final);
              localStorage.setItem("dodger.highScore", String(final));
            }
            if (final >= 200) unlock("arcadeJunkie");
            return final;
          });
          return;
        }
      }

      // Draw
      ctx.fillStyle = "#0a0a10";
      ctx.fillRect(0, 0, WIDTH, HEIGHT);
      // Grid
      ctx.strokeStyle = "rgba(255,255,255,0.05)";
      ctx.lineWidth = 1;
      for (let x = 0; x < WIDTH; x += 20) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, HEIGHT);
        ctx.stroke();
      }
      for (let y = 0; y < HEIGHT; y += 20) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(WIDTH, y);
        ctx.stroke();
      }

      // Player
      ctx.fillStyle = "#ff2e63";
      ctx.fillRect(playerX, py, PLAYER_W, PLAYER_H);

      // Bugs
      ctx.fillStyle = "#00e5ff";
      for (const b of bugs) ctx.fillRect(b.x, b.y, 12, 12);

      // Score live
      if (now - lastScoreUpdate > 100) {
        setScore(Math.floor((now - startTime) / 100));
        lastScoreUpdate = now;
      }

      raf = requestAnimationFrame(loop);
    }
    raf = requestAnimationFrame(loop);
    return () => {
      alive = false;
      cancelAnimationFrame(raf);
    };
  }, [state, highScore]);

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex items-center gap-8 font-mono">
        <div>
          <span className="text-phosphor-dim text-xs uppercase tracking-widest block font-bold">
            {t("notFound.score")}
          </span>
          <span className="text-neon-pink text-3xl arcade-title">
            {String(score).padStart(4, "0")}
          </span>
        </div>
        <div>
          <span className="text-phosphor-dim text-xs uppercase tracking-widest block font-bold">
            {t("notFound.highScore")}
          </span>
          <span className="text-neon-amber text-3xl arcade-title">
            {String(highScore).padStart(4, "0")}
          </span>
        </div>
      </div>

      <div className="relative border-4 border-neon-pink shadow-neon-pink">
        <canvas
          ref={canvasRef}
          width={WIDTH}
          height={HEIGHT}
          className="block"
          tabIndex={0}
        />
        {state !== "running" && (
          <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center gap-4 p-4 text-center">
            {state === "over" && (
              <div className="arcade-title text-2xl text-neon-pink animate-blink">
                {t("notFound.gameOver")}
              </div>
            )}
            <Button variant="primary" size="md" onClick={start}>
              {state === "over" ? t("notFound.restart") : t("notFound.start")}
            </Button>
            <span className="font-mono text-sm text-phosphor-dim max-w-[280px]">
              {t("notFound.instructions")}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
