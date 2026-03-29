import {
  GameObj,
  RectComp,
  ColorComp,
  PosComp,
  OpacityComp,
  AnchorComp,
} from "kaplay";

export type LabelComponent = GameObj<
  RectComp | ColorComp | PosComp | OpacityComp | AnchorComp
>;
