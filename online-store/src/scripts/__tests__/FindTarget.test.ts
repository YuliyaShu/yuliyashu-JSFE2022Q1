import FindTarget from "../utils/FindTarget";

describe("FindTarget", () => {

  const elem = document.querySelector('.container') as HTMLElement;
  const findTarget = new FindTarget(elem);

  test("find method is a function", () => {
    expect(typeof findTarget.find).toBe("function");
  });
  
});