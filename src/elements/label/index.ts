import { KAPLAYCtx } from "kaplay";

import { makeLabel } from "../../components/label";

export function createLabel(k: KAPLAYCtx) {
  const lbl = makeLabel(k);

  k.add(lbl);

  return lbl;
}
