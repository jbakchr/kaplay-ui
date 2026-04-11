/// <reference path="./kaplay-ui.d.ts" />

import type { KAPLAYCtx } from "kaplay";

import {
  ButtonComponent,
  LabelComponent,
  LabelOptions,
  TextButtonOptions,
  IconButtonOptions,
} from "./types";

import { createLabel, createTextButton, createIconButton } from "./elements";

export default function kaplayUI(k: KAPLAYCtx) {
  return {
    addTextButton(txt: string, opts: TextButtonOptions = {}): ButtonComponent {
      return createTextButton(k, txt, opts);
    },

    addLabel(txt: string, opts: LabelOptions = {}): LabelComponent {
      return createLabel(k, txt, opts);
    },

    addIconButton(icon: string, opts: IconButtonOptions = {}) {
      return createIconButton(k, icon, opts);
    },
  };
}
