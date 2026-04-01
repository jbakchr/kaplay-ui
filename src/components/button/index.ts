import { Anchor, KAPLAYCtx } from "kaplay";

import { ButtonComponent } from "../../types";

export function makeButton(
  k: KAPLAYCtx,
  width: number,
  height: number,
  radius: number,
  anchor: Anchor,
): ButtonComponent {
  const button = k.make([
    k.rect(width, height, { radius }),
    k.color(200, 200, 200),
    k.outline(3, k.rgb(92, 91, 91)),
    k.pos(0, 0),
    k.anchor(anchor),
    k.area(),
  ]);

  return button;
}
