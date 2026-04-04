import { GameObj, PosComp, RectComp, AnchorComp, KAPLAYCtx } from "kaplay";

import { CenterPos } from "../types";

// Gets the center position of a Game Obejct using its width and height.
export function getCenterPos(
  gameObj: GameObj<RectComp | PosComp | AnchorComp>,
): CenterPos {
  return { cX: gameObj.width / 2, cY: gameObj.height / 2 };
}

export function setChildPosition(
  k: KAPLAYCtx,
  parentObj: GameObj<RectComp | PosComp | AnchorComp>,
  childObj: GameObj<RectComp | PosComp | AnchorComp | any>,
  cX: number,
  cY: number,
): void {
  switch (parentObj.anchor) {
    case "bot":
      childObj.use(k.pos(0 * cX, -1 * cY));
      break;
    case "botleft":
      childObj.use(k.pos(1 * cX, -1 * cY));
      break;
    case "botright":
      childObj.use(k.pos(-1 * cX, -1 * cY));
      break;
    case "center":
      childObj.use(k.pos(0 * cX, 0 * cY));
      break;
    case "left":
      childObj.use(k.pos(1 * cX, 0 * cY));
      break;
    case "right":
      childObj.use(k.pos(-1 * cX, 0 * cY));
      break;
    case "top":
      childObj.use(k.pos(0 * cX, 1 * cY));
      break;
    case "topleft":
      childObj.use(k.pos(1 * cX, 1 * cY));
      break;
    case "topright":
      childObj.use(k.pos(-1 * cX, 1 * cY));
      break;
    default:
      break;
  }
}
