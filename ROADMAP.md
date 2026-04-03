# KAPLAY-UI Roadmap

This roadmap outlines the planned features and development priorities for the
first stable release of **kaplay-ui v1.0.0**.

The goal of v1.0.0 is to establish a solid, minimal, but extensible foundation
of UI Game Objects that feel native to KAPLAY while providing helpful
abstractions for common UI patterns in 2D games.

---

## 🎯 v1.0.0 — Core UI Foundations

### ✅ Already Implemented

#### **Text Button**

- `addTextButton()` is the first core component.
- Includes centered text, outline, area for clicks/hover, anchors, and sizing.

##### ✨ **Automatic Internal Text Centering (Implemented)**

The Text Button now **automatically keeps its internal text centered**, even when the **button’s anchor is changed by the user** (e.g.  
`txtBtn.use(k.anchor("center"))`).

This is fully implemented and ensures:

- Changing the button’s anchor never breaks internal layout
- Text remains visually centered at all times
- No extra work is required from the user

Internally:

- The text GameObj detects anchor changes
- Recalculates its position to remain centered
- Always matches the button’s dimensions for consistent layout

---

#### **Label**

A lightweight text-based UI element for HUDs, tooltips, titles, and more added via `addLabel()`.

`addLabel()` comes with these default parameters for now (which can all be changed to the users liking):

- **width** = 160
- **height** = 96
- **txtSize** = 22

With these default parameters a dark label of size 160 x 96 with am opacity of `0.7`gets displayed of the screen when adding a label.

---

## 📌 Planned for v1.0.0

### 1. **Panel / Box**

A rectangle-based UI container.

- Useful for menus, dialog backgrounds, overlays.
- Background fill, outline, radius.
- _May **possibly** act as an optional parent/container for children._

### 2. **Image Button**

A button variant using a sprite texture.

- Optional text overlay.
- Keeps same event API as `addTextButton()`.

### 3. **Checkbox / Toggle**

A boolean state UI element.

- Click to toggle on/off.
- Includes label or standalone box.
- Event: `onToggle(value)`.

### 4. **Progress Bar**

A simple loading or status bar.

- Supports `value` between `0` and `1`.
- Customizable bar color and background.

### 5. **Layout Helpers**

A minimal set of utilities to simplify positioning:

- `addVStack({ gap, align })`
- `addHStack({ gap, align })`

These aim to make menu building simpler without becoming a full layout engine.

---

## 💡 Stretch Goals (Included _only if time allows_)

These are optional for v1.0.0:

- Tooltip helper (`addTooltip(text)`)
- Basic theme override system (`k.ui.setTheme()`)

---

## 🧭 Not Planned for v1.0.0 (but future candidates)

These are postponed for post‑1.0 development:

- Text Input field
- Dropdown / Select
- ScrollView / Scrollable panel
- Tabs
- Modal dialogs
- Grid layout

---

## 🏁 Goal of v1.0.0

By the final release of v1.0.0, **kaplay-ui** aims to provide:

- A small but powerful set of reusable UI Game Objects
- Full KAPLAY compatibility (anchors, components, events, scenes)
- Composability without imposing heavy structure
- A stable API developers can rely on for menus, HUDs, and simple game UIs
