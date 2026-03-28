import kaplay from "kaplay";
import kaplayUI from "../src/index";

// Init kaplay
const k = kaplay({
  plugins: [kaplayUI],
  debugKey: "d",
  background: [124, 124, 0],
});

// Add text button
const txtBtn = k.addTextButton("Hello");

txtBtn.onClick(() => {
  console.log("clicked!");
});
