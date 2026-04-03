<p align="center">
  <img src="assets/kaplay-ui-logo.png" alt="kaplay-ui logo" width="400" >
</p>

# KAPLAY UI

_A simple and customizable UI plugin library for building interfaces in https://kaplayjs.com/._

Kaplay UI provides a game‑oriented **UI plugin** designed specifically for KAPLAY.

For now it helps you build Game Objects like text buttons and labels — without reinventing the wheel.

> ⚠️ **Note**  
> The currently published stable version (`0.20.15`) is being replaced by a complete redesign.
>
> A new **v1** version is under active development and can be installed in prerelease form (see below).

---

## 📦 Installation

### Prerelease (new v1 work)

```bash
npm install kaplay-ui@next
```

This gives you the latest `1.0.0‑alpha.*` builds.

---

## 🚀 Usage (_1.0.0-alpha.\*_)

**Kaplay UI** exports a plugin for adding UI Game Objects.

The `kaplayUI` plugin is exported from the package root:

```ts
import kaplay from "kaplay";
import kaplayUI from "kaplay-ui";

const k = kaplay({
  plugins: [kaplayUI],
});
```

You now have access to the UI helpers via your `k` instance:

```ts
const btn = k.addTextButton("Play");
const label = k.addLabel("Score: 0");
```

---

## 🧩 Game Objects (_**1.0.0‑alpha.\***_)

### 🔤 **Text Button** (`addTextButton()`)

Creates a button-like GameObj with centered text and some convenient defaults.

#### _**Signature**_

```ts
addTextButton(
  txt: string,
  opts?: object
): GameObj
```

#### _**Default `opts` parameter values**_

| Parameter | Default |
| --------- | :------ |
| `width`   | `200`   |
| `height`  | `100`   |
| `radius`  | `10`    |
| `posX`    | `0`     |
| `posY`    | `0`     |
| `outline` | `3`     |
| `txtSize` | `22`    |

#### _**Default styling**_

| Comps                       | Values          |
| --------------------------- | :-------------- |
| `button base anchor`        | `"topleft"`     |
| `button base color`         | `200, 200, 200` |
| `button base outline color` | `92, 91, 91`    |
| `button text anchor`        | `"center"`      |
| `buttontext color`          | `0, 0, 0`       |

#### _**Examples**_

```ts
// Basic button
const btn1 = k.addTextButton("Play!");

// Custom button by opts parameter
const btn2 = k.addTextButton("Play!", { posX: 300, posY: 200 });

// Customize button base by `use()`
btn2.use(k.color(150, 150, 150));

// Customize button text by `use()`
btn2.children[0].text = "Go!";

// Add interactivity
btn2.onClick(() => {
  k.go("game");
});
```

---

### 🏷️ **Label** (`addLabel()`)

A lightweight text-based UI element — ideal for HUD counters, tooltips, status text, or titles.

#### _**Signature**_

```ts
addLabel(
    txt: string,
    opts?: object
)
```

#### _**Default `opts` values**_

| Parameter | Default |
| --------- | ------- |
| `width`   | `160`   |
| `height`  | `96`    |
| `posX`    | `0`     |
| `posY`    | `0`     |
| `opacity` | `0.7`   |
| `txtSize` | `22`    |

#### _**Default styling**_

| Comps               | Values          |
| ------------------- | :-------------- |
| `label base color`  | `0, 0,0 `       |
| `label base anchor` | `"topleft"`     |
| `label text color`  | `255, 255, 255` |
| `label text anchor` | `"center"`      |

#### _**Examples**_

```ts
// Basic label
const lbl1 = k.addLabel("Score: 0");

// Custom label by opts parameter
const lbl2 = k.addLabel("Start", { width: 100, height: 50 });

// Customize label base by `use()`
lbl2.use(k.color(150, 150, 150));

// Customize label text by `use()`
lbl2.children[0].text = "Coins: 100";

// Update label text example
let score = 0;
const scoreLabel = k.addLabel(`Score: ${score}`);

k.wait(2, () => {
  score++;
  scoreLabel.children[0].text = `Score: ${score}`;
});
```

#### _**Common use cases**_

- HUD overlays
- Score counters
- Time and health displays
- UI section headings
- Tooltips and indicators

---

## 🛣️ Roadmap

_See evolving roadmap at: https://github.com/jbakchr/kaplay-ui/blob/v1/ROADMAP.md_

---

## 📚 License

This project is licensed under the **MIT License**.  
See the `LICENSE` file for details.

---

## 💬 Contact

Have questions or suggestions?  
Open an issue on GitHub:

👉 <https://github.com/jbakchr/kaplay-ui>
