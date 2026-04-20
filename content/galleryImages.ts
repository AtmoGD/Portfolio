import type { StaticImageData } from "next/image";

// --- Unthroned ---
import unthroned7 from "@/assets/gallery/unthroned-7.png";

// --- Amapo ---
import amapo1 from "@/assets/gallery/amapo-1.png";
import amapo2 from "@/assets/gallery/amapo-2.png";
import amapo3 from "@/assets/gallery/amapo-3.png";
import amapo4 from "@/assets/gallery/amapo-4.png";
import amapo5 from "@/assets/gallery/amapo-5.png";
import amapo6 from "@/assets/gallery/amapo-6.png";

// --- Cozy Winter Market ---
import cozyWinter1 from "@/assets/gallery/cozy-winter-1.png";
import cozyWinter2 from "@/assets/gallery/cozy-winter-2.png";
import cozyWinter3 from "@/assets/gallery/cozy-winter-3.png";
import cozyWinter4 from "@/assets/gallery/cozy-winter-4.jpg";
import cozyWinter5 from "@/assets/gallery/cozy-winter-5.jpg";

// --- Pumpkin Harvest ---
import pumpkin2 from "@/assets/gallery/pumpkin-2.png";
import pumpkin3 from "@/assets/gallery/pumpkin-3.png";
import pumpkin4 from "@/assets/gallery/pumpkin-4.png";
import pumpkin5 from "@/assets/gallery/pumpkin-5.png";
import pumpkin6 from "@/assets/gallery/pumpkin-6.png";

// --- Witch Way? ---
import witchWay1 from "@/assets/gallery/witch-way-1.png";
import witchWay6 from "@/assets/gallery/witch-way-6.png";
import witchWay7 from "@/assets/gallery/witch-way-7.png";
import witchWay8 from "@/assets/gallery/witch-way-8.png";
import witchWay9 from "@/assets/gallery/witch-way-9.png";

// --- Gravity Pong ---
import gravityPong1 from "@/assets/gallery/gravity-pong-1.png";
import gravityPong2 from "@/assets/gallery/gravity-pong-2.png";
import gravityPong3 from "@/assets/gallery/gravity-pong-3.png";

// --- Little Critters ---
import littleCritters1 from "@/assets/gallery/little-critters-1.png";
import littleCritters2 from "@/assets/gallery/little-critters-2.png";
import littleCritters3 from "@/assets/gallery/little-critters-3.png";
import littleCritters4 from "@/assets/gallery/little-critters-4.png";
import littleCritters5 from "@/assets/gallery/little-critters-5.png";

// --- Professor Papillon ---
import papillon1 from "@/assets/gallery/papillon-1.png";
import papillon2 from "@/assets/gallery/papillon-2.png";
import papillon3 from "@/assets/gallery/papillon-3.png";

// --- Sock It Up! ---
import sockItUp1 from "@/assets/gallery/sock-it-up-1.png";
import sockItUp2 from "@/assets/gallery/sock-it-up-2.png";
import sockItUp3 from "@/assets/gallery/sock-it-up-3.png";

// --- Kibō's Path ---
import kibos1 from "@/assets/gallery/kibos-1.png";
import kibos2 from "@/assets/gallery/kibos-2.png";
import kibos3 from "@/assets/gallery/kibos-3.jpg";
import kibos4 from "@/assets/gallery/kibos-4.jpg";
import kibos5 from "@/assets/gallery/kibos-5.jpg";

// --- It's Not Rocket Science ---
import rocketScience1 from "@/assets/gallery/rocket-science-1.png";
import rocketScience2 from "@/assets/gallery/rocket-science-2.jpg";
import rocketScience3 from "@/assets/gallery/rocket-science-3.png";

/**
 * Gallery screenshots sourced from each project's itch.io page.
 * Keyed by project slug. Empty / missing slug = no gallery section renders.
 */
export const galleryBySlug: Record<string, StaticImageData[]> = {
  unthroned: [unthroned7],
  amapo: [amapo1, amapo2, amapo3, amapo4, amapo5, amapo6],
  "cozy-winter-market": [
    cozyWinter1,
    cozyWinter2,
    cozyWinter3,
    cozyWinter4,
    cozyWinter5,
  ],
  "pumpkin-harvest": [pumpkin2, pumpkin3, pumpkin4, pumpkin5, pumpkin6],
  "witch-way": [witchWay1, witchWay6, witchWay7, witchWay8, witchWay9],
  "gravity-pong": [gravityPong1, gravityPong2, gravityPong3],
  "little-critters": [
    littleCritters1,
    littleCritters2,
    littleCritters3,
    littleCritters4,
    littleCritters5,
  ],
  "professor-papillon": [papillon1, papillon2, papillon3],
  "sock-it-up": [sockItUp1, sockItUp2, sockItUp3],
  "kibos-path": [kibos1, kibos2, kibos3, kibos4, kibos5],
  "its-not-rocket-science": [rocketScience1, rocketScience2, rocketScience3],
};
