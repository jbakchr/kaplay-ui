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
  // Add more options later, for example:
  // fontSize?: number;
  // textColor?: string;
  // align?: "left" | "center" | "right";
}
