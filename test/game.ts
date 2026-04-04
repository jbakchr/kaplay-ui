import kaplay, { Color } from "kaplay";
import kaplayUI from "../src/index";

// Init kaplay
const k = kaplay({
  plugins: [kaplayUI],
  debugKey: "d",
  background: [200, 213, 107],
});

const txtBtn = k.addTextButton("Hello", { btnColor: [200, 150, 100] });

console.log(txtBtn);
