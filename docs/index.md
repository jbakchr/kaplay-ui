# KAPLAY UI

A lightweight and flexible **UI plugin for KAPLAY**, built to feel like a natural extension of the engine.

Create UI elements quickly using familiar KAPLAY primitives — buttons, labels, HUD elements, menus, and more.

<div class="block">
✨ **KAPLAY UI helps you build game-ready user interfaces with almost no setup.**  
Perfect for menus, HUDs, mobile UI, prototypes, and small-to-medium games.
</div>

---

## 🚀 Why KAPLAY UI?

- 🧩 Works exactly like native KAPLAY components
- 🎛️ Easy, declarative API (`addTextButton`, `addLabel`, etc.)
- ✨ Sensible styling defaults out of the box
- 🎨 Fully customizable using standard KAPLAY component modifiers
- 📱 Designed for both desktop & mobile gameplay
- ⚡ Zero dependencies — just plug in and play

---

## 📦 Installation _(v1.0.0-alpha\*)_

```sh
npm install kaplay-ui@next
```

---

## 🧰 Getting Started

Add the plugin when creating your KAPLAY instance:

```ts
import kaplay from "kaplay";
import kaplayUI from "kaplay-ui";

const k = kaplay({
  plugins: [kaplayUI],
});
```

Now create a UI element:

```ts
const btn = k.addTextButton("Play");
const score = k.addLabel("Score: 0");
```

That’s it — you’re ready to build UI.

---

## 🧱 Core Components

### 🔤 Text Button

Create an interactive button with centered text and built‑in outline & area detection.

```ts
const playBtn = k.addTextButton("Play", 200, 100);
playBtn.onClick(() => console.log("Clicked!"));
```

### 🏷️ Label

A small, flexible text element — perfect for HUDs.

```ts
const lbl = k.addLabel("Score: 0");
```

More components are being added soon as the plugin grows.

---

## 📚 Documentation

You can find more details here:

📄 faq.md — Common questions and answers
🧠 design-decisions/ — Why this plugin works the way it does
🔘 Component API Pages (coming soon)
🧪 Examples & Demos (coming soon)

---

## 🗺️ Roadmap (WIP)

- ⏳ More component types (sliders, toggles, panels)
- 🎨 Theme presets (built-in light/dark UI packs)
- 🎛️ Complex layout helpers (stacks, grids)
- ♿ Accessibility improvements
- 📘 Full documentation site

---

## 🤝 Contributing

Contributions and feature ideas are warmly welcome!

Feel free to submit issues or PRs on GitHub — or share ideas in the discussions tab.

---

## 📜 License

MIT © 2026 [Jonas Bak Phillipson](https://github.com/jbakchr)

---

_with ❤️ from the KAPLAY community_

