import { Anchor, KAPLAYCtx } from "kaplay";

import { TextButtonOptions } from "../../types";
import { getCenterPos, setChildPosition } from "../../helpers";

import { KaplayColor } from "../../types";

export function makeButton(
  k: KAPLAYCtx,
  opts: TextButtonOptions,
  anchor: Anchor,
) {
  // Extract opts with defaults
  const { width, height, radius, posX, posY, outline, btnColor } = {
    width: 150,
    height: 60,
    radius: 10,
    posX: 0,
    posY: 0,
    outline: 3,
    btnColor: [200, 200, 200] as [number, number, number],
    ...opts,
  };

  const button = k.make([
    k.rect(width, height, { radius }),
    k.pos(posX, posY),
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

  applyColor(k, button, btnColor);

  return button;
}

function applyColor(k: KAPLAYCtx, obj: any, c: KaplayColor) {
  if (Array.isArray(c)) {
    // ✅ TS sees exactly "[number, number, number]"
    obj.use(k.color([c[0], c[1], c[2]]));
    return;
  }

  if (typeof c === "string") {
    // ✅ TS sees exactly "string"
    obj.use(k.color(c));
    return;
  }

  if (typeof c === "object" && "r" in c) {
    // ✅ TS sees exactly a color-like object — convert to a Kaplay Color
    obj.use(k.color(k.rgb(c.r, c.g, c.b)));
    return;
  }

  // ✅ TS sees exactly "Color"
  obj.use(k.color(c));
}
