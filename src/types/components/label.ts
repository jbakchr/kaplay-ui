import { GameObj, RectComp, PosComp, OpacityComp, AnchorComp } from "kaplay";
import { KaplayColor } from "../helpers";

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
      setLabelColor(c: KaplayColor): void;
      setLabelText(txt: string): void;
    }
>;
