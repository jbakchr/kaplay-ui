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

**✨ Update: Automatic Internal Text Centering (Implemented)**

The Text Button now **automatically keeps its internal text centered**, even when the **button’s anchor is changed by the user** (e.g. `txtBtn.use(k.anchor("center"))`).

**This is now fully implemented and works transparently**, providing:

- The **button’s own anchor** updates normally
- The **text object detects anchor changes** and re-centers itself automatically
- No layout shifting or misalignment when users change anchors
- Zero additional user code needed

Internally:

- The text GameObj listens for anchor modifications
- On any detected anchor change, its position is recalculated to remain visually centered

This makes the Text Button predictable and robust across all UI layouts and anchoring strategies.

---

## 📌 Planned for v1.0.0

### 1. **Label**

A simple text-based UI Game Object element (optionally with background).

- Great for HUD text, tooltips, and menu labels.
- Consistent sizing + anchors.

### 2. **Panel / Box**

A rectangle-based UI container.

- Useful for menus, dialog backgrounds, overlays.
- Background fill, outline, radius.
- _May **possibly** act as an optional parent/container for children._

### 3. **Image Button**

A button variant using a sprite texture.

- Optional text overlay.
- Keeps same event API as `addTextButton()`.

### 4. **Checkbox / Toggle**

A boolean state UI element.

- Click to toggle on/off.
- Includes label or standalone box.
- Event: `onToggle(value)`.

### 5. **Progress Bar**

A simple loading or status bar.

- Supports `value` between `0` and `1`.
- Customizable bar color and background.

### 6. **Layout Helpers**

A minimal set of utilities to simplify positioning:

- `addVStack({ gap, align })`
- `addHStack({ gap, align })`

These aim to make menu building significantly simpler without trying to become
a full layout engine.

---

## 💡 Stretch Goals (Included _only if time allows_)

These are considered optional for v1.0.0, but may land if implementation is small:

- Tooltip helper (`addTooltip(text)`)
- Basic theme override system (`k.ui.setTheme()`)

---

## 🧭 Not Planned for v1.0.0 (but future candidates)

These components are intentionally postponed for post‑1.0 development:

- Text Input field
- Dropdown / Select
- ScrollView / Scrollable panel
- Tabs
- Modal dialogs
- Grid layout

These require more API design and internal architecture than the first release
should attempt.

---

## 🏁 Goal of v1.0.0

By the final release of v1.0.0, **kaplay-ui** aims to provide:

- A small but powerful set of reusable UI Game Objects
- Full KAPLAY compatibility (anchors, components, events, scenes)
- Composability without imposing heavy structure
- A stable API that developers can rely on for menus, HUDs, and simple game UIs

---
