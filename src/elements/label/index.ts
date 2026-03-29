import { KAPLAYCtx } from "kaplay";

import { makeLabel } from "../../components/label";

export function createLabel(k: KAPLAYCtx, width: number, height: number) {
  const lbl = makeLabel(k, width, height);

  k.add(lbl);

  return lbl;
}
