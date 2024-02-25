const shuffle = require("../src/shuffle");



describe("shuffle should...", () => {
  // CODE HERE
  test("return an array", () => {
    let array = shuffle(['robot1', 'robot2', 'robot3'])
    expect(Array.isArray(array)).toBe(true);
      })

  test("check that it returns an array of the same length as the argument sent in", () => {
    let original = ['robot1', 'robot2', 'roboot3'];
    let shuffled = shuffle(original);
    expect(original.length).toEqual(shuffled.length);
      })
});
