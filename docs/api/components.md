# 🧱 UI Components

KAPLAY‑UI provides a small set of lightweight, game‑ready UI components.

All components behave like native KAPLAY objects, integrating naturally with scenes, layers, positions, and events.

---

## 🔤 TextButton

A clickable button with centered text.

```ts
const btn = k.addTextButton("Play");
```

---

### Signature

The `addTextButton` method takes a required `string` and an optional `object`.

```ts
k.addTextButton(txt: string, opts?: {});
```

---

### Options

All fields are optional. Defaults are shown below.

| Option       | Type                    | Default         |
| ------------ | ----------------------- | --------------- |
| width        | number                  | 150             |
| height       | number                  | 60              |
| posX         | number                  | 0               |
| posY         | number                  | 0               |
| radius       | number                  | 10              |
| outline      | number                  | 3               |
| txtSize      | number                  | 22              |
| btnColor     | [number, number, nuber] | [200, 200, 200] |
| outlineColor | string                  | #5c5b5b         |
| txtColor     | [number, number, nuber] | [0, 0, 0]       |

---

### Default Styling

These are the built‑in visual defaults applied automatically.

The **button object** is created with:

- `k.anchor("topleft")`
- `k.area()`

The **button text** is created with:

- `k.anchor("center")`

---

### Text Button Instance Methods

The returned `ButtonComponent` exposes the following mutator methods,
allowing the button to be updated after creation:

#### Layout & Geometry

- `setSize(w: number, h: number): void`  
  _Update the button width and height._

- `setPosition(x: number, y: number): void`  
  _Move the button to a new position._

- `setAnchor(a: Anchor): void`  
  _Change the anchor used for positioning._

- `setRadius(r: number): void`  
  _Update the corner radius._

- `setOutline(t: number): void`  
  _Set the outline thickness._

#### Text

- `setButtonText(txt: string): void`  
  _Replace the button label._

- `setButtonTextSize(size: number): void`  
  _Change the font size of the button text._

- `setButtonTextColor(color: KaplayColor): void`  
  _Update the text color._

#### Colors

- `setButtonColor(color: KaplayColor): void`  
  _Change the button fill color._

- `setButtonOutlineColor(color: KaplayRGB): void`  
  _Change the outline stroke color._

---

### Examples

```ts
// Basic usage
const btn1 = addTextButton("Play");
btn1.onClick(() => k.go("game"));

// Runtime mutation
const btn2 = addTextButton("Start");
btn2.setSize(300, 120);
btn2.setButtonColor([255, 100, 100]);
btn2.setButtonText("Go!");

// Visual-only updates
const btn3 = addTextButton("Options", {
  radius: 2,
});
btn3.setButtonOutlineColor([0, 0, 0]);
btn3.setButtonTextSize(24);

// Layout adjustment after creation
const hudLabel = addLabel("Paused");
hudLabel.setSize(200, 60);
hudLabel.setLabelAnchor("center");
```

---

## 🏷️ Label

A small, fast text element ideal for HUDs, overlays, and lightweight UI.

```ts
const score = k.addLabel("Score: 0");
```

---

### Signature

The `addLabel` method takes a required `string` and an optional `object`.

```ts
k.addLabel(txt: string, opts?: {});
```

---

### Options

All fields are optional. Defaults are shown below.

| Option   | Type                     | Default         |
| -------- | ------------------------ | --------------- |
| widht    | number                   | 160             |
| height   | number                   | 96              |
| posX     | number                   | 0               |
| posY     | number                   | 0               |
| opacity  | number                   | 0.7             |
| txtSize  | number                   | 22              |
| lblColor | [number, number, number] | [0, 0, 0]       |
| txtColor | [number, number, number] | [255, 255, 255] |

---

### Default Styling

| Style             | Value     |
| ----------------- | --------- |
| label anchor      | "topleft" |
| label text anchor | "center"  |

---

### Label Instance Methods

The returned `LabelComponent` exposes helper methods that allow the label to be updated dynamically at runtime.

#### Layout & Geometry

- `setSize(w: number, h: number): void`  
  _Update the label width and height._

- `setPosition(x: number, y: number): void`  
  _Move the label to a new position._

- `setRadius(r: number): void`  
  _Update the background corner radius._

- `setLabelAnchor(anchor: Anchor): void`  
  _Change the anchor used for positioning the label._

#### Appearance

- `setOpacity(o: number): void`  
  _Set label background opacity (0–1)._

- `setLabelColor(c: KaplayColor): void`  
  _Change the background color of the label._

#### Text

- `setLabelText(txt: string): void`  
  _Replace the label text._

- `setLabelTextSize(size: number): void`  
  _Change the font size of the label text._

- `setLabelTextColor(c: KaplayColor): void`  
  _Update the label text color._

---

### Example

```ts
// Basic usage
const lbl = addLabel("Score: 0");
lbl.setPosition(20, 20);

// Dynamic text updates (e.g. score counter)
let score = 0;
const scoreLbl = addLabel(`Score: ${score}`);

k.wait(2, () => {
  score++;
  scoreLbl.setLabelText(`Score: ${score}`);
});

// Runtime appearance updates
const title = addLabel("Game Over", {
  txtSize: 36,
});
title.setLabelColor([40, 40, 40]);
title.setLabelTextColor([255, 80, 80]);
title.setOpacity(0.9);
```

---

## 📦 More Components Coming Soon

Planned UI components include:

- Sliders
- Toggles
- Panels / Containers
- Layout helpers (stacks, grids)

These will be added here as the library grows.
