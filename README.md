<p align="center">
  <img src="assets/kaplay-ui-logo.png" alt="kaplay-ui logo" width="400" >
</p>

# KAPLAY UI Plugin

A lightweight UI helper plugin for the [KAPLAY](https://kaplayjs.com/) game library, providing ready‑to‑use UI Game Objects such as text‑based buttons.

This plugin simplifies the creation of UI Game Object elements using familiar KAPLAY primitives, offering sensible defaults while remaining flexible and composable.

---

## ✨ Features

- 🎛️ **Text Button** — easily create a button with centered text
- 🧩 Designed to feel like native KAPLAY components
- 🎨 Comes with built‑in sizing, positioning, and outline defaults
- 🔧 Fully customizable through the normal KAPLAY component system

---

## 📦 Installation

You can install the plugin using your preferred package manager:

```sh
npm install kaplay-ui
```

or:

```sh
pnpm add kaplay-ui
```

or:

```sh
yarn add kaplay-ui
```

---

## 🚀 Usage

Import and register the plugin when initializing your KAPLAY game:

```ts
import kaplay from "kaplay";
import kaplayUI from "kaplay-ui";

const k = kaplay({
  plugins: [kaplayUI],
});
```

You now have access to the UI helpers via your `k` instance:

```js
const btn = k.addTextButton("Play", 200, 100);
```

---

## 🔘 `addTextButton()`

Creates a button-like GameObj with centered text and some convenient defaults.

### **Signature**

```ts
addTextButton(
  txt?: string,
  width?: number,
  height?: number
): GameObj
```

### **Default values**

| Parameter | Default    |
| --------- | ---------- |
| `txt`     | `"Button"` |
| `width`   | `200`      |
| `height`  | `100`      |

### **Default styling**

When created, the button includes:

- `k.outline(3)`
- `k.pos(0, 0)`
- `k.anchor("topleft")`
- `k.area()` — for click/hover detection

### **Example**

```js
// Default button
const btn1 = k.addTextButton();

// Custom label
const btn2 = k.addTextButton("Start");

// Custom size
const btn3 = k.addTextButton("Start", 150, 75);

// Add interactivity
btn2.onClick(() => {
  console.log("Button clicked!");
});
```

---

## 🧱 How It Works

Internally, the plugin creates a GameObj composed of:

- A rectangle-like button base
- Centered text using KAPLAY's built‑in text component
- A combined area for input events

This keeps your UI elements fully compatible with:

- `onClick()`
- `onHover()`
- `color()`, `scale()`, etc.
- Layout within scenes or parent objects

---

## 📱 Mobile‑Friendly UI Demo

This example shows how to build a touch‑friendly UI using `addTextButton()` on mobile devices. It uses responsive scaling and KAPLAY’s `stretch` and `letterbox` features to adapt to different screen sizes.

### **Example**

```js
import kaplay from "kaplay";
import kaplayUI from "kaplay-ui";

const k = kaplay({
  width: 480, // required when using letterbox/stretch
  height: 270,
  background: [25, 25, 25],
  plugins: [kaplayUI],

  stretch: true, // resize canvas on mobile
  letterbox: true, // preserve aspect ratio
});

function uiScale() {
  return Math.min(k.width() / 400, 1.4);
}

function centerX(width: number) {
  return k.center().x - width / 2;
}

k.scene("mobile-menu", () => {
  const scale = uiScale();

  k.add([
    k.text("Mobile Menu", { size: 36 * scale }),
    k.anchor("center"),
    k.pos(k.center().x, 70 * scale),
  ]);

  const btnWidth = 260 * scale;
  const btnHeight = 90 * scale;

  const startBtn = k.addTextButton("Start", btnWidth, btnHeight);
  startBtn.pos = k.vec2(centerX(btnWidth), 150 * scale);
  startBtn.onClick(() => k.go("mobile-game"));
  startBtn.onHover(() => (startBtn.color = k.rgb(140, 220, 140)));
  startBtn.onHoverEnd(() => (startBtn.color = k.WHITE));

  const settingsBtn = k.addTextButton("Settings", btnWidth, btnHeight);
  settingsBtn.pos = k.vec2(centerX(btnWidth), 280 * scale);
  settingsBtn.onClick(() => k.go("settings"));
  settingsBtn.onHover(() => (settingsBtn.color = k.rgb(140, 160, 240)));
  settingsBtn.onHoverEnd(() => (settingsBtn.color = k.WHITE));
});

k.scene("mobile-game", () => {
  const scale = uiScale();

  k.add([
    k.text("Game Scene", { size: 28 * scale }),
    k.anchor("center"),
    k.pos(k.center().x, 90 * scale),
  ]);

  const backBtn = k.addTextButton("Back", 200 * scale, 80 * scale);
  backBtn.pos = k.vec2(centerX(200 * scale), k.height() - 120 * scale);
  backBtn.onClick(() => k.go("mobile-menu"));
  backBtn.onHover(() => (backBtn.scale = 1.1 * scale));
  backBtn.onHoverEnd(() => (backBtn.scale = scale));
});

k.scene("settings", () => {
  const scale = uiScale();

  k.add([
    k.text("Settings", { size: 32 * scale }),
    k.anchor("center"),
    k.pos(k.center().x, 70 * scale),
  ]);

  const backBtn = k.addTextButton("Back", 200 * scale, 80 * scale);
  backBtn.pos = k.vec2(centerX(200 * scale), k.height() - 140 * scale);
  backBtn.onClick(() => k.go("mobile-menu"));
});

k.go("mobile-menu");
```

### ✔ Features demonstrated

- Responsive UI scaling
- Touch‑friendly hit areas
- Hover animations for mobile
- Auto‑centered vertical layout
- Scene navigation

---

## 📚 Documentation

_**Evolving**_ documentation is available in the [docs](https://github.com/jbakchr/kaplay-ui/blob/v1/docs/index.md) folder.

---

## 📄 License

MIT — free for personal and commercial use.
