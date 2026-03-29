import { KAPLAYCtx } from "kaplay";

export function makeLabel(k: KAPLAYCtx) {
  const label = k.add([k.rect(200, 100), k.color(0, 0, 0), k.opacity(0.5)]);

  return label;
}
