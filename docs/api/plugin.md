# Plugin API

The KAPLAY‑UI plugin extends your `kaplay()` instance with a small set of UI‑focused helper methods.  
Once added, the plugin injects new functions on your KAPLAY context for creating UI components.

---

## 🧩 Adding the Plugin

```ts
import kaplay from "kaplay";
import kaplayUI from "kaplay-ui";

const k = kaplay({
  plugins: [kaplayUI],
});
```

After this, your `k` instance includes:

- `k.addTextButton(text, options?)`
- `k.addLabel(text, options?)`

---

## 🟦 `k.addTextButton(text, options?)`

Creates a clickable UI button with built‑in hitbox, outline, and text alignment.

```ts
const btn = k.addTextButton("Play");
```

### Parameters

| Name    | Type              | Description                 |
| ------- | ----------------- | --------------------------- |
| text    | string            | The button label.           |
| options | object (optional) | Styling & behavior options. |

### Returns

A `TextButton` game object.

For full option details and defaults, see:
➡️ **[./components#textbutton](https://jbakchr.github.io/kaplay-ui/api/components#-textbutton)**

---

## 🟨 `k.addLabel(text, options?)`

Creates a lightweight text element ideal for HUDs and overlays.

```ts
const lbl = k.addLabel("Score: 0");
```

### Parameters

| Name    | Type              | Description         |
| ------- | ----------------- | ------------------- |
| text    | string            | The displayed text. |
| options | object (optional) | Styling options.    |

### Returns

A `Label` game object.

For full option details and defaults, see:
➡️ **[./components.md#label](https://jbakchr.github.io/kaplay-ui/api/components#-label)**

---

## ✅ Notes

- All UI components behave like standard KAPLAY game objects.
- They support transforms, events, layers, and plugin composition.
- UI elements are intentionally minimal, predictable, and easy to theme.

---

## 📦 More Plugin Coming Soon

Future versions of KAPLAY‑UI will extend the plugin with:

- Additional UI creation helpers
- Built‑in layout utilities
- Themable presets (light/dark UI packs)

These will be added here as the library grows.
