/// <reference types="vitest" />

import { describe, it, expect } from "vitest";
import { hello } from "../src";

describe("basic test", () => {
  it("returns greeting string", () => {
    expect(hello()).toBe("Hello from kaplay-ui v2!");
  });
});
