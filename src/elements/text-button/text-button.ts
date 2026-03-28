import { KAPLAYCtx } from "kaplay";

// Types
import { TextButton } from "../../types";

// Components
import { makeButton, makeText } from "../../components/";

// Helpers
import { getCenterPos } from "../../helpers";

export function createTextButton(
  k: KAPLAYCtx,
  txt: string,
  width: number,
  height: number,
): TextButton {
  // Make button
  let btn = makeButton(k, width, height);

  // Get center position of button to be used for positioning the button text in the center
  const { cX, cY } = getCenterPos(btn);

  // Make centered button text
  const btnTxt = makeText(k, txt, cX, cY);

  // Create Text Button
  k.add(btn);
  btn.add(btnTxt);

  // Register button changes
  btn.onUse((id) => {
    // Button Anchor changes
    if (id === "anchor") {
      switch (btn.anchor) {
        case "bot":
          btnTxt.use(k.pos(0 * cX, -1 * cY));
          break;
        case "botleft":
          btnTxt.use(k.pos(1 * cX, -1 * cY));
          break;
        case "botright":
          btnTxt.use(k.pos(-1 * cX, -1 * cY));
          break;
        case "center":
          btnTxt.use(k.pos(0 * cX, 0 * cY));
          break;
        case "left":
          btnTxt.use(k.pos(1 * cX, 0 * cY));
          break;
        case "right":
          btnTxt.use(k.pos(-1 * cX, 0 * cY));
          break;
        case "top":
          btnTxt.use(k.pos(0 * cX, 1 * cY));
          break;
        case "topleft":
          btnTxt.use(k.pos(1 * cX, 1 * cY));
          break;
        case "topright":
          btnTxt.use(k.pos(-1 * cX, 1 * cY));
          break;
        default:
          break;
      }
    }
  });

  return btn;
}
