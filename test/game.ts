import kaplay from "kaplay";
import kaplayUI from "../src/index";

// Init kaplay
const k = kaplay({
  plugins: [kaplayUI],
  debugKey: "d",
  background: [200, 213, 107],
});

const txtBtn = k.addTextButton("Quit", {
  posX: 200,
  posY: 150,
  outlineColor: [0, 0, 0],
  outline: 6, // ✅ thickness
});

k.wait(2, () => {
  console.log("Changing button size and position...");
  txtBtn.setOutline(1);
});
