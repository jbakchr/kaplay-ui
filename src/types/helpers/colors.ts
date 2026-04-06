export type KaplayColor =
  | string
  | [number, number, number]
  | { r: number; g: number; b: number }
  | import("kaplay").Color;

export type KaplayRGB =
  | string // "#ff00aa"
  | [number, number, number]; // [r, g, b]
