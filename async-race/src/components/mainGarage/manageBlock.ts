/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-use-before-define */
import {
  AllCars,
  Car,
  createCar,
  createWinner,
  deleteCar,
  getCars,
  getOneCar,
  getOneWinner,
  updateCar,
  updateWinner,
  Winner,
} from '../../api/api';
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
  winnerAlertExitVar,
  winnerAlertNameVar,
  winnerAlertTimeVar,
} from '../../utils/string-variables';
import {
  startDrive,
  stopDrive,
  trackButtons,
  updateTrack,
} from './trackBlock';
import createTableOfWinners from '../mainWinners/tableBlock';

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
  carNameForCreate.addEventListener('input', manageInputListener);

  carColorForCreate = createMyElement(mainCreateCar.element, {
    type: 'input',
    className: ['create-car__input-color', 'block-input'],
    attributes: [['type', 'color'], ['value', '#e9c46a']],
  }).element as HTMLInputElement;
  carColorForCreate.addEventListener('input', manageInputListener);

  createButton = createMyElement(mainCreateCar.element, {
    type: 'button',
    className: ['create-car__button', 'block-button', 'inactive'],
    innerText: createCarVar.toUpperCase(),
    attributes: [['disabled', '']],
  }).element;
  createButton.addEventListener('click', manageClickListeners);
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
  carNameForUpdate.addEventListener('input', manageInputListener);

  carColorForUpdate = createMyElement(mainUpdateCar.element, {
    type: 'input',
    className: ['update-car__input-color', 'block-input', 'inactive'],
    attributes: [['type', 'color'], ['value', '#f4a261'], ['disabled', '']],
  }).element as HTMLInputElement;
  carColorForUpdate.addEventListener('input', manageInputListener);

  updateButton = createMyElement(mainUpdateCar.element, {
    type: 'button',
    className: ['update-car__button', 'block-button', 'inactive'],
    innerText: updateCarVar.toUpperCase(),
    attributes: [['disabled', '']],
  }).element;
  updateButton.addEventListener('click', manageClickListeners);
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
  raceButton.addEventListener('click', manageClickListeners);

  resetButton = createMyElement(mainActionsButtons.element, {
    type: 'button',
    className: ['actions-buttons__reset', 'block-button', 'inactive'],
    innerText: resetVar.toUpperCase(),
    attributes: [['disabled', '']],
  }).element;
  resetButton.addEventListener('click', manageClickListeners);

  generateButton = createMyElement(mainActionsButtons.element, {
    type: 'button',
    className: ['actions-buttons__generate', 'block-button'],
    innerText: generateVar.toUpperCase(),
  }).element;
  generateButton.addEventListener('click', manageClickListeners);

  removeAllCars = createMyElement(mainActionsButtons.element, {
    type: 'button',
    className: ['actions-buttons__remove-all', 'block-button'],
    innerText: removeAllVar.toUpperCase(),
  }).element;
  removeAllCars.addEventListener('click', manageClickListeners);
}

// listeners

function manageInputListener(event: Event): void {
  if (event.target instanceof HTMLInputElement) {
    const newName = event.target.value;

    // input name
    if (event.target === carNameForCreate) {
      if (newName.length > 0) {
        createButton.removeAttribute('disabled');
        createButton.classList.remove('inactive');
      }
      if (newName.length === 0) {
        createButton.setAttribute('disabled', '');
        createButton.classList.add('inactive');
      }
    }
  }
}

async function manageClickListeners(event: MouseEvent): Promise<void> {
  const newName = carNameForCreate.value;
  const newColor = carColorForCreate.value;
  // create car button
  if (event.target === createButton) {
    await createCar(newColor, newName);
    await updateTrack();
  }

  // update car button
  if (event.target === updateButton) {
    const newNameUpdate = carNameForUpdate.value;
    const newColorUpdate = carColorForUpdate.value;
    const carFromStorage: string | null = localStorage.getItem('car-for-update');
    if (carFromStorage) {
      const car: Car = JSON.parse(carFromStorage);
      await updateCar(car.id, newNameUpdate, newColorUpdate);
      await updateTrack();
    }

    const updateFields = [carNameForUpdate, carColorForUpdate, updateButton];
    updateFields.forEach((e) => {
      e.classList.add('inactive');
      e.setAttribute('disabled', '');
    });
    carNameForUpdate.placeholder = placeholderTextVar;
  }
  // race button
  if (event.target === raceButton) {
    if (event.target instanceof HTMLElement) {
      event.target.classList.add('inactive');
      event.target.setAttribute('disabled', '');
    }
    resetButton.classList.remove('inactive');
    resetButton.removeAttribute('disabled');
    trackButtons.forEach((button: HTMLElement) => {
      button.classList.add('inactive');
      button.setAttribute('disabled', '');
    });
    const currentPage = localStorage.getItem('current-page-number');
    if (currentPage) {
      const testArray: string[] = [];
      const carsOnTrack = await getCars(7, +currentPage) as AllCars;
      carsOnTrack.cars.forEach(async (car) => {
        const driveResult = await startDrive(car.id.toString());
        if (!(await driveResult.status instanceof Error)) {
          if (testArray.length === 0) {
            testArray.push(car.name);
            createMyElement(document.body, {
              type: 'p',
              className: ['winner-alert'],
              innerText: `${winnerAlertNameVar}${car.name}.
            ${winnerAlertTimeVar}${(driveResult.time / 1000).toFixed(2)}s
            ${winnerAlertExitVar}`,
            });
            const isWinner = await getOneWinner(car.id) as Winner;
            if (isWinner.id) {
              const newTime = (isWinner.time < driveResult.time)
                ? isWinner.time
                : driveResult.time;
              await updateWinner(isWinner.id, isWinner.wins + 1, newTime);
            } else {
              await createWinner(car.id, 1, +(driveResult.time / 1000).toFixed(2));
            }
            const currentWinnersPageNumber = Number(localStorage.getItem('current-winners-page-number'));
            const parentElementForWinners = document.querySelector('main__wrapper-winners');
            if (parentElementForWinners instanceof HTMLElement) {
              createTableOfWinners(parentElementForWinners, currentWinnersPageNumber);
            }
          }
        }
      });
    }
  }

  // reset button
  if (event.target === resetButton) {
    const winnerAlertElement = document.querySelector('.winner-alert');
    if (winnerAlertElement) {
      winnerAlertElement.parentElement?.removeChild(winnerAlertElement);
    }
    trackButtons.forEach((button: HTMLElement) => {
      button.classList.remove('inactive');
      button.removeAttribute('disabled');
    });

    raceButton.classList.remove('inactive');
    raceButton.removeAttribute('disabled');
    const currentPage = localStorage.getItem('current-page-number');
    if (currentPage) {
      const carsOnTrack = await getCars(7, +currentPage) as AllCars;
      carsOnTrack.cars.forEach(async (car) => {
        stopDrive(car.id.toString());
      });
    }
  }

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
    // eslint-disable-next-line no-alert
    if (window.confirm(deleteAllCarsVar)) {
      await removeAll();
      await updateTrack();
    }
  }
}

// utils functions
async function removeAll() {
  const cars = await getCars() as AllCars;
  const allCarsInGarage = cars.cars;
  if (allCarsInGarage.length) {
    allCarsInGarage.forEach(async (car) => {
      await deleteCar(car.id);
    });
    await removeAll();
  }
}

async function activateUpdate(selectButton: HTMLElement, id: string) {
  if (id) {
    const car = (await getOneCar(+id)) as Car;
    carNameForUpdate.value = car.name;
    carColorForUpdate.setAttribute('value', `${car.color}`);

    const updateFields = [carNameForUpdate, carColorForUpdate, updateButton];
    updateFields.forEach((e) => {
      e.classList.remove('inactive');
      e.removeAttribute('disabled');
    });
    localStorage.setItem('car-for-update', JSON.stringify(car));
  }
}

export { createManageBlock, activateUpdate };
