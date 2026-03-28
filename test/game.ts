import kaplay from "kaplay";
import kaplayUI from "../src/index";

// Init kaplay
const k = kaplay({
  plugins: [kaplayUI],
  debugKey: "d",
});

// Add text button
const txtBtn = k.addTextButton("Hello");

k.wait(3, () => {
  txtBtn.use(k.anchor("center"));
});
