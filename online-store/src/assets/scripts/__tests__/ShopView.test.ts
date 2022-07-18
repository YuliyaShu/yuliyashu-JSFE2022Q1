import ShopView from "../view/ShopView";

describe("ShopView", () => {
  const shopView = new ShopView();

  test("start method is a function", () => {
    expect(typeof shopView.start).toBe("function");
  });

  test ("createCatalogPage method is a function", () => {
    expect(typeof shopView.createCatalogPage).toBe("function");
  })
});