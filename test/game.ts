import kaplay from "kaplay";
import kaplayUI from "../src/index";

// Init kaplay
const k = kaplay({
  plugins: [kaplayUI],
  debugKey: "d",
  background: [200, 213, 107],
});

// Add text button
const txtBtn = k.addTextButton("Play!");

txtBtn.onClick(() => {
  console.log("clicked!");
});
