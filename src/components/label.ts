import { KAPLAYCtx } from "kaplay";

import { LabelComponent, LabelOptions } from "../types";
import { getCenterPos, setChildPosition } from "../helpers";

export function makeLabel(k: KAPLAYCtx, opts: LabelOptions): LabelComponent {
  const { width, height, posX, posY, opacity } = {
    width: 160,
    height: 96,
    posX: 0,
    posY: 0,
    opacity: 0.7,
    ...opts,
  };

  const label = k.make([
    k.rect(width, height),
    k.pos(posX, posY),
    k.color(0, 0, 0),
    k.opacity(opacity),
    k.anchor("topleft"),
    {
      setSize(w: number, h: number) {
        // Change label width and height
        label.width = w;
        label.height = h;

        const { cX, cY } = getCenterPos(label);

        setChildPosition(k, label, label.children[0], cX, cY);
      },
      setPosition(x: number, y: number) {
        // Change label position
        label.pos.x = x;
        label.pos.y = y;
      },
    },
  ]);

  return label;
}
