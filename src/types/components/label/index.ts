import { GameObj, RectComp, ColorComp, PosComp, OpacityComp } from "kaplay";

export type Label = GameObj<RectComp | ColorComp | PosComp | OpacityComp>;
