import { KAPLAYCtx } from "kaplay";

// Types
import { TextButton } from "../../types";

// Components
import { makeButton, makeText } from "../../components/";

// Helpers
import { getCenterPos, setChildPosition } from "../../helpers";

export function createTextButton(
  k: KAPLAYCtx,
  txt: string,
  width: number,
  height: number,
): TextButton {
  // Make button
  const btn = makeButton(k, width, height);

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
      // Set new postion of Button Text (child)
      setChildPosition(k, btn, btnTxt, cX, cY);
    }
  });

  return btn;
}
