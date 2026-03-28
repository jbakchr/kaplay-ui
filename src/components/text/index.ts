import { Anchor, KAPLAYCtx } from "kaplay";

export function makeText(
  k: KAPLAYCtx,
  txt: string,
  posX: number,
  posY: number,
  anchor: Anchor,
) {
  const text = k.make([
    k.text(txt),
    k.color(0, 0, 0),
    k.pos(posX, posY),
    k.anchor(anchor),
  ]);

  return text;
}
