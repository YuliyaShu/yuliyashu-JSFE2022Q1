import AnyElement from "../elements/AnyElement";

describe("AnyElement constructor", () => {

  test('Parameter parent is correct', () => {
    const container = document.createElement('div');
    const newElement = new AnyElement(container, { type: 'div', className: ['header__search'] });
    expect(newElement.parent).toBe(container);
  });

  test('Parameter options type is correct', () => {
    const container = document.createElement('div');
    const newElement = new AnyElement(container, { type: 'div', className: ['header__search'] });
    expect(newElement.options.type).toBe('div');
  });

  test('Parameter options className is correct', () => {
    const container = document.createElement('div');
    const newElement = new AnyElement(container, { type: 'div', className: ['header__search'] });
    expect(newElement.options.className).toStrictEqual(['header__search']);
  })
  
})
