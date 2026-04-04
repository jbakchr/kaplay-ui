import { Anchor, KAPLAYCtx } from "kaplay";

import { ButtonComponent, TextButtonOptions } from "../../types";
import { getCenterPos, setChildPosition } from "../../helpers";

export function makeButton(
  k: KAPLAYCtx,
  opts: TextButtonOptions,
  anchor: Anchor,
): ButtonComponent {
  // Extract opts with defaults
  const { width, height, radius, posX, posY, outline } = {
    width: 150,
    height: 60,
    radius: 10,
    posX: 0,
    posY: 0,
    outline: 3,
    ...opts,
  };

  const button = k.make([
    k.rect(width, height, { radius }),
    k.pos(posX, posY),
    k.color(200, 200, 200),
    k.outline(outline, k.rgb(92, 91, 91)),
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
    },
  ]);

  return button;
}
