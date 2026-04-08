# 🧱 UI Components

KAPLAY‑UI provides a small set of lightweight, game‑ready UI components.

All components behave like native KAPLAY objects, integrating naturally with scenes, layers, positions, and events.

---

## 🔤 TextButton

A clickable button with centered text.

```ts
const btn = k.addTextButton("Play");
```

### Signature

The `addTextButton` method takes a required `string` and an optional `object`.

```ts
k.addTextButton(txt: string, opts?: {});
```

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

### Default Styling

These are the built‑in visual defaults applied automatically.

The **button object** is created with:

- `k.anchor("topleft")`
- `k.area()`

The **button text** is created with:

- `k.anchor("center")`

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

### Examples

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
