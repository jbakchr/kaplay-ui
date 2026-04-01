import { KAPLAYCtx } from "kaplay";

import { LabelComponent, TextButtonOptions } from "../../types";

export function makeLabel(
  k: KAPLAYCtx,
  opts: TextButtonOptions,
): LabelComponent {
  const { width, height } = {
    width: 160,
    height: 96,
    ...opts,
  };

  const label = k.make([
    k.rect(width, height),
    k.pos(0, 0),
    k.color(0, 0, 0),
    k.opacity(0.7),
    k.anchor("topleft"),
  ]);

  return label;
}
