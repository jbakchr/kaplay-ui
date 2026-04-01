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

export interface TextButtonOptions {
  width?: number;
  height?: number;
  radius?: number;
  posX?: number;
  posY?: number;
  txtSize?: number;
  outline?: number;
  // Add more options later, for example:
  // fontSize?: number;
  // textColor?: string;
  // align?: "left" | "center" | "right";
}
