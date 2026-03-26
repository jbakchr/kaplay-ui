import kaplay from "kaplay";
import kaplayUI from "../src/index";

const k = kaplay({
  width: 800,
  height: 600,
  plugins: [kaplayUI],
});

// TEST: Can we call k.addContainer()?
const panel = k.addContainer({
  width: 300,
  height: 200,
});

// For now, nothing should break even if panel is undefined or empty.
// We're only testing TypeScript + plugin integration.
console.log("Container created:", panel);
