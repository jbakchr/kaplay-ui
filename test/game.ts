import kaplay from "kaplay";

import uiPlugin from "../src/index";

const k = kaplay({
  plugins: [uiPlugin],
});

k.hi();
