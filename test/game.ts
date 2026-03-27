import kaplay from "kaplay";
import kaplayUI from "../src/index";

const k = kaplay({
  plugins: [kaplayUI],
  debugKey: "d",
});

const txtBtn = k.addTextButton("Hello");