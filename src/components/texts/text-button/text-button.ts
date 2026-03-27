import type {
  GameObj,
  KAPLAYCtx,
  PosComp,
  RectComp,
  OutlineComp,
  AnchorComp,
  AreaComp,
} from "kaplay";

export function makeButtonText(
  k: KAPLAYCtx,
  btn: GameObj<PosComp | RectComp | OutlineComp | AnchorComp | AreaComp>,
  txt: string,
) {
  const btnTxt = k.make([
    k.text(txt),
    k.color(0, 0, 0),
    k.pos(btn.width / 2, btn.height / 2),
    k.anchor("center"),
  ]);

  return btnTxt;
}
