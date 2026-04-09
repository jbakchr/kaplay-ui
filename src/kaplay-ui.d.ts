import type {
  ButtonComponent,
  LabelComponent,
  LabelOptions,
  TextButtonOptions,
} from "./types";

declare module "kaplay" {
  interface KAPLAYCtx {
    addTextButton(txt: string, opts?: TextButtonOptions): ButtonComponent;

    addLabel(txt: string, opts?: LabelOptions): LabelComponent;
  }
}

export {};
