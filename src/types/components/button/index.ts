import {
  GameObj,
  RectComp,
  ColorComp,
  OutlineComp,
  PosComp,
  AnchorComp,
  AreaComp,
} from "kaplay";

export type ButtonComponent = GameObj<
  RectComp | ColorComp | OutlineComp | PosComp | AnchorComp | AreaComp
>;
