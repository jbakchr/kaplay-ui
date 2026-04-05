import { KAPLAYCtx } from "kaplay";

import { KaplayColor, KaplayRGB } from "../types";

export function applyColor(k: KAPLAYCtx, obj: any, c: KaplayColor) {
  if (Array.isArray(c)) {
    // ✅ TS sees exactly "[number, number, number]"
    obj.use(k.color([c[0], c[1], c[2]]));
    return;
  }

  if (typeof c === "string") {
    // ✅ TS sees exactly "string"
    obj.use(k.color(c));
    return;
  }

  if (typeof c === "object" && "r" in c) {
    // ✅ TS sees exactly a color-like object — convert to a Kaplay Color
    obj.use(k.color(k.rgb(c.r, c.g, c.b)));
    return;
  }

  // ✅ TS sees exactly "Color"
  obj.use(k.color(c));
}

export function applyOutlineColor(
  k: KAPLAYCtx,
  obj: any,
  outline: number,
  color: KaplayRGB,
) {
  if (typeof color === "string") {
    // hex string — good
    obj.use(k.outline(outline, k.rgb(color)));
    return;
  }

  if (Array.isArray(color)) {
    // [r,g,b] tuple — good
    obj.use(k.outline(outline, k.rgb(color[0], color[1], color[2])));
    return;
  }
}
