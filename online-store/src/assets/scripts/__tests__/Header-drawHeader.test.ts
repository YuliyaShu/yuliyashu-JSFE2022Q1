import Utils from "../utils/Utils";
import Header from "../view/shop/Header";

describe("Header", () => {

  test("defines a function", () => {
    expect(typeof Header.drawHeader).toBe("function");
  });

  test("drawHeader method is called with arguments", () => {
    const body = document.querySelector('body') as HTMLElement;
    const bodyWrapper = Utils.createAnyElement(body, { type: 'div', className: ['body__wrapper']});
    const setRuleSpy = jest.spyOn(Header, "drawHeader");
    Header.drawHeader(bodyWrapper);
    expect(setRuleSpy).toHaveBeenCalledWith(bodyWrapper);
    setRuleSpy.mockClear();
  })
  
});
