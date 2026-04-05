import {
  GameObj,
  RectComp,
  OutlineComp,
  PosComp,
  AnchorComp,
  AreaComp,
} from "kaplay";

export type ButtonComponent = GameObj<
  | RectComp
  | PosComp
  | OutlineComp
  | AnchorComp
  | AreaComp
  | {
      setSize(w: number, h: number): void;
    }
>;
