# ❓ KAPLAY UI — FAQ

_**Frequently asked questions** about the KAPLAY UI plugin._

---

## 📚 Table of Contents

- [General](#-general)
- [Installation](#-installation)
- [Usage](#-usage)
- [Licensing](#-licensing)

---

## 🧠 General

### **Q:** _**What is this plugin for?**_

**A:** KAPLAY UI provides lightweight, composable UI helpers — such as text‑based buttons and labels — built using familiar **KAPLAY primitives**.

<div class="block">
It reduces boilerplate, keeps UI consistent, and helps you build menus, HUDs, overlays, and interactive UI faster.
</div>

---

## 📦 Installation

### **Q:** _**How do I install KAPLAY UI?**_

**A:** Install from your project root using your preferred package manager:

```sh
npm install kaplay-ui@next
```

---

## 🚀 Usage

### **Q:** _**How do I use the `kaplay-ui` plugin?**_

**A:** Import and enable the plugin when creating your KAPLAY instance:

```ts
import kaplay from "kaplay";
import kaplayUI from "kaplay-ui";

const k = kaplay({
  plugins: [kaplayUI],
});
```

Now you can create UI components such as:

```ts
k.addTextButton("Play");
k.addLabel("Score: 0");
```

---

## 📄 Licensing

### **Q:** _**How may I use `kaplay-ui` ?**_

**A:** The **MIT License** allows full personal and commercial use with virtually no restrictions.

<div class="block">
🔓 **In short:** You can use, modify, distribute, and even sell projects using KAPLAY UI.
</div>
