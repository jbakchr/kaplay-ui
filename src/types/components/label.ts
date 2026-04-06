import {
  GameObj,
  RectComp,
  ColorComp,
  PosComp,
  OpacityComp,
  AnchorComp,
} from "kaplay";

export type LabelComponent = GameObj<
  | RectComp
  | ColorComp
  | PosComp
  | OpacityComp
  | AnchorComp
  | {
      setSize(w: number, h: number): void;
      setPosition(x: number, y: number): void;
    }
>;
