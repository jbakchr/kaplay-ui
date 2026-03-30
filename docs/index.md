# KAPLAY UI

A lightweight **UI helper plugin** for the [KAPLAY](https://kaplayjs.com/) game library, providing ready‑to‑use UI Game Objects such as **text buttons** and **labels**.  
KAPLAY UI makes it easy to build clean, flexible UI elements using familiar KAPLAY primitives — with smart defaults while remaining fully composable.

---

## ✨ Features

- 🎛️ **Text Button** — simple centered‑text buttons with outline, hit‑area, and hover/click support
- 🏷️ **Label** — lightweight text‑based UI element for HUDs, counters, and tooltips
- 🧩 Designed to feel native to the KAPLAY component system
- 🎨 Built‑in sensible defaults (positioning, sizing, outline)
- 🔧 Fully customizable with standard KAPLAY components

---

## 📦 Installation

Install using a package manager:

```sh
npm install kaplay-ui@next
```

---

## 🚀 Getting Started

Register the plugin when creating your KAPLAY instance:

```ts
import kaplay from "kaplay";
import kaplayUI from "kaplay-ui";

const k = kaplay({
  plugins: [kaplayUI],
});
```

Once registered, the UI helpers become available on your `k` instance:

```js
const btn = k.addTextButton("Play", 200, 100);
const label = k.addLabel("Score: 0");
```

---

## 🔤 **Text Button** `addTextButton()`

Creates a button‑like GameObj with centered text and sensible defaults.

### **Signature**

```ts
addTextButton(
  txt?: string,
  width?: number,
  height?: number
): GameObj
```

### **Default Values**

| Parameter | Default    |
| --------- | ---------- |
| `txt`     | `"Button"` |
| `width`   | `200`      |
| `height`  | `100`      |

### **Default Styling**

When created, the button includes:

- `k.outline(3)`
- `k.pos(0, 0)`
- `k.anchor("topleft")`
- `k.area()` — enables click / hover detection

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

## 🏷️ **Label** (`addLabel()`)

A small, flexible text‑based UI element — perfect for HUDs, counters, titles, and tooltips.

### **Signature**

```ts
addLabel(
  txt?: string,
  width?: number,
  height?: number
)
```

### **Default Values**

| Parameter | Default |
| --------- | ------- |
| `txt`     | `""`    |
| `width`   | `160`   |
| `height`  | `96`    |

### **Example**

```js
// Default label
const lbl1 = k.addLabel();

// Basic label
const lbl2 = k.addLabel("Score: 0");

// Custom size
const lbl3 = k.addLabel("Start", 100, 50);

// Updating label text dynamically
let score = 0;
const scoreLabel = k.addLabel(`Score: ${score}`);

k.wait(2, () => {
  score++;
  scoreLabel.children[0].text = `Score: ${score}`;
});
```

### **Common Use Cases**

- HUD overlays
- Score counters
- Time / health displays
- Section headers
- Tooltips and indicators

---

## 📱 Mobile‑Friendly UI Demo

KAPLAY UI works great for mobile layouts.
Below is an example using responsive scaling and KAPLAY’s `stretch` + `letterbox` features:

```js
import kaplay from "kaplay";
import kaplayUI from "kaplay-ui";

const k = kaplay({
  width: 480,
  height: 270,
  background: [25, 25, 25],
  plugins: [kaplayUI],
  stretch: true,
  letterbox: true,
});

// Scaling helpers
function uiScale() {
  return Math.min(k.width() / 400, 1.4);
}

function centerX(width) {
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

k.go("mobile-menu");
```

### ✔ Demonstrated

- Responsive UI scaling
- Touch‑friendly hit areas
- Hover animations
- Mobile‑optimized layout
- Scene navigation

---

## 📜 License

MIT © 2026 [Jonas Bak Phillipson](https://github.com/jbakchr)
