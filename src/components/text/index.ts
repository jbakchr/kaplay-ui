import { KAPLAYCtx } from "kaplay";

export function makeText(
  k: KAPLAYCtx,
  txt: string,
  posX: number,
  posY: number,
) {
  const text = k.make([
    k.text(txt),
    k.color(0, 0, 0),
    k.pos(posX, posY),
    k.anchor("center"),
  ]);

  return text;
}
