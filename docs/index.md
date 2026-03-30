# KAPLAY UI

Welcome to **KAPLAY UI**, a lightweight and flexible UI component library for [KAPLAY](https://kaplayjs.com/).  
This library provides ready‑made UI components designed specifically for KAPLAY games, allowing you to build clean and interactive UIs with minimal effort.

---

## 🚀 What is KAPLAY UI?

KAPLAY UI is an extension to the KAPLAY game framework. It includes components like:

- **Checkboxes**
- **Switches**
- **Text Buttons**
- More components coming soon!

These components integrate directly with KAPLAY's entity system, allowing you to compose UI just like gameplay objects.

---

## 📦 Installation

Install via npm:

```sh
npm install kaplay-ui@next
```

---

## 📝 Basic Usage

Here’s an example of using a checkbox component:

```js
import kaplay from "kaplay";
import "kaplay/global";
import { makeCheckbox } from "kaplay-ui/inputs";

kaplay();

const checkBox = makeCheckbox();
add(checkBox);
```

This adds a simple checkbox to your scene.  
See the repository for detailed component state and configuration options.

---

## 📚 Documentation

More pages will be added soon!

- checkbox.md _(optional, if you create this page)_
- switch.md
- text-button.md
- Examples and demos coming soon.

---

## 🔧 Project Status

⚠️ **KAPLAY UI is currently in active development.**  
Expect breaking changes in `v1.0.0-alpha` versions.

Follow the development branch here:  
<https://github.com/jbakchr/kaplay-ui/tree/v1>

---

## 🤝 Contributing

Contributions, suggestions, and issue reports are welcome!  
Open a PR or start a discussion on GitHub.

---

## 📄 License

MIT License.  
See the ../LICENSE file for details.


