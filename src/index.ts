import type { KAPLAYCtx } from "kaplay";

// Types
import { TextButton } from "./types";

// Text Button
import { createLabel, createTextButton } from "./elements";

/**
 * # KAPLAY UI Plugin
 * _Add UI Game Objects to your game._
 *
 * ## Features
 * - Text Button (`addTextButton()`)
 */
export default function kaplayUI(k: KAPLAYCtx) {
  return {
    /**
     * # Text button
     * Creates a clickable game object containing a button with centered text.
     *
     * This helper provides sensible defaults for size, layout, and styling so you can
     * quickly add UI buttons to your KAPLAY game.
     *
     * ## Default Parameter Values
     * | Name     | Default      |
     * |:---------|:-------------|
     * | `txt`    | `"Button"`   |
     * | `width`  | `200`        |
     * | `height` | `100`        |
     *
     * ## Default Styling
     * The button object is created with:
     * - `k.outline(3)`
     * - `k.pos(0, 0)`
     * - `k.anchor("topleft")`
     * - `k.area()`
     *
     * @param {string} [txt="Button"]
     *   The text label displayed at the center of the button.
     *
     * @param {number} [width=200]
     *   Width of the button in pixels.
     *
     * @param {number} [height=100]
     *   Height of the button in pixels.
     *
     * @returns {TextButton}
     *   A KAPLAY Game Object representing the button with centered text.
     *
     * @example
     * const btn = addTextButton();
     * const playBtn = addTextButton("Play");
     * const wideBtn = addTextButton("Play", 150);
     * const smallBtn = addTextButton("Play", 150, 75);
     */
    addTextButton: (
      txt: string = "Settings",
      width: number = 150,
      height: number = 60,
    ): TextButton => createTextButton(k, txt, width, height),
    addLabel: () => {
      createLabel(k);
    },
  };
}
