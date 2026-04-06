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

k.wait(2, () => {
  console.log("Changing button size and position...");
  txtBtn.setSize(300, 120); // ✅ change size
  txtBtn.setPosition(200, 150); // ✅ change position
});
