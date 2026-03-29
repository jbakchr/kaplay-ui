import { Anchor, KAPLAYCtx } from "kaplay";

import { TextComponent } from "../../types";

export function makeText(
  k: KAPLAYCtx,
  txt: string,
  posX: number,
  posY: number,
  anchor: Anchor,
): TextComponent {
  const text = k.make([
    k.text(txt, { size: 22 }),
    k.color(0, 0, 0),
    k.pos(posX, posY),
    k.anchor(anchor),
  ]);

  return text;
}
