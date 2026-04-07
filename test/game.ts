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

// btn.setButtonColor("#7b5480"); // ✅ change button color
// btn.setButtonOutlineColor([100, 100, 100]); // ✅ change button outline color

// k.wait(2, () => {
//   btn.setAnchor("bot"); // ✅ change button anchor
//   btn.setButtonTextColor([255, 0, 0]); // ✅ change button text color
// });

const label = k.addLabel("Hello!", {
  posX: 100,
  posY: 200,
});

k.wait(2, () => {
  label.setLabelColor([255, 0, 0]); // ✅ change label color
  label.setLabelText("Goodbye!"); // ✅ change label text
  label.setLabelTextColor([0, 0, 255]); // ✅ change label text color
  label.setLabelTextSize(30); // ✅ change label text size
  label.setLabelAnchor("botleft"); // ✅ change label anchor
});
