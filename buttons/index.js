import "kaplay/global";

/**
 * Makes button with centered text
 * @param {string} txt - Button text to display
 * @param {number} x - The x postion to set (default is 0).
 * @param {number} y - The x postion to set (default is 0)
 * @param {number} width - Width of button (default is 100)
 * @param {number} height - Height of button (default is 50)
 * @param {number} btnRadius - Border radius of button (default is 8)
 * @param {number} txtSize - Text size of button (default is 15)
 * @returns {GameObj}
 */
export const makeTextButton = (
  txt,
  x = 0,
  y = 0,
  width = 100,
  height = 50,
  btnRadius = 8,
  txtSize = 15
) => {
  // Make button
  const btn = make([
    rect(width, height, { radius: btnRadius }),
    pos(x, y),
    area(),
    scale(1),
    outline(1),
    color(255, 255, 255),
  ]);

  // Make button text
  const btnText = make([
    text(txt, { size: txtSize }),
    pos(width / 2, height / 2),
    anchor("center"),
    color(0, 0, 0),
  ]);

  // Button text
  btn.add(btnText);

  return btn;
};

/**
 * Adds a clickable button icon button with hover effect
 * @param {string} spriteName - Sprite to use as icon
 * @param {Function} [onClick] - Click event handler (default is () => {}))
 * @param {number} x - The x postion to set (default is center().x).
 * @param {number} y - The x postion to set (default is center().y)
 * @param {number} w - Width of button (default is 48)
 * @param {number} h - Height of button (default is 48)
 * @param {boolean} [hoverFx] - Add hover effect (default is true)
 * @returns {GameObj}
 */
export const addIconButton = (
  spriteName,
  onClick = () => {},
  x = center().x,
  y = center().y,
  w = 48,
  h = 48,
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

  // Add button
  const iconBtn = add([
    rect(w, h, { radius: 8 }),
    pos(x, y),
    area(),
    scale(1),
    anchor("center"),
    outline(1),
  ]);

  // Add icon
  iconBtn.add([sprite(spriteName), anchor("center")]);

  // On click handler
  iconBtn.onClick(() => {
    setCursor("default");
    onClick();
  });

  // On hover effect
  iconBtn.onHover(() => {
    setCursor("pointer");
    if (hoverFx) {
      iconBtn.scale = vec2(1.03);
      shadow.scale = vec2(1.03);
    }
  });

  iconBtn.onHoverEnd(() => {
    setCursor("default");
    if (hoverFx) {
      iconBtn.scale = vec2(1);
      shadow.scale = vec2(1);
    }
  });

  return iconBtn;
};
