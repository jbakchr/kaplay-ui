import { GameObj, RectComp, PosComp, OpacityComp, AnchorComp } from "kaplay";

export type LabelComponent = GameObj<
  | RectComp
  | PosComp
  | OpacityComp
  | AnchorComp
  | {
      setSize(w: number, h: number): void;
      setRadius(r: number): void;
      setPosition(x: number, y: number): void;
      setOpacity(o: number): void;
    }
>;
