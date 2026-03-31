# 🦖 KAPLAY-UI 🧩

_A lightweight and flexible **UI plugin for KAPLAY**, built to feel like a natural extension of the engine._

Create UI elements quickly using familiar KAPLAY primitives — buttons, labels, HUD elements, menus, and more.

<div class="block">

✨ KAPLAY UI helps you build game-ready user interfaces with almost no setup.

Perfect for menus, HUDs, mobile UI, prototypes, and small-to-medium games.

</div>

---

## 🚀 Why KAPLAY UI?

- 🧩 Works exactly like native KAPLAY
- 🎛️ Easy, declarative API
- ✨ Sensible styling defaults
- 🎨 Fully customizable

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
const tb = k.addTextButton("Play");
const sl = k.addLabel("Score: 0");
```

_**That’s it** — you’re ready to build UI!_

---

## 🧱 Core Components

### 🔤 Text Button

Create an interactive button with centered text and built‑in outline & area detection.

```ts
const tb = k.addTextButton("Play");

tb.onClick(() => {
  console.log("Let's play!");
});
```

### 🏷️ Label

A small, flexible text element — perfect for HUDs.

```ts
const lbl = k.addLabel("Score: 0");
```

_More components are being added soon as the plugin grows._ 🎉

---

## 📚 Documentation

_Soon_ .. you can find more details here:

- [x] 📄 **[faq.md](https://jbakchr.github.io/kaplay-ui/faq)** — _Questions and answers_
- [ ] 🧠 **design-decisions** — _The Whys?_
- [ ] 🔘 **API Pages** — _The What & How?_
- [ ] 🧪 **Examples** — _Learn by doing!_
- [ ] 🪧 **Demos** — _See it in action .._

_(And even an [about page](https://jbakchr.github.io/kaplay-ui/about.html) — if anybody would **ever** want to read about why I even started creating `kaply-ui` .. 🤷)_

---

## 🗺️ Roadmap (WIP)

- **⏳ More component types**  
   _(sliders, toggles, panels)_

- **🎨 Theme presets**  
  _(built-in light/dark UI packs)_

- **🎛️ Complex layout helpers**  
  _(stacks, grids)_

- **📘 Full documentation site**  
  _(getting started, faq and .. more)_

---

## 🤝 Contributing

Contributions and feature ideas are warmly welcome!

Feel free to submit issues or PRs on GitHub — or share ideas in the discussions tab.

---

## 📜 License

MIT © 2026 [Jonas Bak Phillipson](https://github.com/jbakchr)

---

<div class="block" style="text-align:center;font-weight:bold;">
  <p>Made with 💚 + 🦖 by:<p>
  <p style="font-style:italic;"><span style="color:#ffde86;">The</span> <span style="color:#f2ae99;">KAPLAY </span><span style="color:#CF9FFF;">Community</span></p>
