import kaplay from "kaplay";
import "kaplay/global";

import { hello } from "../src"; // from your library

console.log(hello());

// Initialize basic KAPLAY app
kaplay({
  width: 800,
  height: 600,
  background: [0, 0, 0],
});

add([
  rect(200, 100),
  {
    color: [255, 0, 0],
    pos: { x: 300, y: 250 },
  },
]);
