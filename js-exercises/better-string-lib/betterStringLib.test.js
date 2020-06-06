import { betterStringLib } from "./betterStringLib";

describe("Tests for betterStringLib", () => {
  const { equal, reverse } = betterStringLib;
  test("Equal Method", () => {
    const stringA = "mañana";
    const stringB = "mañana";
    expect(equal(stringA, stringB)).toBe(true);
    expect(equal("a", "b")).toBe(false);
  });

  test("Reverse Method", () => {
    expect(reverse("mañana mañana")).toBe("anañam anañam".normalize());
    expect(reverse("foo 𝌆 bar")).toBe("rab 𝌆 oof");
    expect(reverse("abb")).toBe("bba");
  });
});
