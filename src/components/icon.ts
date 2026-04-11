import { Anchor, KAPLAYCtx } from "kaplay";
import { IconButtonOptions } from "../types";
import { IconComponent } from "../types/components/icon";

export function makeIcon(
  k: KAPLAYCtx,
  iconUrl: string,
  opts: IconButtonOptions,
  posX: number,
  posY: number,
  anchor: Anchor,
): IconComponent {
  const iconScale = opts.iconScale ?? 0.5;

  const icon = k.make([
    k.sprite(iconUrl),
    k.pos(posX, posY),
    k.anchor(anchor),
    k.scale(iconScale),
  ]);

  return icon;
}
