import type { KAPLAYCtx } from "kaplay";

// Types
import {
  ButtonComponent,
  LabelComponent,
  LabelOptions,
  TextButtonOptions,
} from "./types";

// Text Button
import { createLabel, createTextButton } from "./elements";

/**
 * # KAPLAY-UI Plugin
 *
 * A small UI helper plugin that augments the KAPLAY context (`k`)
 * with convenience functions for creating common UI components such
 * as text buttons and labels.
 *
 * ## What this plugin does
 * When included in `kaplay({ plugins: [...] })`, this plugin attaches
 * the following helper methods directly onto the `k` instance:
 *
 * - `k.addTextButton(txt, opts?) → TextButtonElement`
 * - `k.addLabel(txt, opts?) → LabelComponent`
 *
 * The plugin itself does **not** return a UI object.
 * Instead, it extends the existing `k` context with new methods.
 *
 * ## Example
 *
 * @example
 * import kaplay from "kaplay";
 * import kaplayUI from "kaplay-ui";
 *
 * const k = kaplay({
 *   plugins: [kaplayUI]
 * });
 *
 * const btn = k.addTextButton("Start");
 * const label = k.addLabel("Hello!");
 *
 * @returns {{ addTextButton: Function, addLabel: Function }}
 * Kaplay merges the returned object into the `k` context.
 * These functions then become available as `k.addTextButton` and `k.addLabel`.
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
  addTextButton(txt: string, opts?: TextButtonOptions): ButtonComponent;
  /**
   * # Label
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
   * - `opts.posX`: `0`
   * - `opts.posY`: `0`
   * - `opts.opacity`: `0.7`
   * - `opts.txtSize`: `22`
   *
   * ## Default Styling
   * A labels base (its 'background' surface) includes:
   * - `k.color(0, 0, 0)`
   * - `k.anchor("topleft")`
   *
   * A label centered text includes:
   * - `k.anchor("center"))
   * - `k.color(255, 255, 255))
   *
   * @param {LabelOptions} [opts={}]
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
    ): ButtonComponent => createTextButton(k, txt, opts),
    addLabel: (txt: string, opts: LabelOptions = {}): LabelComponent =>
      createLabel(k, txt, opts),
  };
}
