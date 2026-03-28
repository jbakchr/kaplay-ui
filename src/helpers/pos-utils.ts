import { GameObj, PosComp, RectComp, AnchorComp } from "kaplay";

import { CenterPos } from "../types";

// Gets the center position of a Game Obejct using its width and height.
export function getCenterPos(
  gameObj: GameObj<RectComp | PosComp | AnchorComp>,
): CenterPos {
  return { cX: gameObj.width / 2, cY: gameObj.height / 2 };
}
