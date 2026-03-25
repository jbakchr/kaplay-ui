import type { KAPLAYCtx } from "kaplay";

export default function uiPlugin(k: KAPLAYCtx) {
  return {
    hi() {
      k.add([k.rect(100, 100)]);
    },
  };
}
