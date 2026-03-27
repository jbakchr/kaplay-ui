<p align="center">
  <img src="assets/kaplay-ui-logo.png" alt="kaplay-ui logo" width="400" >
</p>

# KAPLAY UI

_A simple and customizable UI plugin library for building interfaces in https://kaplayjs.com/._

Kaplay UI provides a game‑oriented **UI plugin** designed specifically for KAPLAY.

It helps you build Game Objects like buttons, menus, controls, HUD elements, input fields, and more—without reinventing the wheel.

> ⚠️ **Note**  
> The currently published stable version (`0.20.1`) is being replaced by a complete redesign.  
> A new **v1** version is under active development and can be installed in prerelease form (see below).

---

## 📦 Installation

### Stable release

```bash
npm install kaplay-ui
```

### Prerelease (new v1 work)

```bash
npm install kaplay-ui@next
```

This gives you the latest `1.0.0‑alpha.*` builds.

---

## 🚀 Usage

Kaplay UI exports a plugin for adding UI Game Objects.

The plugin is exported from the package root:

```ts
import kaplay from "kaplay";
import kaplayUI from "kaplay-ui";

const k = kaplay({
  plugins: [kaplayUI],
});

```

---

## 🧩 Game Objects (_**will evolve over time**_)

### **Text Button**

Text-based button with centered text:

```ts
// Button with default centered "Button" text, width of 200, height of 100
const txtBtn = addTextButton();

// Button with centered "Play!" text, default width of 200, height of 100
const txtBtn = addTextButton("Play!");

// Button with default centered "Play!" text, width of 250, default height of 100
const txtBtn = addTextButton("Play!", 250);

// Button with default centered "Play!" text, width of 250, height of 150
const txtBtn = addTextButton("Play!", 250, 150);
```

---

## 🛣️ Roadmap

_to be added shortly .._

---

## 📚 License

This project is licensed under the **MIT License**.  
See the `LICENSE` file for details.

---

## 💬 Contact

Have questions or suggestions?  
Open an issue on GitHub:

👉 <https://github.com/jbakchr/kaplay-ui>
