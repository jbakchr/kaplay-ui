import { GameObj, RectComp, PosComp, AnchorComp, AreaComp } from "kaplay";

export type ButtonComponent = GameObj<
  | RectComp
  | PosComp
  | AnchorComp
  | AreaComp
  | {
      setSize(w: number, h: number): void;
    }
>;
