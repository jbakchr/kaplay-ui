import kaplay from "kaplay";
import kaplayUI from "../src/index";

// Init kaplay
const k = kaplay({
  plugins: [kaplayUI],
  debugKey: "d",
  background: [200, 213, 107],
});

k.addTextButton("Hello", { posX: 100, posY: 100, txtSize: 30 });

k.addLabel("Score: 0", { width: 400 });
