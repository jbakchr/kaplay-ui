import { Anchor, KAPLAYCtx } from "kaplay";

import { ButtonComponent } from "../../types";

export function makeButton(
  k: KAPLAYCtx,
  width: number,
  height: number,
  radius: number,
  posX: number,
  posY: number,
  outline: number,
  anchor: Anchor,
): ButtonComponent {
  const button = k.make([
    k.rect(width, height, { radius }),
    k.pos(posX, posY),
    k.color(200, 200, 200),
    k.outline(outline, k.rgb(92, 91, 91)),
    k.anchor(anchor),
    k.area(),
  ]);

  return button;
}
