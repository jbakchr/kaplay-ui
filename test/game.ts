import kaplay from "kaplay";
import kaplayUI from "../src/index";

// Init kaplay
const k = kaplay({
  plugins: [kaplayUI],
  debugKey: "d",
  background: [200, 213, 107],
});

const txtBtn = k.addTextButton("Quit", {
  outlineColor: [0, 0, 0],
  outline: 6, // ✅ thickness
});

txtBtn.setSize(200, 80);
