import "kaplay/global";

/**
 * Adds a clickable button with custom text
 * @param {string} txt - Button text to display
 * @param {Function} [onClick] - Click event handler (default is () => {}))
 * @param {number} x - The x postion to set (default is center().x).
 * @param {number} y - The x postion to set (default is center().y)
 * @param {number} w - Width of button (default is 120)
 * @param {number} h - Height of button (default is 50)
 * @param {number} txtSize - Text size of button (default is 15)
 * @param {boolean} [hoverFx] - Add hover effect (default is true)
 * @returns {GameObj}
 */
export const addTextButton = (
  txt,
  onClick = () => {},
  x = center().x,
  y = center().y,
  w = 120,
  h = 50,
  txtSize = 15,
  hoverFx = true
) => {
  // Shadow effect
  const shadow = add([
    rect(w, h, { radius: 8 }),
    pos(x + 2, y + 2),
    area(),
    scale(1),
    anchor("center"),
    outline(1),
    color(128, 128, 128),
  ]);

  // Button
  const btn = add([
    rect(w, h, { radius: 8 }),
    pos(x, y),
    area(),
    scale(1),
    anchor("center"),
    outline(1),
    color(255, 255, 255),
  ]);

  // Button text
  btn.add([text(txt, { size: txtSize }), anchor("center"), color(0, 0, 0)]);

  // On click handler
  btn.onClick(onClick);

  btn.onHover(() => {
    setCursor("pointer");
    if (hoverFx) {
      btn.scale = vec2(1.03);
      shadow.scale = vec2(1.03);
    }
  });

  btn.onHoverEnd(() => {
    setCursor("default");
    if (hoverFx) {
      btn.scale = vec2(1);
      shadow.scale = vec2(1);
    }
  });

  return btn;
};
