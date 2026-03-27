import type { KAPLAYCtx } from "kaplay";

import { makeButtonText } from "../../texts/index";

export function createTextButton(
  k: KAPLAYCtx,
  txt: string,
  width: number,
  height: number,
) {
  const btn = k.add([
    k.rect(width, height),
    k.outline(3),
    k.pos(0, 0),
    k.anchor("topleft"),
    k.area(),
  ]);

  const btnTxt = makeButtonText(k, btn, txt);

  btn.add(btnTxt);

  return btn;
}
