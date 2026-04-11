import { KAPLAYCtx } from "kaplay";

// Types
import { IconButtonOptions } from "../types/elements";
import { ButtonComponent } from "../types";

// Components
import { makeIcon } from "../components/icon";
import { makeButton } from "../components";

// Helpers
import { getCenterPos } from "../helpers";

export function createIconButton(
  k: KAPLAYCtx,
  iconURL: string,
  opts: IconButtonOptions,
): ButtonComponent {
  // Make button
  const btn = makeButton(k, opts, "topleft");

  // Make centered icon
  const { cX, cY } = getCenterPos(btn);
  const icon = makeIcon(k, iconURL, opts, cX, cY, "center");

  // Add icon button
  btn.add(icon);
  k.add(btn);

  // Return icon button
  return btn;
}
