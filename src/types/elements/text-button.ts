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

export type KaplayColor =
  | string
  | [number, number, number]
  | { r: number; g: number; b: number }
  | import("kaplay").Color;

export type KaplayRGB =
  | string // "#ff00aa"
  | [number, number, number]; // [r, g, b]

export interface TextButtonOptions {
  width?: number;
  height?: number;
  radius?: number;
  posX?: number;
  posY?: number;
  txtSize?: number;
  outline?: number;
  btnColor?: KaplayColor;
  outlineColor?: KaplayRGB; // ✅ new
}
