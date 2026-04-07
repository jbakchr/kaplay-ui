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
 * A lightweight UI helper plugin that extends the KAPLAY context (`k`)
 * with convenience methods for creating common, reusable UI components
 * such as text buttons and labels.
 *
 * This plugin focuses on *simple, code-driven UI composition* by providing
 * sensible defaults while still allowing full runtime control over layout,
 * styling, and text.
 *
 * ---
 *
 * ## What this plugin does
 * When included via `kaplay({ plugins: [...] })`, this plugin augments
 * the existing KAPLAY context with the following helper methods:
 *
 * - `k.addTextButton(txt, opts?) → ButtonComponent`
 *   Creates an interactive button with centered text and exposes methods
 *   for updating size, position, colors, radius, outline, anchor, and text
 *   properties at runtime.
 *
 * - `k.addLabel(txt, opts?) → LabelComponent`
 *   Creates a non-interactive text label with a background surface and
 *   exposes methods for dynamically updating layout, appearance, and text.
 *
 * These helpers eliminate the need to manually wire up common UI primitives
 * while still returning fully controllable game objects.
 *
 * ---
 *
 * ## Design philosophy
 * - No layout system or retained UI tree
 * - No reactivity framework
 * - No hidden state
 *
 * UI elements are regular KAPLAY game objects with small, focused helper
 * methods attached for convenience.
 *
 * ---
 *
 * ## Usage
 *
 * @example
 * import kaplay from "kaplay";
 * import kaplayUI from "kaplay-ui";
 *
 * const k = kaplay({
 *   plugins: [kaplayUI],
 * });
 *
 * const btn = k.addTextButton("Start");
 * btn.onClick(() => console.log("Game starting…"));
 *
 * const label = k.addLabel("Score: 0");
 * label.setPosition(20, 20);
 *
 * ---
 *
 * @returns {{
 *   addTextButton: Function,
 *   addLabel: Function
 * }}
 * Kaplay merges the returned object into the `k` context, making the
 * UI helpers available as `k.addTextButton()` and `k.addLabel()`.
 *
 * The plugin itself does not create or return UI elements directly.
 */
export default function kaplayUI(k: KAPLAYCtx): {
  /**
   * # Text Button
   * Creates a clickable UI button with centered text.
   *
   * This helper provides sensible defaults for size, layout, and styling<br>
   * so you can quickly add text-based buttons to your KAPLAY game or UI.
   *
   * ---
   *
   * ## Parameters
   *
   * ### Required Parameters
   * - `txt` {string}
   *   Initial text label displayed at the center of the button.
   *
   * ### Default Parameter Values for `opts`
   * - `opts.width`: `150`
   * - `opts.height`: `60`
   * - `opts.posX`: `0`
   * - `opts.posY`: `0`
   * - `opts.radius`: `10`
   * - `opts.outline`: `3`
   * - `opts.btnColor`: `[200, 200, 200]`
   * - `opts.outlineColor`: `"#5c5b5b"`
   * - `opts.txtSize`: `20`
   * - `opts.txtColor`: `[0, 0, 0]`
   * ---
   *
   * ## Default Styling
   * The button object is created with:
   * - `k.anchor("topleft")`
   * - `k.area()`
   *
   * The button text is created with:
   * - `k.anchor("center")`
   *
   * ---
   *
   * ## Button Instance Methods
   * The returned `ButtonComponent` exposes the following mutator methods,
   * allowing the button to be updated after creation:
   *
   * ### Layout & Geometry
   * - `setSize(w: number, h: number): void`
   *   Update the button width and height.
   *
   * - `setPosition(x: number, y: number): void`
   *   Move the button to a new position.
   *
   * - `setAnchor(a: Anchor): void`
   *   Change the anchor used for positioning.
   *
   * - `setRadius(r: number): void`
   *   Update the corner radius.
   *
   * - `setOutline(t: number): void`
   *   Set the outline thickness.
   *
   * ### Text
   * - `setButtonText(txt: string): void`
   *   Replace the button label.
   *
   * - `setButtonTextSize(size: number): void`
   *   Change the font size of the button text.
   *
   * - `setButtonTextColor(color: KaplayColor): void`
   *   Update the text color.
   *
   * ### Colors
   * - `setButtonColor(color: KaplayColor): void`
   *   Change the button fill color.
   *
   * - `setButtonOutlineColor(color: KaplayRGB): void`
   *   Change the outline stroke color.
   *
   * ---
   *
   * @param {string} txt
   *   Required text label to be displayed at the center of the button.
   *
   * @param {TextButtonOptions} [opts={}]
   *   Optional configuration object used to customize the button.
   *
   * @returns {ButtonComponent}
   *   A clickable button instance with runtime mutation helpers attached.
   *
   * ---
   *
   * @example
   * // Basic usage
   * const playBtn = addTextButton("Play");
   * playBtn.onClick(() => console.log("Play clicked!"));
   *
   * @example
   * // Runtime mutation
   * const btn = addTextButton("Start");
   * btn.setSize(300, 120);
   * btn.setButtonColor([255, 100, 100]);
   * btn.setButtonText("Go!");
   *
   * @example
   * // Visual-only updates
   * const optionsBtn = addTextButton("Options", { radius: 2 });
   * optionsBtn.setButtonOutlineColor([0, 0, 0]);
   * optionsBtn.setButtonTextSize(24);
   */
  addTextButton(txt: string, opts?: TextButtonOptions): ButtonComponent;

  /**
   * # Label
   * Creates a simple text container with a background and layout box.
   *
   * Labels are lightweight UI elements used to display non-interactive text
   * such as titles, descriptions, or dynamic info (scores, status, etc.).
   *
   * ---
   *
   * ## Parameters
   *
   * ### Required Parameters
   * - `txt` {string}
   *   Initial label text content.
   *
   * ### Default Parameter Values for `opts`
   * - `opts.width`: `160`
   * - `opts.height`: `96`
   * - `opts.posX`: `0`
   * - `opts.posY`: `0`
   * - `opts.opacity`: `0.7`
   * - `opts.txtSize`: `22`
   *
   * ---
   *
   * ## Default Styling
   * The label background ("base") includes:
   * - `k.color(0, 0, 0)`
   * - `k.anchor("topleft")`
   *
   * The centered label text includes:
   * - `k.anchor("center")`
   * - `k.color(255, 255, 255)`
   *
   * ---
   *
   * ## Label Instance Methods
   * The returned `LabelComponent` exposes helper methods that allow
   * the label to be updated dynamically at runtime.
   *
   * ### Layout & Geometry
   * - `setSize(w: number, h: number): void`
   *   Update the label width and height.
   *
   * - `setPosition(x: number, y: number): void`
   *   Move the label to a new position.
   *
   * - `setRadius(r: number): void`
   *   Update the background corner radius.
   *
   * - `setLabelAnchor(anchor: Anchor): void`
   *   Change the anchor used for positioning the label.
   *
   * ### Appearance
   * - `setOpacity(o: number): void`
   *   Set label background opacity (0–1).
   *
   * - `setLabelColor(c: KaplayColor): void`
   *   Change the background color of the label.
   *
   * ### Text
   * - `setLabelText(txt: string): void`
   *   Replace the label text.
   *
   * - `setLabelTextSize(size: number): void`
   *   Change the font size of the label text.
   *
   * - `setLabelTextColor(c: KaplayColor): void`
   *   Update the label text color.
   *
   * ---
   *
   * @param {string} txt
   *   Required text content for the label.
   *
   * @param {LabelOptions} [opts={}]
   *   Optional configuration object used to customize the label.
   *
   * @returns {LabelComponent}
   *   A non-interactive label element with runtime mutation helpers attached.
   *
   * ---
   *
   * @example
   * let score = 0;
   * const scoreLabel = addLabel(`Score: ${score}`);
   *
   * k.wait(2, () => {
   *   score++;
   *   scoreLabel.setLabelText(`Score: ${score}`);
   * });
   *
   * @example
   * // Runtime appearance updates
   * const title = addLabel("Game Over", { txtSize: 36 });
   * title.setLabelColor([40, 40, 40]);
   * title.setOpacity(0.9);
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
