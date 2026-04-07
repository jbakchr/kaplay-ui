import { GameObj, RectComp, PosComp, AnchorComp, AreaComp } from "kaplay";
import { KaplayColor } from "../helpers";

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
    }
>;
