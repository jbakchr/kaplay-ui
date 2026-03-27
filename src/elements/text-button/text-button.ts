import type { KAPLAYCtx } from "kaplay";

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

  // Make button text
  const btnTxt = k.make([
    k.text(txt),
    k.color(0, 0, 0),
    k.pos(btn.width / 2, btn.height / 2),
    k.anchor("center"),
  ]);

  // Add button text to button
  btn.add(btnTxt);

  return btn;
}
