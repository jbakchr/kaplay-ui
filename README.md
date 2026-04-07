<p align="center">
  <img src="assets/kaplay-ui-logo.png" alt="kaplay-ui logo" width="400" >
</p>

# KAPLAY UI

_A simple and customizable UI plugin library for building interfaces in https://kaplayjs.com/._

Kaplay UI provides a game‑oriented **UI plugin** designed specifically for KAPLAY.

For now it helps you build Game Objects like text buttons and labels — without reinventing the wheel.

> ⚠️ **Note**  
> The currently published stable version (`0.20.11`) is being replaced by a complete redesign.
>
> A new **v1** version is under active development and can be installed in prerelease form (see below).

---

## ✨ _What this plugin currently provides_

When installed, this plugin extends the KAPLAY context (`k`) with:

- `k.addTextButton()` – interactive buttons with centered text
- `k.addLabel()` – lightweight, non-interactive text labels

Each helper returns a regular KAPLAY game object enhanced with
**convenience methods** for changing size, position, colors, text, and more
after creation.

---

## 📦 Installation

### Prerelease (new v1 work)

```bash
npm install kaplay-ui@next
```

This gives you the latest `1.0.0‑alpha.*` builds.

---

## 🚀 Quick start (_1.0.0-alpha.\*_)

The **Kaplay-UI** plugin is exported as `kaplayUI` from the package root:

```ts
import kaplay from "kaplay";
import kaplayUI from "kaplay-ui";

const k = kaplay({
  plugins: [kaplayUI],
});
```

You now have access to the UI helpers via your `k` instance:

```ts
const btn = k.addTextButton("Start");
btn.onClick(() => {
  k.go("game");
});

const lbl = k.addLabel("Score: 0");
lbl.setLabelText("Score: 1");
```

---

## 🧩 Game Objects (_**1.0.0‑alpha.\***_)

### 🔤 Text Button — `addTextButton()`

Creates a clickable button with centered text and default visuals.

```ts
const btn = k.addTextButton("Start", {
  width: 200,
  height: 80,
});
```

Buttons support runtime updates such as:

```ts
btn.setSize(300, 100);
btn.setButtonColor([255, 120, 120]);
btn.setButtonText("Go!");
btn.setButtonTextSize(24);
```

Perfect for menus, dialogs, and in‑game actions.

---

### 🏷️ Label — `addLabel()`

Creates a lightweight background + text container for HUD elements or titles.

```ts
const label = k.addLabel("Score: 0");
```

Update it dynamically:

```ts
label.setLabelText("Score: 10");
label.setLabelTextColor([255, 255, 0]);
label.setOpacity(0.9);
```

Ideal for HUDs, counters, status text, and overlays.

---

## 🎨 Customization

kaplay-ui is designed to be **customized imperatively**, without hiding
or abstracting away KAPLAY’s core APIs.

### ✅ Option-based customization (at creation)

Both helpers accept an optional `opts` object for common configuration:

```ts
const btn = k.addTextButton("Options", {
  width: 250,
  height: 70,
  posX: 100,
  posY: 200,
  radius: 8,
});
```

---

### ✅ Runtime customization (after creation)

Each UI element exposes helper methods for updating its appearance and layout:

```ts
btn.setPosition(150, 220);
btn.setButtonColor([80, 160, 255]);
btn.setButtonTextColor([255, 255, 255]);
```

This makes it easy to animate, react to state changes, or reuse UI elements.

---

### ✅ Full KAPLAY access

UI elements are **regular KAPLAY game objects**, so you can still use all
standard KAPLAY features:

```ts
btn.use(k.opacity(0.8));
btn.onHover(() => btn.setScale(1.1));
label.use(k.rotate(5));
```

kaplay-ui never locks you into a restricted UI model.

---

## 🧠 Design philosophy

kaplay-ui is intentionally simple:

- ✅ No retained UI trees
- ✅ No layout engine
- ✅ No reactive framework
- ✅ Just KAPLAY game objects + helpers

You stay in control of how and when UI updates happen.

---

## 📚 Documentation

- Full API documentation is available via **JSDocs**
- All helpers are strongly typed and editor-friendly
- Hover over methods in your editor to explore options

---

## 🛣️ Roadmap

Future components may include:

- Toggles
- Sliders
- Panels / containers

See the roadmap here:  
👉 <https://github.com/jbakchr/kaplay-ui/blob/v1/ROADMAP.md>

---

## 📚 License

This project is licensed under the **MIT License**.  
See the `LICENSE` file for details.

---

## 💬 Contact

Have questions or suggestions?  
Open an issue on GitHub:

👉 <https://github.com/jbakchr/kaplay-ui>
