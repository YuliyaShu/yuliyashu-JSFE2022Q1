/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-use-before-define */
import { createCar, deleteCar, getCars } from '../../api/api';
import generateRandomColor from '../../utils/generate-random-color';
import createMyElement from '../../utils/HTML_Elements/createMyElement';
import {
  createCarVar,
  deleteAllCarsVar,
  generateVar,
  placeholderTextVar,
  raceVar, removeAllVar,
  resetVar,
  updateCarVar,
} from '../../utils/string-variables';
import { createTrack, updateTrack } from './track';

let createButton: HTMLElement;
let updateButton: HTMLElement;
let raceButton: HTMLElement;
let resetButton: HTMLElement;
let generateButton: HTMLElement;
let removeAllCars: HTMLElement;

let carNameForCreate: HTMLInputElement;
let carColorForCreate: HTMLInputElement;
let carNameForUpdate: HTMLInputElement;
let carColorForUpdate: HTMLInputElement;

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
  carNameForCreate = createMyElement(mainCreateCar.element, {
    type: 'input',
    className: ['create-car__input-text', 'block-input'],
    attributes: [['placeholder', placeholderTextVar]],
  }).element as HTMLInputElement;
  carColorForCreate = createMyElement(mainCreateCar.element, {
    type: 'input',
    className: ['create-car__input-color', 'block-input'],
    attributes: [['type', 'color'], ['value', '#e9c46a']],
  }).element as HTMLInputElement;
  createButton = createMyElement(mainCreateCar.element, {
    type: 'button',
    className: ['create-car__button', 'block-button', 'inactive'],
    innerText: createCarVar.toUpperCase(),
    attributes: [['disabled', '']],
  }).element;
}

function updateCarBlock(parentElement: HTMLElement): void {
  const mainUpdateCar = createMyElement(parentElement, {
    type: 'div',
    className: ['main__subblock', 'update-car'],
  });
  carNameForUpdate = createMyElement(mainUpdateCar.element, {
    type: 'input',
    className: ['update-car__input-text', 'block-input', 'inactive'],
    attributes: [
      ['disabled', ''],
      ['placeholder', placeholderTextVar],
    ],
  }).element as HTMLInputElement;
  carColorForUpdate = createMyElement(mainUpdateCar.element, {
    type: 'input',
    className: ['update-car__input-color', 'block-input', 'inactive'],
    attributes: [['type', 'color'], ['value', '#f4a261'], ['disabled', '']],
  }).element as HTMLInputElement;
  updateButton = createMyElement(mainUpdateCar.element, {
    type: 'button',
    className: ['update-car__button', 'block-button', 'inactive'],
    innerText: updateCarVar.toUpperCase(),
    attributes: [['disabled', '']],
  }).element;
}

function actionsButtonsBlock(parentElement: HTMLElement): void {
  const mainActionsButtons = createMyElement(parentElement, {
    type: 'div',
    className: ['main__subblock', 'actions-buttons'],
  });
  raceButton = createMyElement(mainActionsButtons.element, {
    type: 'button',
    className: ['actions-buttons__race', 'block-button'],
    innerText: raceVar.toUpperCase(),
  }).element;
  resetButton = createMyElement(mainActionsButtons.element, {
    type: 'button',
    className: ['actions-buttons__reset', 'block-button'],
    innerText: resetVar.toUpperCase(),
  }).element;
  generateButton = createMyElement(mainActionsButtons.element, {
    type: 'button',
    className: ['actions-buttons__generate', 'block-button'],
    innerText: generateVar.toUpperCase(),
  }).element;
  removeAllCars = createMyElement(mainActionsButtons.element, {
    type: 'button',
    className: ['actions-buttons__remove-all', 'block-button'],
    innerText: removeAllVar.toUpperCase(),
  }).element;
}

// listeners

async function listen(): Promise<void> {
  // input name
  document.body.addEventListener('input', async (event) => {
    const newName = carNameForCreate.value;
    const newColor = carColorForCreate.value;
    if (event.target === carNameForCreate) {
      console.log('🚀 ~ file: manageBlock.ts ~ line 103 ~ event.target', event.target);
      if (newName.length > 0) {
        createButton.removeAttribute('disabled');
        createButton.classList.remove('inactive');
      }
      if (newName.length === 0) {
        createButton.setAttribute('disabled', '');
        createButton.classList.add('inactive');
      }
    }
  });

  document.body.addEventListener('click', async (event) => {
    const newName = carNameForCreate.value;
    const newColor = carColorForCreate.value;
    // create car button
    if (event.target === createButton) {
      await createCar(newColor, newName);
      await updateTrack();
    }

    // update car button
    // race button
    // reset button

    // create 100 cars button
    if (event.target === generateButton) {
      const carNames = ['Alfa Romeo', 'Aston Martin', 'Audi', 'BMW', 'Buick', 'Cadillac', 'Chevrolet', 'Chrysler', 'Dodge', 'Ferrari', 'FIAT', 'Ford'];
      const carSurnames = ['Lux', 'Drive', 'Family', 'Prime', 'Premium', 'Ultra'];
      for (let i = 0; i < 100; i += 1) {
        const newColor100 = generateRandomColor();
        const newName100 = `${carNames[Math.floor(Math.random() * carNames.length)]} ${carSurnames[Math.floor(Math.random() * carSurnames.length)]}`;
        createCar(newColor100, newName100);
      }
      await updateTrack();
    }

    // remove all button
    if (event.target === removeAllCars) {
      if (window.confirm(deleteAllCarsVar)) {
        removeAll();
      }
    }
  });
}

listen();

async function removeAll() {
  const allCarsInGarage = (await getCars()).cars;
  console.log('🚀 ~ file: manageBlock.ts ~ line 148 ~ allCarsInGarage', allCarsInGarage);
  if (allCarsInGarage.length) {
    allCarsInGarage.forEach(async (car) => {
      await deleteCar(car.id);
      updateTrack();
    });
    removeAll();
  }
}

export default createManageBlock;
