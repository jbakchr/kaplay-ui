import {
  GameObj,
  RectComp,
  OutlineComp,
  PosComp,
  AnchorComp,
  AreaComp,
  ColorComp,
} from "kaplay";

import { KaplayColor } from "../helpers";
import { ButtonOptions } from "../components";

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

export interface TextButtonOptions extends ButtonOptions {
  txtSize?: number;
  txtColor?: KaplayColor;
}
