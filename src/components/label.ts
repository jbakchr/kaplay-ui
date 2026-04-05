import { KAPLAYCtx } from "kaplay";

import { LabelComponent, LabelOptions } from "../types";

export function makeLabel(k: KAPLAYCtx, opts: LabelOptions): LabelComponent {
  const { width, height, posX, posY, opacity } = {
    width: 160,
    height: 96,
    posX: 0,
    posY: 0,
    opacity: 0.7,
    ...opts,
  };

  const label = k.make([
    k.rect(width, height),
    k.pos(posX, posY),
    k.color(0, 0, 0),
    k.opacity(opacity),
    k.anchor("topleft"),
  ]);

  return label;
}
