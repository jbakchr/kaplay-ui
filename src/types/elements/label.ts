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
import { KaplayColor } from "../helpers";

export type LabelElement = GameObj<
  | RectComp
  | PosComp
  | ColorComp
  | OpacityComp
  | AnchorComp
  | TextComp
  | TextCompOpt
>;

export interface LabelOptions {
  width?: number;
  height?: number;
  radius?: number;
  posX?: number;
  posY?: number;
  opacity?: number;
  txtSize?: number;
  lblColor?: KaplayColor;
}
