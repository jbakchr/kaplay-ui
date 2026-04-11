import { TextButtonOptions } from "./text-button";

export interface IconButtonOptions extends TextButtonOptions {
  /**
   * Optional scale applied to the icon sprite
   * Defaults to 1
   */
  iconScale?: number;
}
