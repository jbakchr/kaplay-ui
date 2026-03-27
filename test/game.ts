import kaplay from "kaplay";
import kaplayUI from "../src/index";

const k = kaplay({
  plugins: [kaplayUI],
  debugKey: "d",
});

const txtBtn = k.addTextButton("Hello");

// // Check if btn txt is still centered after change btn position
// // result: It does - wuhuuu!
// k.wait(3, () => {
//   txtBtn.use(k.pos(100, 100));
// });
