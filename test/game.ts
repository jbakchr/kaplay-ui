import kaplay from "kaplay";
import kaplayUI from "../src/index";

// Init kaplay
const k = kaplay({
  plugins: [kaplayUI],
  debugKey: "d",
  background: [200, 213, 107],
});

const lbl = k.addLabel("Hello World!", {
  width: 200,
  height: 100,
  posX: 250,
  posY: 250,
});

k.wait(2, () => {
  lbl.setSize(300, 150); // ✅ change label size
  k.wait(2, () => {
    lbl.use(k.anchor("center")); // ✅ change label anchor
  });
});
