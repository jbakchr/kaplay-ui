/// <reference path="./kaplay-ui.d.ts" />

import type { KAPLAYCtx } from "kaplay";

import {
  ButtonComponent,
  LabelComponent,
  LabelOptions,
  TextButtonOptions,
} from "./types";

import { createLabel, createTextButton } from "./elements";

export default function kaplayUI(k: KAPLAYCtx) {
  return {
    addTextButton(txt: string, opts: TextButtonOptions = {}): ButtonComponent {
      return createTextButton(k, txt, opts);
    },

    addLabel(txt: string, opts: LabelOptions = {}): LabelComponent {
      return createLabel(k, txt, opts);
    },
  };
}
