import { Anchor, KAPLAYCtx } from "kaplay";

import { ButtonComponent, TextButtonOptions } from "../types";
import {
  getCenterPos,
  setChildPosition,
  applyColor,
  applyOutlineColor,
} from "../helpers";

export function makeButton(
  k: KAPLAYCtx,
  opts: TextButtonOptions,
  anchor: Anchor,
): ButtonComponent {
  // Extract opts with defaults
  const { width, height, posX, posY, radius, outline, btnColor, outlineColor } =
    {
      width: 150,
      height: 60,
      posX: 0,
      posY: 0,
      radius: 10,
      outline: 3,
      btnColor: [200, 200, 200] as [number, number, number],
      outlineColor: "#5c5b5b",
      ...opts,
    };

  const button = k.make([
    k.rect(width, height, { radius }),
    k.pos(posX, posY),
    k.anchor(anchor),
    k.area(),
    {
      setSize(w: number, h: number) {
        // Change button width and height
        button.width = w;
        button.height = h;

        // Get button center position
        const { cX, cY } = getCenterPos(button);

        // Set button text to center of button
        setChildPosition(k, button, button.children[0], cX, cY);
      },
      setPosition(x: number, y: number) {
        // Change button position
        button.pos.x = x;
        button.pos.y = y;
      },
      setRadius(r: number) {
        // Change button border radius
        button.radius = r;
      },
      setOutline(t: number) {
        // Change button outline thickness
        applyOutlineColor(k, button, t, outlineColor);
      },
      setButtonText(txt: string) {
        // Change button text
        const btnTxt = button.children[0];
        btnTxt.text = txt;
      },
    },
  ]);

  applyColor(k, button, btnColor);
  applyOutlineColor(k, button, outline, outlineColor);

  return button;
}
