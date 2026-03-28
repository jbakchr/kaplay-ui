import { KAPLAYCtx } from "kaplay";

export function makeButton(k: KAPLAYCtx, width: number, height: number) {
  const button = k.make([
    k.rect(width, height),
    k.outline(3),
    k.pos(200, 200),
    k.anchor("topleft"),
    k.area(),
  ]);

  return button;
}
