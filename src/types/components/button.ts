import {
  GameObj,
  RectComp,
  PosComp,
  AnchorComp,
  AreaComp,
  Anchor,
} from "kaplay";
import { KaplayColor, KaplayRGB } from "../helpers";

export interface ButtonOptions {
  width?: number;
  height?: number;
  radius?: number;
  posX?: number;
  posY?: number;
  outline?: number;
  btnColor?: KaplayColor;
  outlineColor?: KaplayRGB;
}

export type ButtonComponent = GameObj<
  | RectComp
  | PosComp
  | AnchorComp
  | AreaComp
  | {
      setSize(w: number, h: number): void;
      setPosition(x: number, y: number): void;
      setRadius(r: number): void;
      setOutline(t: number): void;
      setButtonText(txt: string): void;
      setButtonTextSize(size: number): void;
      setButtonColor(color: KaplayColor): void;
      setButtonOutlineColor(color: KaplayRGB): void;
      setAnchor(a: Anchor): void;
      setButtonTextColor(color: KaplayColor): void;
    }
>;
