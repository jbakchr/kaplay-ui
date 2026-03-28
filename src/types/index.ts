import {
  GameObj,
  RectComp,
  OutlineComp,
  PosComp,
  AnchorComp,
  AreaComp,
} from "kaplay";

export type TextButton = GameObj<
  RectComp | OutlineComp | PosComp | AnchorComp | AreaComp
>;

export type CenterPos = { cX: number; cY: number };

export type Vector2 = { vX: number; vY: number };
