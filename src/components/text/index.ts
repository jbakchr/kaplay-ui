import { Anchor, KAPLAYCtx } from "kaplay";

import { TextComponent } from "../../types";
import { TextOptions } from "../../types/elements/text";

export function makeText(
  k: KAPLAYCtx,
  txt: string,
  opts: TextOptions,
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
