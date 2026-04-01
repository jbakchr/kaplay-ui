import kaplay from "kaplay";
import kaplayUI from "../src/index";

// Init kaplay
const k = kaplay({
  plugins: [kaplayUI],
  debugKey: "d",
  background: [200, 213, 107],
});

k.addTextButton("Hello", {
  width: 300,
  height: 200,
  radius: 10,
  txtSize: 100,
  outline: 10,
});
