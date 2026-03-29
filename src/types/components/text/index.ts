import { GameObj, TextComp, ColorComp, PosComp, AnchorComp } from "kaplay";

export type TextComponent = GameObj<
  TextComp | ColorComp | PosComp | AnchorComp
>;
