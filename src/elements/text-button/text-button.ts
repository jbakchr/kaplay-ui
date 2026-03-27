import type { KAPLAYCtx } from "kaplay";

import { centerPos } from "../../helpers";

export function createTextButton(
  k: KAPLAYCtx,
  txt: string,
  width: number,
  height: number,
) {
  // Button
  const btn = k.add([
    k.rect(width, height),
    k.outline(3),
    k.pos(0, 0),
    k.anchor("topleft"),
    k.area(),
  ]);

  // Get center position of button to be used for the button text
  const { x, y } = centerPos(btn.width, btn.height);

  // Make button text
  const btnTxt = k.make([
    k.text(txt),
    k.color(0, 0, 0),
    k.pos(x, y),
    k.anchor("center"),
  ]);

  // Add button text to button
  btn.add(btnTxt);

  return btn;
}
