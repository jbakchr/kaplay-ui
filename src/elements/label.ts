import { KAPLAYCtx } from "kaplay";

import { makeLabel } from "../components/label";
import { makeText } from "../components";
import { getCenterPos, setChildPosition } from "../helpers";
import { KaplayColor, LabelComponent, LabelOptions } from "../types";
import { isLayoutChange } from "../helpers/layout-utils";

export function createLabel(
  k: KAPLAYCtx,
  txt: string,
  opts: LabelOptions,
): LabelComponent {
  const lblOpts = {
    txtColor: [255, 255, 255] as KaplayColor,
    ...opts,
  } as LabelOptions;

  // Make label
  const lbl = makeLabel(k, lblOpts);

  // Make Text
  const { cX, cY } = getCenterPos(lbl);
  const lblTxt = makeText(k, txt, lblOpts, cX, cY, "center");

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
