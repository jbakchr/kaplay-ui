import type { KAPLAYCtx } from "kaplay";
import type { UIContainerOptions } from "./components/container/container.types";

import { createContainer } from "./components/container";

/**
 * kaplayUI plugin entrypoint.
 *
 * This function is called by Kaplay when the game initializes.
 * It receives the Kaplay context `k`, and returns an object
 * containing any plugin-defined functions that should be added
 * to `k`.
 *
 * In this minimal version, we expose `addContainer()`, which
 * creates a basic UI container game object using only width
 * and height. More UI components will be added here later.
 */
export default function kaplayUI(k: KAPLAYCtx) {
  return {
    /**
     * Create a UI container with the given options.
     *
     * Usage:
     *   const panel = k.addContainer({ width: 300, height: 200 });
     */
    addContainer: (opts: UIContainerOptions) => createContainer(k, opts),
  };
}
