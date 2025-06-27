import { describe, it, expect } from "bun:test";
import { add } from ".";

describe("add", () => {
  it("should return the sum of two numbers", () => {
    const result = add(2, 3);
    expect(result).toBe(5);
  });
});
