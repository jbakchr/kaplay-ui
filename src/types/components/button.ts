import { GameObj, RectComp, PosComp, AnchorComp, AreaComp } from "kaplay";

export type ButtonComponent = GameObj<
  | RectComp
  | PosComp
  | AnchorComp
  | AreaComp
  | {
      setSize(w: number, h: number): void;
      setPosition(x: number, y: number): void;
      setRadius(r: number): void;
    }
>;
