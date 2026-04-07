import {
  GameObj,
  RectComp,
  OutlineComp,
  PosComp,
  AnchorComp,
  AreaComp,
  ColorComp,
} from "kaplay";

import { KaplayColor, KaplayRGB } from "../helpers";

export type TextButtonElement = GameObj<
  | RectComp
  | OutlineComp
  | PosComp
  | AnchorComp
  | AreaComp
  | ColorComp
  | {
      setSize(w: number, h: number): void;
    }
>;

export interface TextButtonOptions {
  width?: number;
  height?: number;
  radius?: number;
  posX?: number;
  posY?: number;
  txtSize?: number;
  outline?: number;
  btnColor?: KaplayColor;
  outlineColor?: KaplayRGB;
  txtColor?: KaplayColor;
}
