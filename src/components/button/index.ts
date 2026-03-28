import { Anchor, KAPLAYCtx } from "kaplay";

export function makeButton(
  k: KAPLAYCtx,
  width: number,
  height: number,
  anchor: Anchor,
) {
  const button = k.make([
    k.rect(width, height),
    k.outline(3),
    k.pos(200, 200),
    k.anchor(anchor),
    k.area(),
  ]);

  return button;
}
