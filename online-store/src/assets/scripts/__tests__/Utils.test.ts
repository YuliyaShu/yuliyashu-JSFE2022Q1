import Utils from "../utils/Utils";

describe("Utils", () => {

  test("getArrayFromStorage method is a function", () => {
    expect(typeof Utils.getArrayFromStorage).toBe("function");
  });

  test ("getArrayFromStorage return string[]", ()=> {
    const result = Utils.getArrayFromStorage('string');
    expect(result).toBeInstanceOf(Array);
  })

});