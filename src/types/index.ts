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
