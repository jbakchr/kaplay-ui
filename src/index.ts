import type { KAPLAYCtx } from "kaplay";

// Types
import {
  LabelComponent,
  LabelOptions,
  TextButtonElement,
  TextButtonOptions,
} from "./types";

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
  /**
   * # Text Button
   * Creates a clickable UI button with centered text.
   *
   * This helper provides sensible defaults for size, layout, and styling<br>
   * so you can quickly add text-based buttons to your KAPLAY game or UI.
   *
   * ## Parameters
   *
   * ### Required Paramters
   * - `txt` {string}
   *
   * ### Default Parameter Values for 'opts'
   * - `opts.width`: `150`
   * - `opts.height`: `60`
   * - `opts.radius`: `10`
   * - `opts.posX`: `0`
   * - `opts.posY`: `0`
   * - `opts.outline`: `3`
   *
   * ## Default Styling
   * The button object is created with:
   * - `k.anchor("topleft")`
   * - `k.color(200, 200, 200)`
   * - `k.outline(opts.outline, k.rgb(92, 91, 91))`
   * - `k.area()`
   *
   * @param {string} [txt]
   *   Required text label to be displayed at the center of the button.
   *
   * @param {TextButtonOptions} [opts={}]
   *   Optional configuration object used to customize the button.
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
   * const tallBtn = addTextButton("Options", { radius: 2 });
   */
  addTextButton(txt: string, opts?: TextButtonOptions): TextButtonElement;
  /**
   * # Label
   *
   * Creates a simple text container with a background and layout box.
   *
   * Labels are lightweight UI elements used to display non-interactive text
   * such as titles, descriptions, or dynamic info (scores, status, etc.).
   *
   * ## Parameters
   *
   * ### Required Paramters
   * - `txt` {string}
   *
   * ### Default Parameter Values for 'opts'
   * - `opts.width`: `160`
   * - `opts.height`: `96`
   * - `opts.txtSize`: `22`
   *
   * ## Default Styling
   *
   * A labels base (its 'background' surface) includes:
   * - `k.pos(0, 0)`
   * - `k.color(0, 0, 0)`
   * - `k.opacity(0.7)`
   * - `k.anchor("topleft")`
   *
   * A label centered text includes:
   * - `k.anchor("center"))
   * - `k.color(255, 255, 255))
   *
   * @param {TextButtonOptions} [opts={}]
   *   Optional configuration object used to customize the button.
   *
   * @returns {LabelElement}
   *   A KAPLAY game object representing a text label.
   *
   * @example
   * let score = 0
   * const scoreLabel = addLabel(`Score: ${score}`);
   *
   * k.wait(2, () => {
   *   score++;
   *   scoreLabel.children[0].text = `Score: ${score}`;
   * })
   */
  addLabel(txt: string, opts?: LabelOptions): LabelComponent;
} {
  return {
    addTextButton: (
      txt: string,
      opts: TextButtonOptions = {},
    ): TextButtonElement => createTextButton(k, txt, opts),
    addLabel: (txt, opts: LabelOptions = {}): LabelComponent =>
      createLabel(k, txt, opts),
  };
}
