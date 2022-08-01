/* eslint-disable @typescript-eslint/no-use-before-define */
import createMyElement from '../../utils/HTML_Elements/createMyElement';

function createManageBlock(parentElement: HTMLElement): void {
  createCarBlock(parentElement);
  updateCarBlock(parentElement);
  actionsButtonsBlock(parentElement);
}

function createCarBlock(parentElement: HTMLElement): void {
  const mainCreateCar = createMyElement(parentElement, {
    type: 'div',
    className: ['main__subblock', 'create-car'],
  });
  createMyElement(mainCreateCar.element, {
    type: 'input',
    className: ['create-car__input-text', 'block-input'],
  });
  createMyElement(mainCreateCar.element, {
    type: 'input',
    className: ['create-car__input-color', 'block-input'],
    attributes: [['type', 'color'], ['value', '#e9c46a']],
  });
  createMyElement(mainCreateCar.element, {
    type: 'button',
    className: ['create-car__button', 'block-button'],
    innerText: 'CREATE CAR',
  });
}

function updateCarBlock(parentElement: HTMLElement): void {
  const mainUpdateCar = createMyElement(parentElement, {
    type: 'div',
    className: ['main__subblock', 'update-car'],
  });
  createMyElement(mainUpdateCar.element, {
    type: 'input',
    className: ['update-car__input-text', 'block-input', 'inactive'],
    attributes: [['disabled', '']],
  });
  createMyElement(mainUpdateCar.element, {
    type: 'input',
    className: ['update-car__input-color', 'block-input', 'inactive'],
    attributes: [['type', 'color'], ['value', '#f4a261'], ['disabled', '']],
  });
  createMyElement(mainUpdateCar.element, {
    type: 'button',
    className: ['update-car__button', 'block-button', 'inactive'],
    innerText: 'UPDATE CAR',
    attributes: [['disabled', '']],
  });
}

function actionsButtonsBlock(parentElement: HTMLElement): void {
  const mainActionsButtons = createMyElement(parentElement, {
    type: 'div',
    className: ['main__subblock', 'actions-buttons'],
  });
  createMyElement(mainActionsButtons.element, {
    type: 'button',
    className: ['actions-buttons__race', 'block-button'],
    innerText: 'RACE',
  });
  createMyElement(mainActionsButtons.element, {
    type: 'button',
    className: ['actions-buttons__reset', 'block-button'],
    innerText: 'RESET',
  });
  createMyElement(mainActionsButtons.element, {
    type: 'button',
    className: ['actions-buttons__generate', 'block-button'],
    innerText: 'GENERATE 100 CARS',
  });
}

export default createManageBlock;
