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

  describe("isQuestion", () => {
    it("returns false as 'What is your name' doesn't end with ?", () => {
      expect('What is your name'.isQuestion()).toBe(false);
    });
    it("returns true as 'What is your name?' ends with ?", () => {
        expect('What is your name?'.isQuestion()).toBe(true);
      });
  });
});
