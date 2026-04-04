import {
  GameObj,
  RectComp,
  OutlineComp,
  PosComp,
  AnchorComp,
  AreaComp,
  ColorComp,
} from "kaplay";

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
  btnColor?: [r: number, g: number, b: number];
}
