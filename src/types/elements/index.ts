import {
  GameObj,
  RectComp,
  OutlineComp,
  PosComp,
  AnchorComp,
  AreaComp,
} from "kaplay";

export type TextButtonElement = GameObj<
  RectComp | OutlineComp | PosComp | AnchorComp | AreaComp
>;
