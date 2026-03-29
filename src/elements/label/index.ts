import { KAPLAYCtx } from "kaplay";

import { makeLabel } from "../../components/label";
import { makeText } from "../../components";
import { getCenterPos } from "../../helpers";

export function createLabel(
  k: KAPLAYCtx,
  txt: string,
  width: number,
  height: number,
) {
  // Make label
  const lbl = makeLabel(k, width, height);

  // Make Text - use white text for label text
  const { cX, cY } = getCenterPos(lbl);
  const lblTxt = makeText(k, txt, 20, cX, cY, "center");
  lblTxt.use(k.color(255, 255, 255));

  // Add label
  lbl.add(lblTxt);
  k.add(lbl);

  return lbl;
}
