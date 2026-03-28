import { Anchor, KAPLAYCtx } from "kaplay";

export function makeButton(
  k: KAPLAYCtx,
  width: number,
  height: number,
  anchor: Anchor,
) {
  const button = k.make([
    k.rect(width, height, { radius: 15 }),
    k.color(200, 200, 200),
    k.outline(3, k.rgb(92, 91, 91)),
    k.pos(200, 200),
    k.anchor(anchor),
    k.area(),
  ]);

  return button;
}
