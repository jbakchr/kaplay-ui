![WIP](https://img.shields.io/badge/status-WIP-yellow)
<br>_🚧 This package is a work in progress! 🚧_  
_Expect breaking changes and incomplete features._

# KAPLAY UI - A UI Component Library for KAPLAY

_A simple and customizable component UI library for [KAPLAY](https://kaplayjs.com/)._

## 🚀 Introduction

Kaplay UI is a component library designed specifically for KAPLAY. It will provide ready-made UI components to help you build better user interfaces for your KAPLAY games with minimal effort.

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Installation

You can install Kaplay UI via npm:

```bash
npm install kaplay-ui
```

## Usage

### Buttons

#### Icon Button

```javascript
import kaplay from "kaplay";
import "kaplay/global";

import { addIconButton } from "kaplay-ui/buttons";

kaplay();

loadSprite("arrow", "sprites/arrow.png");

// Add a text button with an onClick handler
addIconButton("arrow", () => go("game"));
```

#### Text Button

Here's some quick examples of how to add text buttons using Kaplay UI:

```javascript
import kaplay from "kaplay";
import "kaplay/global";

import { addTextButton } from "kaplay-ui/buttons";

kaplay();

// Add a text button
addTextButton("Start");

// Add a text button with an onClick handler
addTextButton("Start", () => go("game"));

// Add a text button with x and y position
addTextButton("Start", () => go("game"), 200, 200);

// Add a text button with width and height
addTextButton("Start", () => go("game"), 200, 200, 200, 70);

// Add a text button with text size
addTextButton("Start", () => go("game"), 200, 200, 200, 70, 20);

// Add a text button with disabled hover effect
addTextButton("Start", () => go("game"), 200, 200, 200, 70, 20, false);
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

Have questions or suggestions? Reach out via:

- GitHub Issues
