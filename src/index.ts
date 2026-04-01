import type { KAPLAYCtx } from "kaplay";

// Types
import { LabelComponent, TextButtonElement, TextButtonOptions } from "./types";

// Text Button
import { createLabel, createTextButton } from "./elements";

/**
 * # KAPLAY UI Plugin
 *
 * A small UI helper plugin that adds convenience functions for creating
 * common UI components such as buttons and labels within a KAPLAY game.
 *
 * ## Available UI Creation Helpers
 *
 * @returns {object} An object exposing UI creation helpers on `k`:
 * - `addTextButton(txt?, width?, height?) → TextButtonElement`
 * - `addLabel(txt?, width?, height?) → LabelComponent`
 *
 * ## Examples
 *
 * @example
 * import kaplay from "kaplay";
 * import kaplayUI from "kaplay-ui"
 *
 * const k = kaplay({
 *    plugins: [kaplayUI]
 * })
 *
 * const label = k.addLabel("Hello!");
 * const button = k.addTextButton("Start");
 */

export default function kaplayUI(k: KAPLAYCtx): {
  addTextButton(
    txt: string,
    opts?: { width?: number; height?: number },
  ): TextButtonElement;
  addLabel(txt?: string, width?: number, height?: number): LabelComponent;
} {
  return {
    /**
     * # Text Button
     * Creates a clickable UI button with centered text.
     *
     * This helper provides sensible defaults for size, layout, and styling so you can
     * quickly add text-based buttons to your KAPLAY game or UI.
     *
     * ## Default Parameter Values
     * - `txt`: `"Button"`
     * - `opts.width`: `150`
     * - `opts.height`: `60`
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
     * @param {TextButtonOptions} [opts={}]
     *   Optional configuration object used to customize the button.
     *
     * @param {number} [opts.width=150]
     *   Width of the button in pixels.
     *
     * @param {number} [opts.height=60]
     *   Height of the button in pixels.
     *
     * @returns {TextButtonElement}
     *   A KAPLAY Game Object representing the button with centered text.
     *
     * @example
     * // Basic usage (uses default width/height)
     * const playBtn = addTextButton("Play");
     * playBtn.onClick(() => console.log("Play clicked!"));
     *
     * @example
     * // Custom sizing
     * const bigBtn = addTextButton("Start", { width: 300, height: 120 });
     *
     * @example
     * // Override only one dimension
     * const tallBtn = addTextButton("Options", { height: 200 });
     */
    addTextButton: (
      txt: string,
      opts: TextButtonOptions = {},
    ): TextButtonElement =>
      createTextButton(k, txt, {
        width: opts.width ?? 150,
        height: opts.height ?? 60,
      }),
    /**
     * # Label
     * Creates a simple text container with a background and layout box.
     *
     * Labels are lightweight UI elements used to display non-interactive text
     * such as titles, descriptions, or dynamic info (scores, status, etc.).
     *
     * ## Default Parameter Values
     * - `txt`: `""`
     * - `width`: `160`
     * - `height`: `96`
     *
     * ## Default Styling
     * A label includes:
     * - `k.color(0, 0, 0)`
     * - `k.opacity(0.7)`
     * - `k.anchor("topleft")`
     *
     * @param {string} [txt=""]
     *   The text content shown inside the label.
     *
     * @param {number} [width=160]
     *   Width of the label container in pixels.
     *
     * @param {number} [height=96]
     *   Height of the label container in pixels.
     *
     * @returns {LabelElement}
     *   A KAPLAY game object representing a text label.
     *
     * @example
     * let score = 0
     * const scoreLabel = addLabel(`Score: ${score}`);
     *
     * k.wait(2, () => {
     *   score++:
     *   scoreLabel.children[0].text = `Score: ${score}`
     * })
     */
    addLabel: (
      txt: string = "",
      width: number = 160,
      height: number = 96,
    ): LabelComponent => createLabel(k, txt, width, height),
  };
}
