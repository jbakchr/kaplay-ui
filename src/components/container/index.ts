// src/components/container/index.ts

import type { KAPLAYCtx } from "kaplay";
import type { UIContainerOptions } from "./container.types";
import { initContainerLogic } from "./container.logic";
import {
  defaultContainerStyles,
  applyDefaultContainerStyles,
} from "./container.styles";

/**
 * Factory function for creating a UI Container.
 * Phase 2 Step 1: Add styling scaffolding.
 */
export function createContainer(k: KAPLAYCtx, opts: UIContainerOptions) {
  const container = {
    uiWidth: opts.width,
    uiHeight: opts.height,

    addChild: (_child: any) => {
      console.warn("addChild() not implemented yet.");
    },

    styles: {
      ...defaultContainerStyles,
    },

    setStyle(_newStyles: any) {
      console.warn("setStyle() not implemented yet.");
    },

    // NEW: store anchor
    anchor: opts.anchor ?? "topleft",

    // NEW: placeholder anchor setter
    setAnchor(_anchor: string) {
      console.warn("setAnchor() not implemented yet.");
    },
  };

  // placeholder logic and style application
  initContainerLogic(k, container, opts);
  applyDefaultContainerStyles(container);

  return container as any;
}
