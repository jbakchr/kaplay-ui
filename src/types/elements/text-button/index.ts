import {
  GameObj,
  RectComp,
  OutlineComp,
  PosComp,
  AnchorComp,
  AreaComp,
} from "kaplay";

export type TextButtonElement = GameObj<
  | RectComp
  | OutlineComp
  | PosComp
  | AnchorComp
  | AreaComp
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
}
