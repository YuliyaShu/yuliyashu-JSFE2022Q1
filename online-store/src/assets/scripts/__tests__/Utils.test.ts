import Utils from "../utils/Utils";

describe("Utils", () => {

  test("getArrayFromStorage method is a function", () => {
    expect(typeof Utils.getArrayFromStorageEx).toBe("function");
  });

  test ("getArrayFromStorage return string[]", ()=> {
    const result = Utils.getArrayFromStorageEx<string>('string');
    expect(result).toBeInstanceOf(Array);
  })

});