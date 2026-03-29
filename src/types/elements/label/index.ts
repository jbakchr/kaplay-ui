import {
  AnchorComp,
  ColorComp,
  GameObj,
  OpacityComp,
  PosComp,
  RectComp,
  TextComp,
  TextCompOpt,
} from "kaplay";

export type LabelElement = GameObj<
  | RectComp
  | PosComp
  | ColorComp
  | OpacityComp
  | AnchorComp
  | TextComp
  | TextCompOpt
>;
