import kaplay from "kaplay";
import "kaplay/global";

export const addButton = (w, h, x, y) => {
  const btn = add([rect(w, h), pos(x, y), area(), anchor("center")]);
  return btn;
};
