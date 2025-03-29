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

### Inputs

All inputs are imported from the <code>/inputs</code> folder.

```javascript
import {} from "kaplay-ui/inputs";
```

#### Checkbox

To make a checkbox, one must use the exported <code>makeCheckbox()</code> function.

##### Example

An example usage of a checkbox.

```javascript
import kaplay from "kaplay";
import "kaplay/global";

import { makeCheckbox } from "kaplay-ui/inputs";

kaplay();

const checkBox = makeCheckbox();

add(checkBox);
```

##### State

A cehckbox has the following state:

| state | Type | Default | State change by |
| --------- | -------- | ------- | ------------------- |
| `checked` | `boolean` | false | Click on checkbox |

##### Parameters

A checkbox can take the following parameters:

| Parameter | Type     | Default | Required | Description         |
| --------- | -------- | ------- | -------- | ------------------- |
| `x`       | `number` | 0       | ❌ No    | Checkbox x position |
| `y`       | `number` | 0       | ❌ No    | Checkbox x position |
| `width`   | `number` | 25      | ❌ No    | Checkbox width      |
| `height`  | `number` | 25      | ❌ No    | Checkbox height     |

<br>

#### Text Button

To make a text button, one must use the exported <code>makeTextButton()</code> function.

##### Example

An example usage of a text button.

```javascript
import kaplay from "kaplay";
import "kaplay/global";

import { makeTextButton } from "kaplay-ui/inputs";

kaplay();

const txtBtn = makeTextButton("Start");

add(txtBtn);
```

##### Parameters

A text button can take the following parameters:

| Parameter    | Type     | Default | Required | Description                        |
| ------------ | -------- | ------- | -------- | ---------------------------------- |
| `text`       | `string` | N/A     | ✅ Yes   | The text to display on the button. |
| `x`          | `number` | 0       | ❌ No    | Button x position                  |
| `y`          | `number` | 0       | ❌ No    | Button y position                  |
| `width`      | `number` | 100     | ❌ No    | Button width                       |
| `height`     | `number` | 50      | ❌ No    | Button height                      |
| `btnRadius`  | `number` | 8       | ❌ No    | Button radius                      |
| `btnOutline` | `number` | 1       | ❌ No    | Button outline                     |
| `txtSize`    | `number` | 15      | ❌ No    | Text size                          |

<br>

#### Toggle

To make a toggle, one must use the exported <code>makeToggle()</code> function.

##### Example

An example usage of a toggle.

```javascript
import kaplay from "kaplay";
import "kaplay/global";

import { makeToggle } from "kaplay-ui/inputs";

kaplay();

const toggle = makeToggle();

add(toggle);
```

##### State

A cehckbox has the following state:

| state | Type | Default | State change by |
| --------- | -------- | ------- | ------------------- |
| `toggled` | `boolean` | false | Click on toggle |

##### Parameters

A toggle can take the following parameters:

| Parameter | Type     | Default | Required | Description       |
| --------- | -------- | ------- | -------- | ----------------- |
| `x`       | `number` | 0       | ❌ No    | Toggle x position |
| `y`       | `number` | 0       | ❌ No    | Toggle y position |
| `width`   | `number` | 50      | ❌ No    | Toggle width      |
| `height`  | `number` | 25      | ❌ No    | Toggle height     |

<br>

## License

This project is licensed under the MIT License - see the LICENSE file for details.

<br>

## Contact

Have questions or suggestions? Reach out via:

- GitHub Issues
