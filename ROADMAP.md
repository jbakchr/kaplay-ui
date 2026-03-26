# 📘 **KAPLAY‑UI — Updated Development Roadmap (v1)**

_(Reflecting current progress as of Phase 2 Step 2.4)_

This roadmap tracks the incremental development of the **Container** UI element and the overall plugin architecture for `kaplay-ui`.  
It replaces the old roadmap and reflects the precise, step-based structure we are now following.

---

# 🌱 **Phase 0 — Planning & API Definition (Completed)**

### **0.1 – Folder Structure Setup** ✔

- Create `src/components/container/` directory
- Add `index.ts`, `container.types.ts`, `container.logic.ts`, `container.styles.ts`

### **0.2 – Public API Definition** ✔

- Define developer experience (“DX sentence”)
- Draft ideal usage examples
- Decide initial required options (`width`, `height`)
- Decide return type (GameObj + UI helpers)
- Write full API Contract

---

# 🧱 **Phase 1 — Minimal Functional Container (Completed)**

### **1.1 – Type Definitions** ✔

- Create `UIContainerOptions`
- Create `UIContainerReturn`

### **1.2 – Factory Scaffolding** ✔

- Add `createContainer()` factory
- Export from plugin via `k.addContainer()`
- Add placeholder logic/style hookups

### **1.3 – Minimal Functional Implementation** ✔

- Create Kaplay rect
- Apply width/height
- Return real container GameObj
- Implement minimal `addChild()` (no positioning yet)

---

# 🎨 **Phase 2 — Core Container Functionality (In Progress)**

## ✔ Completed Steps

### **2.1 – Add Basic Styling Support** ✔

- Introduce `defaultContainerStyles`
- Add `container.styles` field
- Add placeholder `setStyle()` method

### **2.2 – Add Anchor Support (Scaffolding)** ✔

- Add `anchor?: string` to options
- Add `container.anchor` property
- Add `setAnchor()` method
- Add `applyAnchor()` placeholder
- Call anchor logic in `initContainerLogic()`

## 🔄 **Current Step (Next to Implement)**

### **2.3 – Apply Styles & Anchors Visually (NOT STARTED YET)**

This will include:

- Applying background color to the rect
- Applying borderWidth, borderColor, radius
- Applying padding to internal GameObj positioning
- Applying anchor visually via Kaplay’s `.anchor()` component
- Ensuring container size + style reflect options

## ⏳ **Upcoming Step (Depends on Step 2.3)**

### **2.4 – Implement Basic Child Positioning & Padding**

- Children positioned relative to container origin
- Apply padding offsets
- Children follow container movement
- Simple update loop to sync child positions

---

# 📦 **Phase 3 — Layout Engine (Future)**

### **3.1 – Layout Modes: none, vertical, horizontal**

### **3.2 – Spacing support**

### **3.3 – Auto-size based on children**

### **3.4 – Alignment (start, center, end)**

---

# ✨ **Phase 4 — Advanced Features (Future)**

### **4.1 – Borders, shadows, hover states**

### **4.2 – Themes & preset styles**

### **4.3 – z-index / UI layers**

### **4.4 – Optional clipping / scroll masking**

---

# 📚 **Phase 5 — Docs & Testing**

### **5.1 – Full README examples**

### **5.2 – API documentation**

### **5.3 – Unit tests for container behavior**

### **5.4 – Interactive demo in `/test/game.ts`**

---

# 🚀 **Phase 6 — v0.1.0 Release**

### **6.1 – Code cleanup & final polish**

### **6.2 – Publish `kaplay-ui` to npm**

### **6.3 – Announce first usable Container component**

---

# 🧭 **Where We Are Right Now**

As of your last message, you are here:

### ⭐ **Phase 2 → Step 2.4 complete**

Meaning the next step to do together is:

# 👉 **Phase 2 Step 3 — Apply Styles & Anchors Visually**

This is where your container becomes:

- visually styled
- anchored correctly
- padded properly
- a _real_ UI element, not just a rectangle

---

# If you'd like, I can now:

- Create a “live” ROADMAP.md file matching this structure
- Move you into Phase 2 Step 3
- Review your existing code to ensure everything matches the roadmap
- Add future sections (Buttons, Sliders, Text, etc.)

Just tell me what you'd like to do next.
