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

  describe("isDigit", () => {
    it("returns false as '10' is not a digit", () => {
      expect('10'.isDigit()).toBe(false);
    });
    it("returns true as  '1' is a digit", () => {
        expect('1'.isDigit()).toBe(true);
      });
  });

  describe("numberWords", () => {
    it("returns text equivalent of a 324", () => {
      expect('324'.numberWords()).toMatch('three two four');
    });
    it("returns text equivalent of a 100000", () => {
        expect('100000'.numberWords()).toMatch('one zero zero zero zero zero');
      });
  });

  describe("words", () => {
    it("returns all words in the target sentence asan Array", () => {
      expect('Regular Expression is fun'.words()).toBeDefined();
      expect('Regular Expression is fun'.words().length).toBeGreaterThanOrEqual(1);
      expect('Regular Expression is fun'.words()).toContain('Regular');
      expect('Regular Expression is fun'.words()).toContain('Expression');
    });
    it("returns all words in the target sentence asan Array", () => {
        expect('JavaScript all the way'.words().length).toBeGreaterThanOrEqual(1);
        expect('JavaScript all the way'.words()).toBeDefined();
        expect('JavaScript all the way'.words()).toContain('JavaScript');
        expect('JavaScript all the way'.words()).toContain('way');
    });
});
});
