import "kaplay/global";

/**
 * Makes button with centered text
 * @param {string} txt - Button text to display
 * @param {number} x - The x postion to set (default is 0).
 * @param {number} y - The x postion to set (default is 0)
 * @param {number} width - Width of button (default is 100)
 * @param {number} height - Height of button (default is 50)
 * @param {number} btnRadius - Border radius of button (default is 8)
 * @param {number} btnOutline - Button outline (default is 1)
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
  btnOutline = 1,
  txtSize = 15
) => {
  // Make button
  const btn = make([
    rect(width, height, { radius: btnRadius }),
    pos(x, y),
    area(),
    scale(1),
    outline(btnOutline),
    color(255, 255, 255),
  ]);

  // Make button text
  const btnText = make([
    text(txt, { size: txtSize }),
    pos(width / 2, height / 2),
    anchor("center"),
    color(0, 0, 0),
  ]);

  // Add text to button
  btn.add(btnText);

  return btn;
};

/**
 * Makes toggle
 * @param {number} x - The x postion to set (default is 0)
 * @param {number} y - The x postion to set (default is 0)
 * @param {number} width - Toggle width (default is 50)
 * @param {number} height - Toggle height (default is 25)
 * @returns {GameObj}
 */
export const makeToggle = (x = 0, y = 0, width = 50, height = 25) => {
  // Toggle base
  const toggle = make([
    rect(width, height, { radius: height / 2 }),
    pos(x, y),
    color(169, 169, 169),
    area(),
    {
      toggled: false,
    },
  ]);

  // Toggle button
  const toggleBtn = make([
    circle(height * 0.4),
    color(WHITE),
    pos(height / 2, height / 2),
  ]);

  // Add button to toggleBase
  toggle.add(toggleBtn);

  toggle.onClick(() => {
    if (toggle.toggled) {
      toggle.use(color(169, 169, 169));
      toggleBtn.use(pos(height / 2, height / 2));
      toggle.toggled = false;
    } else {
      toggle.use(color(171, 221, 100));
      toggleBtn.use(pos(width - height / 2, height / 2));
      toggle.toggled = true;
    }
  });

  return toggle;
};
