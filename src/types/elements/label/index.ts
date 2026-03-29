import {
  AnchorComp,
  ColorComp,
  GameObj,
  OpacityComp,
  PosComp,
  RectComp,
} from "kaplay";

export type LabelElement = GameObj<
  RectComp | PosComp | ColorComp | OpacityComp | AnchorComp
>;
