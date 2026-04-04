import { KAPLAYCtx } from "kaplay";

import { makeLabel } from "../../components/label";
import { makeText } from "../../components";
import { getCenterPos, setChildPosition } from "../../helpers";
import { LabelComponent, LabelOptions } from "../../types";
import { isLayoutChange } from "../../helpers/layout-utils";

export function createLabel(
  k: KAPLAYCtx,
  txt: string,
  opts: LabelOptions,
): LabelComponent {
  // Make label
  const lbl = makeLabel(k, opts);

  // Make Text - use white text for label text
  const { cX, cY } = getCenterPos(lbl);
  const lblTxt = makeText(k, txt, opts, cX, cY, "center");
  lblTxt.use(k.color(255, 255, 255));

  // Add label
  lbl.add(lblTxt);
  k.add(lbl);

  // Re-position text on layout-related changes
  lbl.onUse((id) => {
    if (isLayoutChange(id)) {
      const { cX, cY } = getCenterPos(lbl);
      setChildPosition(k, lbl, lblTxt, cX, cY);
    }
  });

  return lbl;
}
