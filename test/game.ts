import kaplay from "kaplay";
import kaplayUI from "../src/index";

// Init kaplay
const k = kaplay({
  plugins: [kaplayUI],
  debugKey: "d",
  background: [200, 213, 107],
});

const btn = k.addTextButton("Start", {
  posX: 100,
  posY: 100,
});

const lbl = k.addLabel("Hello");

// const lbl = k.addLabel("Hello World!", {
//   width: 200,
//   height: 100,
//   posX: 250,
//   posY: 250,
//   opacity: 0.8,
//   lblColor: [0, 0, 0],
// });

// k.wait(2, () => {
//   lbl.setSize(300, 150); // ✅ change label size
//   k.wait(2, () => {
//     lbl.setPosition(100, 100); // ✅ change label position
//     k.wait(2, () => {
//       lbl.setOpacity(0.4); // ✅ change label opacity
//       lbl.setRadius(20); // ✅ change label border radius
//     });
//   });
// });
