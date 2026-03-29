# Label Design Decisions

This document provides why the current defaults for the `addLabel()` Game Objects are what they are for:

1. [Background color](#-most-common-background-colors-for-labels-in-games)
2. [Width and Height](#-the-most-common-label-sizes-in-games)

## 🎨 Most Common Background Colors for Labels in Games

### **1. Dark, Semi-Transparent Background (Most Common Overall)**

Examples:

- `rgba(0, 0, 0, 0.5)`
- `rgba(0, 0, 0, 0.7)`

Why it's common:

- Works on almost every scene background (bright, dark, colorful).
- Makes white or light text extremely readable.
- Gives a “HUD” feel found in many genres.

Where it's used:

- Health bars
- Tooltips
- HUD counters
- Inventory labels

This is the single most widely used choice in modern 2D games.

---

### **2. Solid Black or Near‑Black Background**

Examples:

- `rgb(0, 0, 0)`
- `rgb(20, 20, 20)`

Why:

- Maximum contrast
- Minimalistic
- Fits sci-fi, retro, and clean UI styles

Often used for:

- Menu labels
- Title bars
- Status text

Good when opacity effects aren’t needed.

---

### **3. Light Background With Dark Text**

Examples:

- `rgb(255, 255, 255)` with black text
- `rgb(240, 240, 240)` for softer look

Why:

- Works well for “window”-style UI
- Mimics desktop/UI patterns
- Very readable for high-contrast HUDs

Used in:

- Casual games
- Puzzle games
- Mobile UX-inspired UI

This is less common than dark backgrounds but still widely used.

---

### **4. Colored Background Matching the Game’s Theme**

Examples:

- Blue, red, or green surfaces
- Faded color fills like `rgba(50, 100, 200, 0.8)`

Why:

- Looks more “stylized” or thematic
- Helps differentiate label purposes (e.g., warning = red)
- Used in highly themed menus and fantasy games

Common in:

- JRPG-style menus
- Crafting systems
- Quest logs

---

### **5. No Background (Text Only)**

While not literally a “background color,” this is a very common choice:

- Pure text HUD
- Floating damage numbers
- Dialogue text overlays

Games often use this when:

- Text doesn’t compete with backgrounds
- The look should be minimal

You can easily support this in `addLabel()` by letting `background: null`.

---

## ⭐ If you want the safest, most universal choice…

#### → **Use a dark semi-transparent background with light text.**

Something like:

```ts
background: rgba(0, 0, 0, 0.5),
color: rgb(255, 255, 255)
```

This works cleanly on:

- Dark levels
- Bright levels
- High-motion action scenes
- Stylized or pixel art environments

And it's easy for players to read instantly.

---

## 🎮 The Most Common Label Sizes in Games

Even though no source gives explicit “standard label dimensions,” we _can_ derive the common ranges from:

- Typical **pixel-art game resolutions** such as **320×180**, **640×360**, **1280×720** (all frequently used) [\[screwloose....github.io\]](https://screwloose-games.github.io/documentation/content/guides/art/pixel_art/pixel_art_guide.html)
- Common **sprite and tile sizes** (16×16, 32×32, 64×64) which UI assets usually align to [\[aipixelart.net\]](https://aipixelart.net/node/267)
- Observed dimensions in **pixel-art UI packs** on itch.io (buttons, panels, labels etc. typically in the 32–128px height range) [\[itch.io\]](https://itch.io/game-assets/tag-gui/tag-pixel-art)

From these, we can determine practical label sizes used in real games.

---

### 📐 **Typical Label Widths**

#### **Small labels (HUD counters, score, ammo):**

- **96px – 160px** wide
- Fits single short text like “SCORE: 0”, “HP”, “XP”, “TIME”

#### **Medium labels (section titles, longer stat text):**

- **160px – 256px** wide
- Fits text strings like “OBJECTIVE COMPLETE”, “CURRENT QUEST”

#### **Large labels (UI titles, menu headings):**

- **256px – 384px** wide
- Used for things like “INVENTORY”, “SETTINGS”, “PAUSED”

These sizes map cleanly into 16px/32px multiples recommended for pixel-art alignment.

---

### 📏 **Typical Label Heights**

Based on common UI asset proportions:

- **Text-only HUD label:**  
  **24–32px** tall (for 8–16px font sizes)

- **Label with padding + background panel:**  
  **32–48px** tall is most standard

- **Chunkier RPG or fantasy labels:**  
  **48–64px** tall in many itch.io GUI packs [\[itch.io\]](https://itch.io/game-assets/tag-gui/tag-pixel-art)

These heights align with the commonly used sprite grids of **16×16**, **32×32**, and **64×64** pixels from pixel-art standards. [\[aipixelart.net\]](https://aipixelart.net/node/267)

---

### 🧩 **Putting It All Together (Practical Defaults)**

For a game using a common base pixel-art resolution like **640×360** (widely recommended), typical label sizes look like this: [\[screwloose....github.io\]](https://screwloose-games.github.io/documentation/content/guides/art/pixel_art/pixel_art_guide.html)

| Label Type          | Width         | Height      |
| ------------------- | ------------- | ----------- |
| Small HUD label     | **120–160px** | **24–32px** |
| Medium UI label     | **160–256px** | **32–48px** |
| Large heading label | **256–384px** | **48–64px** |

These fit cleanly into standard pixel-art grids and look correct across the common 320×180, 640×360, and 1280×720 style pixel resolutions.

---

### 🎯 **Recommended Defaults for kaplay-ui**

If you want to provide sensible defaults for your Label component:

- **Width:** Automatically sized based on text
- **Height:**
  - **32px** for simple HUD labels
  - **48px** for background panels

This keeps things aligned with the pixel-art norms and avoids awkward scaling.

---

_**See next decisions about `Text Button` here:**_

- [Text Button](https://github.com/jbakchr/kaplay-ui/blob/v1/docs/design-decisions/text-button/text-button-defaults.md)
