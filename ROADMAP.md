# 🌟 kaplay-ui v2 Roadmap

This roadmap outlines the goals, direction, and development phases of **kaplay-ui v2**, a complete rewrite focused on creating a modern, composable, and KAPLAY‑native UI toolkit for game interfaces.

This document is intentionally high‑level.  
It guides the evolution of the project without imposing heavy project-management overhead.

---

## 🎯 Vision

kaplay-ui v2 aims to deliver a **high-quality, developer-friendly UI component library** built specifically for the KAPLAY game engine.

Key goals:

- A **consistent, predictable API** that feels natural to KAPLAY
- **High-performance** UI components suitable for game loops
- **TypeScript‑first** design for strong DX and reliability
- A foundation that supports **theming**, **layout systems**, and **advanced interaction**
- A maintainable codebase with clear architecture and long-term growth potential

---

## 🧩 Why Rewrite v1?

v1 was an important experiment, but it revealed several limitations:

- No clear architectural foundation
- Mixed API patterns
- Missing TypeScript support
- Hard to extend or maintain
- Minimal testing
- Weak theming and layout primitives
- Insufficient documentation

v2 solves these issues holistically with a fresh start.

---

## ✨ Guiding Principles

- **TypeScript-first** for strong typing and IDE support
- **Composable primitives**: build advanced UI from small pieces
- **Predictable APIs** (consistent naming, options, events)
- **KAPLAY-native feel**
- **Performance-aware architecture**
- **Testability** built in from day one
- **Simple theming model** that doesn't burden the developer
- **Documentation-first mindset**

---

## 📐 High‑Level Scope

### 1. Foundation

- New architecture & folder structure
- TypeScript setup
- Vite build pipeline
- Vitest for testing
- Basic CI workflow
- Development playground
- Semantic-release integration

### 2. UI Primitives (Core)

- Button
- Panel / Container
- Slider
- Label / Text UI
- Checkbox / Toggle
- Progress Bar

### 3. Layout Utilities

- Stack (vertical/horizontal)
- Grid layout
- Anchor / alignment helpers
- Spacing utilities

### 4. Interaction Abstractions

- Click behavior
- Hover behavior
- Draggable behavior
- Optional focus/navigation primitives

### 5. Theming

- Base theme
- Color system
- Spacing, rounding, shadows
- Customizable themes

### 6. Documentation

- VitePress documentation website
- Live playground examples
- API references
- Migration guide from v1 → v2

---

## 🚀 Development Phases

### **Phase 1 — Foundation** (_in progress: 28 % done_)

- [x] TypeScript configuration
- [x] Vite build setup
- [ ] Repo structure
- [ ] Testing setup
- [ ] CI basics
- [ ] Playground environment
- [ ] semantic-release setup

### **Phase 2 — Core Component Architecture**

- [ ] Component base class / creation pattern
- [ ] Shared behaviors (hover, press, disabled)
- [ ] Event system

### **Phase 3 — Primitive Components**

- [ ] Implement Button, Label, Panel, Slider, Checkbox, Progress Bar
- [ ] Basic examples in the playground

### **Phase 4 — Layout & Theming**

- [ ] Layout primitives
- [ ] Theming foundations
- [ ] Styling documentation

### **Phase 5 — Documentation Site**

- [ ] Component catalog
- [ ] Interactive examples
- [ ] Getting started + API docs

### **Phase 6 — Pre‑Release (`v2-beta`)**

- [ ] Testing
- [ ] Real-world usage validation
- [ ] Fixes and polish

### **Phase 7 — Final Release**

- [ ] Publish `2.0.0`
- [ ] Announce release
- [ ] Move v1 into maintenance mode

---

## 🧱 Out of Scope (for v2)

These features may be considered for v2.x or v3:

- Complex widgets (inventory UI, minimaps, etc.)
- Data-binding system
- Visual editor integration
- Networked UI synchronization

---

## 📌 Status

This roadmap evolves over time.  
Please check issues and pull requests for the most up-to-date progress.
