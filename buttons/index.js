import "kaplay/global";

/**
 * Adds a text button with shadow and hover effect
 * @param {string} txt - Button text to display
 * @param {number} x - The x postion to set (default is center().x).
 * @param {number} y - The x postion to set (default is center().y)
 * @param {number} width - Width of button (default is 120)
 * @param {number} height - Height of button (default is 50)
 * @param {number} btnRadius - Border radius of button (default is 8)
 * @param {number} txtSize - Text size of button (default is 15)
 * @param {boolean} [hoverFx] - Add hover effect (default is true)
 * @returns {GameObj}
 */
export const addTextButton = (
  txt,
  x = center().x,
  y = center().y,
  width = 120,
  height = 50,
  btnRadius = 8,
  txtSize = 15,
  hoverFx = true
) => {
  // Shadow effect
  const shadow = add([
    rect(width, height, { radius: btnRadius }),
    pos(x + 2, y + 2),
    area(),
    scale(1),
    anchor("center"),
    outline(1),
    color(128, 128, 128),
  ]);

  // Button
  const btn = add([
    rect(width, height, { radius: btnRadius }),
    pos(x, y),
    area(),
    scale(1),
    anchor("center"),
    outline(1),
    color(255, 255, 255),
  ]);

  // Button text
  btn.add([text(txt, { size: txtSize }), anchor("center"), color(0, 0, 0)]);

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
