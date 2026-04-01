import { Anchor, KAPLAYCtx } from "kaplay";

import { TextButtonOptions, TextComponent } from "../../types";

export function makeText(
  k: KAPLAYCtx,
  txt: string,
  opts: TextButtonOptions,
  posX: number,
  posY: number,
  anchor: Anchor,
): TextComponent {
  const { txtSize } = {
    txtSize: 22,
    ...opts,
  };

  const text = k.make([
    k.text(txt, { size: txtSize }),
    k.color(0, 0, 0),
    k.pos(posX, posY),
    k.anchor(anchor),
  ]);

  return text;
}
