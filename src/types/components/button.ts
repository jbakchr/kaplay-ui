import {
  GameObj,
  RectComp,
  ColorComp,
  OutlineComp,
  PosComp,
  AnchorComp,
  AreaComp,
} from "kaplay";

export type ButtonComponent = GameObj<
  | RectComp
  | PosComp
  | ColorComp
  | OutlineComp
  | AnchorComp
  | AreaComp
  | {
      setSize(w: number, h: number): void;
    }
>;
