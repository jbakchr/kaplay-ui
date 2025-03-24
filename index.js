import "kaplay/global";

/**
 * Adds a clickable button with custom text
 * @param {number} x - The x postion to set.
 * @param {y} y - The y position to set.
 * @param {string} txt - Button text to display
 * @param {Function} [f] - Click event handler (default is () => {}))
 * @param {boolean} [hover] - Add hover effect (default is true)
 * @returns {GameObj}
 */
export const addTextButton = (x, y, txt, f = () => {}, hover = true) => {
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
