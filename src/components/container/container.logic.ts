// src/components/container/container.logic.ts

import type { KAPLAYCtx } from "kaplay";
import type { UIContainerOptions, UIContainerReturn } from "./container.types";

/**
 * Placeholder for the internal container logic.
 * Will create the actual Kaplay GameObj in Phase 1 Step 3.
 */
export function initContainerLogic(
  _k: KAPLAYCtx,
  container: UIContainerReturn,
  opts: UIContainerOptions,
) {
  console.warn("initContainerLogic() placeholder running.");

  // NEW: anchor preparation
  applyAnchor(container, opts);
}

/**
 * Placeholder function for applying anchor behavior.
 *
 * The real implementation will come in Phase 2 Step 3.
 */
export function applyAnchor(
  _container: UIContainerReturn,
  _opts: UIContainerOptions,
) {
  console.warn("applyAnchor() not implemented yet.");
}
