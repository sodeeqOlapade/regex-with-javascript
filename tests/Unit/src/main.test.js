var { String } = require("../../../src/main");

describe("String Custom Methods", () => {
  describe("hasVowels", () => {
    it("returns false as crypt has no vowel", () => {
      expect('crypt'.hasVowels()).toBe(false);
    });
    it("returns true as script has vowel", () => {
        expect('script'.hasVowels()).toBe(true);
      });
  });
});
