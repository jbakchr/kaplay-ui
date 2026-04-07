import { Anchor, KAPLAYCtx } from "kaplay";

import { KaplayColor, TextComponent } from "../types";
import { TextOptions } from "../types/elements/text";
import { applyColor } from "../helpers";

export function makeText(
  k: KAPLAYCtx,
  txt: string,
  opts: TextOptions,
  posX: number,
  posY: number,
  anchor: Anchor,
): TextComponent {
  const { txtSize, txtColor } = {
    txtSize: 22,
    ...opts,
  };

  const text = k.make([
    k.text(txt, { size: txtSize }),
    k.pos(posX, posY),
    k.anchor(anchor),
  ]);

  applyColor(k, text, txtColor as KaplayColor);

  return text;
}
