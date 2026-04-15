export type Skill = {
  name: string;
  level: number; // 1..99
  category: "engine" | "language" | "tools" | "design";
  accent: "pink" | "cyan" | "amber" | "lime" | "violet";
};

export const skills: Skill[] = [
  { name: "Unity", level: 95, category: "engine", accent: "pink" },
  { name: "C#", level: 95, category: "language", accent: "pink" },
  { name: "Game Design", level: 80, category: "design", accent: "amber" },
  { name: "TypeScript", level: 70, category: "language", accent: "lime" },
  { name: "Phaser", level: 70, category: "engine", accent: "lime" },
  { name: "Unreal", level: 70, category: "engine", accent: "cyan" },
  { name: "C++", level: 60, category: "language", accent: "cyan" },
];
