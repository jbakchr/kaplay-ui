import { KAPLAYCtx } from "kaplay";

// Types
import { ButtonComponent, TextButtonOptions } from "../types";

// Components
import { makeButton, makeText } from "../components";

// Helpers
import { getCenterPos, setChildPosition } from "../helpers";
import { isLayoutChange } from "../helpers/layout-utils";

export function createTextButton(
  k: KAPLAYCtx,
  txt: string,
  opts: TextButtonOptions,
): ButtonComponent {
  // Defaults
  const txtBtnOpts = {
    txtColor: [0, 0, 0] as [number, number, number],
    ...opts,
  } as TextButtonOptions;

  // Make button
  const btn = makeButton(k, txtBtnOpts, "topleft");

  // Make centered text
  const { cX, cY } = getCenterPos(btn);
  const btnTxt = makeText(k, txt, txtBtnOpts, cX, cY, "center");

  // Add text button
  btn.add(btnTxt);
  k.add(btn);

  // Re-position text on layout-related changes
  btn.onUse((id) => {
    if (isLayoutChange(id)) {
      const { cX, cY } = getCenterPos(btn);
      setChildPosition(k, btn, btnTxt, cX, cY);
    }
  });

  btn.onHover(() => {
    k.setCursor("pointer");
  });

  btn.onHoverEnd(() => {
    k.setCursor("default");
  });

  return btn;
}
