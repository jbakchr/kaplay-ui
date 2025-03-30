import "kaplay/global";

import cbIcon from "../assets/cb-icon.png";

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
      toggle.use(color(148, 188, 236));
      toggleBtn.use(pos(width - height / 2, height / 2));
      toggle.toggled = true;
    }
  });

  return toggle;
};

/**
 * Makes checkbox
 * @param {number} x - The x postion to set (default is 0)
 * @param {number} y - The x postion to set (default is 0)
 * @param {number} width - Checkbox width (default is 25)
 * @param {number} height - Checkbox height (default is 25)
 * @returns {GameObj}
 */
export const makeCheckbox = (x = 0, y = 0, width = 25, height = 25) => {
  loadSprite("cb", cbIcon);

  const checkbox = make([
    rect(width, height, { radius: 4 }),
    pos(x, y),
    color(255, 255, 255),
    outline(1),
    area(),
    {
      checked: false,
    },
  ]);

  const checkedIcon = make([sprite("cb", { width, height }), area()]);

  checkbox.onClick(() => {
    if (checkbox.checked) {
      checkbox.use(color(255, 255, 255));
      checkbox.remove(checkedIcon);
      checkbox.checked = false;
    } else {
      checkbox.use(color(148, 188, 236));
      checkbox.add(checkedIcon);
      checkbox.checked = true;
    }
  });

  return checkbox;
};

/**
 * Makes switch
 * @param {number} x - Switch x postion (default is 0)
 * @param {number} y - Switch y postion (default is 0)
 * @param {number} width - Switch width (default is 50)
 * @param {number} height - Switch height (default is 25)
 * @returns {GameObj}
 */
export const makeSwitch = (x = 0, y = 0, width = 50, height = 25) => {
  // Make switch base
  const switchBase = make([
    rect(width, height),
    pos(x, y),
    opacity(0),
    area(),
    {
      switched: false,
    },
  ]);

  // Make switch line
  const switchLine = make([
    rect(width, height / 2, { radius: height / 4 }),
    color(169, 169, 169),
    pos(0, height / 2 - height / 4),
    area(),
  ]);

  // Make switch circle
  const switchCircle = make([circle(height / 2), pos(height / 2, height / 2)]);

  // On click
  switchBase.onClick(() => {
    if (switchBase.switched) {
      switchLine.use(color(169, 169, 169));
      switchCircle.use(color(255, 255, 255));
      switchCircle.use(pos(height / 2, height / 2));
      switchBase.switched = false;
    } else {
      switchLine.use(color(148, 188, 236));
      switchCircle.use(color(24, 118, 210));
      switchCircle.use(pos(width - switchCircle.radius, height / 2));
      switchBase.switched = true;
    }
  });

  // Add line and circle
  switchBase.add(switchLine);
  switchBase.add(switchCircle);

  return switchBase;
};

/**
 * Makes text input
 * @param {number} x - Text input x postion (default is 0)
 * @param {number} y - Text input y postion (default is 0)
 * @param {number} width - Text input width (default is 400)
 * @param {number} txtSize - Text input text size (default is 15)
 * @param {number} pad - Text input padding (default is 10)
 * @param {boolean} hasFocus - Text input focus (default is true)
 * @returns {GameObj}
 */
export const makeTextInput = (
  x = 0,
  y = 0,
  width = 400,
  txtSize = 15,
  pad = 10,
  hasFocus = true
) => {
  // Text input container
  const inputBase = make([
    rect(width, txtSize + pad * 2),
    pos(x, y),
    area(),
    outline(1),
  ]);

  // Text input
  const input = make([
    text("", { width: width - pad * 2, size: txtSize }),
    textInput(hasFocus),
    color(BLACK),
    pos(pad, pad),
    area(),
  ]);

  inputBase.add(input);

  return inputBase;
};
