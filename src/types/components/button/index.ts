import {
  GameObj,
  RectComp,
  ColorComp,
  OutlineComp,
  PosComp,
  AnchorComp,
  AreaComp,
} from "kaplay";

export type Button = GameObj<
  RectComp | ColorComp | OutlineComp | PosComp | AnchorComp | AreaComp
>;
