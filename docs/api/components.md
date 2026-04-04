# 🧱 UI Components

KAPLAY‑UI provides a small set of lightweight, game‑ready UI components.

All components behave like native KAPLAY objects, integrating naturally with scenes, layers, positions, and events.

---

## 🔤 TextButton

A clickable button with centered text.

```ts
const btn = k.addTextButton("Play");
```

### Options

All fields are optional. Defaults are shown below.

| Option  | Type   | Default |
| ------- | ------ | ------- |
| width   | number | 200     |
| height  | number | 100     |
| posX    | number | 0       |
| posY    | number | 0       |
| radius  | number | 10      |
| outline | number | 3       |
| txtSize | number | 22      |

### Default Styling

These are the built‑in visual defaults applied automatically.

| Style              | Value         |
| ------------------ | ------------- |
| base anchor        | "topleft"     |
| base color         | 200, 200, 200 |
| base outline color | 92, 91, 91    |
| text anchor        | "center"      |
| text color         | 0, 0, 0       |

### Example

```ts
// Basic text button
const play = k.addTextButton("Play", { radius: 0 });

// Example of customizing button color
play.use(k.color(100, 100, 100));

// Example of customizing button text
play.children[0].text = "Go!";

play.onClick(() => {
  k.go("game");
});
```

---

## 🏷️ Label

A small, fast text element ideal for HUDs, overlays, and lightweight UI.

```ts
const score = k.addLabel("Score: 0");
```

### Options

All fields are optional. Defaults are shown below.

| Option  | Type   | Default |
| ------- | ------ | ------- |
| widht   | number | 160     |
| height  | number | 96      |
| posX    | number | 0       |
| posY    | number | 0       |
| opacity | number | 0.7     |

### Default Styling

| Style             | Value     |
| ----------------- | --------- |
| label base color  | 0, 0, 0   |
| label base anchor | "topleft" |
| label text color  | 0, 0, 0   |
| label text anchor | "center"  |

### Example

```ts
const score = k.addLabel("Score: 0");
```

---

## 📦 More Components Coming Soon

Planned UI components include:

- Sliders
- Toggles
- Panels / Containers
- Layout helpers (stacks, grids)

These will be added here as the library grows.
