const shuffle = require("../src/shuffle");

describe("shuffle should...", () => {
  // CODE HERE
  test("return an array", () => {
    expect(Array.isArray(['result'])).toBe(true);
      })

  test("check that it returns an array of the same length as the argument sent in", () => {
    expect(shuffle(array.length)).toHaveLength(shuffle(result.lengt));
      })
});
