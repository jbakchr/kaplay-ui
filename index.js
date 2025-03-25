import "kaplay/global";

/**
 * Adds a clickable button with custom text
 * @param {string} txt - Button text to display
 * @param {Function} [onClick] - Click event handler (default is () => {}))
 * @param {number} x - The x postion to set (default is center().x).
 * @param {y} y - The x postion to set (default is center().y)
 * @param {w} w - Width of button (default is 120)
 * @param {h} h - Height of button (default is 50)
 * @param {txtSize} txtSize - Text size of button (default is 15)
 * @param {boolean} [hover] - Add hover effect (default is true)
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
  hover = true
) => {
  // Button
  const btn = add([
    rect(w, h, { radius: 8 }),
    pos(x, y),
    area(),
    anchor("center"),
    outline(4),
    color(255, 255, 255),
  ]);

  // Button text
  btn.add([text(txt, { size: txtSize }), anchor("center"), color(0, 0, 0)]);

  // On click handler
  btn.onClick(onClick);

  btn.onHoverUpdate(() => {
    setCursor("pointer");
    if (hover) {
      btn.scale = vec2(1.1);
    }
  });

  btn.onHoverEnd(() => {
    setCursor("default");
    if (hover) {
      btn.scale = vec2(1);
    }
  });

  return btn;
};
