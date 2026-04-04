import kaplay from "kaplay";
import kaplayUI from "../src/index";

// Init kaplay
const k = kaplay({
  plugins: [kaplayUI],
  debugKey: "d",
  background: [200, 213, 107],
});

const lbl = k.addLabel("Hello", {
  width: 400,
  height: 200,
  posX: 200,
  posY: 200,
});

lbl.use(k.rect(300, 250));
lbl.use(k.anchor("center"));
