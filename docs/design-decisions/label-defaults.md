# 🎨 Most Common Background Colors for Labels in Games

## **1. Dark, Semi-Transparent Background (Most Common Overall)**

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

## **2. Solid Black or Near‑Black Background**

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

## **3. Light Background With Dark Text**

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

## **4. Colored Background Matching the Game’s Theme**

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

## **5. No Background (Text Only)**

While not literally a “background color,” this is a very common choice:

- Pure text HUD
- Floating damage numbers
- Dialogue text overlays

Games often use this when:

- Text doesn’t compete with backgrounds
- The look should be minimal

You can easily support this in `addLabel()` by letting `background: null`.

---

# ⭐ If you want the safest, most universal choice…

### → **Use a dark semi-transparent background with light text.**

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
