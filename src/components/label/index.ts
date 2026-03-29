import { KAPLAYCtx } from "kaplay";

import { Label } from "../../types";

export function makeLabel(k: KAPLAYCtx, width: number, height: number): Label {
  const label = k.make([
    k.rect(width, height),
    k.pos(200, 200),
    k.color(0, 0, 0),
    k.opacity(0.7),
  ]);

  return label;
}
