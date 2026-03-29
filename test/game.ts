import kaplay from "kaplay";
import kaplayUI from "../src/index";

// Init kaplay
const k = kaplay({
  plugins: [kaplayUI],
  debugKey: "d",
  background: [200, 213, 107],
});

const txtBtn = k.addTextButton();
txtBtn.use(k.pos(400, 200));

let score = 0;
const lbl = k.addLabel(`Score: ${score}`);
lbl.use(k.pos(200, 200));

k.wait(2, () => {
  score++;
  lbl.children[0].text = `Score: ${score}`;
});
