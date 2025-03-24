import "kaplay/global";

export const addTextButton = (x, y, txt, f = () => {}) => {
  const btn = add([
    rect(240, 80, { radius: 8 }),
    pos(x, y),
    area(),
    anchor("center"),
    outline(4),
    color(255, 255, 255),
  ]);

  btn.add([text(txt), anchor("center"), color(0, 0, 0)]);

  btn.onClick(f);

  return btn;
};
