import { KAPLAYCtx } from "kaplay";

import { KaplayColor, LabelComponent, LabelOptions } from "../types";
import { applyColor, getCenterPos, setChildPosition } from "../helpers";

export function makeLabel(k: KAPLAYCtx, opts: LabelOptions): LabelComponent {
  const { width, height, radius, posX, posY, opacity, lblColor } = {
    width: 160,
    height: 96,
    radius: 0,
    posX: 0,
    posY: 0,
    opacity: 0.7,
    lblColor: [0, 0, 0] as [number, number, number],
    ...opts,
  };

  const label = k.make([
    k.rect(width, height, { radius }),
    k.pos(posX, posY),
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
      setRadius(r: number) {
        // Change label border radius
        label.radius = r;
      },
      setPosition(x: number, y: number) {
        // Change label position
        label.pos.x = x;
        label.pos.y = y;
      },
      setOpacity(o: number) {
        // Change label opacity
        label.opacity = o;
      },
      setLabelColor(c: KaplayColor) {
        // Change label color
        applyColor(k, label, c);
      },
      setLabelText(txt: string) {
        // Change label text
        const lblTxt = label.children[0];
        lblTxt.text = txt;
      },
      setLabelTextColor(c: KaplayColor) {
        // Change label text color
        const lblTxt = label.children[0];
        applyColor(k, lblTxt, c);
      },
      setLabelTextSize(size: number) {
        // Change label text size
        const lblTxt = label.children[0];
        lblTxt.textSize = size;
      },
    },
  ]);

  applyColor(k, label, lblColor);

  return label;
}
