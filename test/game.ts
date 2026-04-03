import kaplay from "kaplay";
import kaplayUI from "../src/index";

// Init kaplay
const k = kaplay({
  plugins: [kaplayUI],
  debugKey: "d",
  background: [200, 213, 107],
});

const btn = k.addTextButton("Hello", { posX: 100, posY: 100, txtSize: 30 });

const lbl = k.addLabel("Score: 0");
