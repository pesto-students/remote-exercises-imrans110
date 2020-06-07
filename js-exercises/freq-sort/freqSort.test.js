import { freqSort } from "./freqSort";

describe("Test FreqSort", () => {
  test("Frequency Sort", () => {
    expect(freqSort(["a", "z", "z", "z", "b", "b", "z"])).toEqual([
      "z",
      "b",
      "a",
    ]);
    expect(freqSort([])).toEqual([]);
    expect(
      freqSort(["w", "x", "x", "x", "s", "s", "t", "t", "t", "t"])
    ).toEqual(["t", "x", "s", "w"]);
  });
});
