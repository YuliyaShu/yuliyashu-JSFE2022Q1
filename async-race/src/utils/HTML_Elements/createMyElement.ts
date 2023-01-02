import ElementOptionsInterface from './ElementOptionsInterface';
import MyElement from './MyElement';

const createMyElement = (
  parent: HTMLElement,
  {
    type,
    className,
    innerText,
    appendType = 'append',
    attributes,
  }: ElementOptionsInterface,
): MyElement => {
  const elem = new MyElement(parent, {
    type, className, innerText, appendType, attributes,
  });
  elem.addProperties();
  return elem;
};

export default createMyElement;
