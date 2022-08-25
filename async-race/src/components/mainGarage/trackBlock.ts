/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable import/no-cycle */

import {
  AllCars,
  Car, CarEngine, deleteCar, getCars, getOneCar, SuccessDrive,
} from '../../api/api';
import createMyElement from '../../utils/HTML_Elements/createMyElement';
import {
  removeVar,
  selectVar,
  startVar,
  stopVar,
  nextPageVar,
  pageVar,
  prevPageVar,
} from '../../utils/string-variables';
import { activateUpdate } from './manageBlock';
import createCarImage from '../../utils/animation/createCarImage';
import { startDrive, stopDrive, stopAnimation } from '../../utils/animation/carAnimation';

const carsColors: Map<number, SVGSVGElement> = new Map();
const startPageNumber = 1;
const trackButtons: HTMLElement[] = [];
localStorage.setItem('current-page-number', startPageNumber.toString());

let prevPageButton: HTMLElement;
let nextPageButton: HTMLElement;
let stopButton: HTMLElement;

async function updateTrack(page = 1) {
  const trackMainWrapper = document.querySelector('.track-main__wrapper');
  if (trackMainWrapper) trackMainWrapper.innerHTML = '';
  if (trackMainWrapper instanceof HTMLElement) {
    await createTrack(trackMainWrapper, page);
  }
}

async function trackListeners(event: MouseEvent):Promise<void | CarEngine | SuccessDrive> {
  if (event.target instanceof HTMLButtonElement) {
    const carID = event.target.getAttribute('carID');
    if (carID) {
      // select button
      if (event.target.innerText === 'SELECT') {
        activateUpdate(event.target, carID);
      }

      // remove button
      if (event.target.innerText === 'REMOVE') {
        await deleteCar(+carID);
        await updateTrack();
      }

      // start button
      if (event.target.innerText === 'START') {
        // disable start button
        event.target.classList.add('inactive');
        event.target.setAttribute('disabled', '');

        // enable stop button
        const stopButtonDrive = document.querySelector(`[stopCarID="${carID}"]`);
        if (stopButtonDrive) {
          stopButtonDrive.classList.remove('inactive');
          stopButtonDrive.removeAttribute('disabled');
        }

        // drive
        startDrive(carID);
      }

      // stop button
      if (event.target.innerText === 'STOP') {
        // enable start button
        const startButtonDrive = document.querySelector(`[startCarID="${carID}"]`);
        if (startButtonDrive) {
          startButtonDrive.classList.remove('inactive');
          startButtonDrive.removeAttribute('disabled');
        }

        // disable stop button
        event.target.classList.add('inactive');
        event.target.setAttribute('disabled', '');

        // stop
        stopDrive(carID);
      }
    }
  }
}

async function paginationListeners(event: MouseEvent) {
  const currentPageNumber = Number(localStorage.getItem('current-page-number'));
  // next page button
  if (event.target === nextPageButton) {
    localStorage.setItem('current-page-number', (currentPageNumber + 1).toString());
    updateTrack(currentPageNumber + 1);
  }

  // prev page button
  if (event.target === prevPageButton) {
    localStorage.setItem('current-page-number', (currentPageNumber - 1).toString());
    updateTrack(currentPageNumber - 1);
  }
}

async function createTrackLine(parentElement: HTMLElement, id: number, randomColor: string) {
  const trackLineWrapper = createMyElement(parentElement, {
    type: 'div',
    className: ['track-line__wrapper'],
  });

  const trackLineCarPanel = createMyElement(trackLineWrapper.element, {
    type: 'div',
    className: ['track-line__car-panel'],
  });

  const selectBtn = createMyElement(trackLineCarPanel.element, {
    type: 'button',
    className: ['block-button', 'select-button'],
    innerText: selectVar.toUpperCase(),
    attributes: [['carID', `${id}`]],
  }).element;
  selectBtn.addEventListener('click', trackListeners);
  trackButtons.push(selectBtn);

  const removeBtn = createMyElement(trackLineCarPanel.element, {
    type: 'button',
    className: ['block-button', 'remove-button'],
    innerText: removeVar.toUpperCase(),
    attributes: [['carID', `${id}`]],
  }).element;
  removeBtn.addEventListener('click', trackListeners);
  trackButtons.push(removeBtn);

  const getCar: Car = await getOneCar(id) as Car;
  createMyElement(trackLineCarPanel.element, {
    type: 'p',
    className: ['car-name'],
    innerText: `${getCar.name}`,
  });

  const trackLineCarDrive = createMyElement(trackLineWrapper.element, {
    type: 'div',
    className: ['track-line__car-drive'],
  });

  const trackLineCarManipulate = createMyElement(trackLineCarDrive.element, {
    type: 'div',
    className: ['track-line__car-manipulate'],
  });

  const startBtn = createMyElement(trackLineCarManipulate.element, {
    type: 'button',
    className: ['block-button'],
    innerText: startVar.toUpperCase(),
    attributes: [['carID', `${id}`],
      ['startCarID', `${id}`],
    ],
  }).element;
  startBtn.addEventListener('click', trackListeners);
  trackButtons.push(startBtn);

  stopButton = createMyElement(trackLineCarManipulate.element, {
    type: 'button',
    className: ['block-button', 'inactive'],
    innerText: stopVar.toUpperCase(),
    attributes: [
      ['carID', `${id}`],
      ['stopCarID', `${id}`],
      ['disabled', ''],
    ],
  }).element;
  stopButton.addEventListener('click', trackListeners);
  trackButtons.push(stopButton);

  const carImg = createMyElement(trackLineCarManipulate.element, {
    type: 'div',
    className: ['car-img'],
  });
  const svgImage = createCarImage(randomColor, id);
  const svgImageForWinners = createCarImage(randomColor, id);
  if (carsColors.has(id)) {
    carsColors.delete(id);
  }
  carsColors.set(id, svgImageForWinners);
  carImg.element.append(svgImage);

  const trackLineFlag = createMyElement(trackLineCarDrive.element, {
    type: 'div',
    className: ['track-line__flag'],
  });
  createMyElement(trackLineFlag.element, {
    type: 'img',
    className: ['track-line__flag-img'],
    attributes: [
      ['src', '../../assets/images/flag.svg'],
      ['alt', 'flag image'],
      ['flagID', `${id}`],
    ],
  });

  createMyElement(trackLineWrapper.element, {
    type: 'hr',
    className: ['dotted-line'],
  });
}

async function createTrack(parentElement: HTMLElement, page = 1): Promise<void> {
  const trackMainWrapper = document.querySelector('.track-main__wrapper');
  if (trackMainWrapper) trackMainWrapper.innerHTML = '';
  // page count
  const cars = await getCars() as AllCars;
  const totalPages = Math.ceil(Number(cars.count) / 7) || 1;
  const currentPageNumber = localStorage.getItem('current-page-number');
  createMyElement(parentElement, {
    type: 'p',
    className: ['main__page-counter'],
    innerText: `${pageVar}${currentPageNumber} from ${totalPages}`,
  });

  // track
  const trackWrapper = createMyElement(parentElement, {
    type: 'div',
    className: ['main__page-track-wrapper'],
  });

  const mainActionsButtons = createMyElement(trackWrapper.element, {
    type: 'div',
    className: ['main__track', 'track'],
  });

  const getAllCars = await getCars(7, page) as AllCars;
  for (let i = 0; i < getAllCars.cars.length; i += 1) {
    const carId = getAllCars.cars[i].id;
    const cardColor = getAllCars.cars[i].color;
    if (carId) {
      createTrackLine(mainActionsButtons.element, carId, cardColor);
    }
  }

  // page pagination buttons
  const mainPagination = createMyElement(parentElement, {
    type: 'div',
    className: ['main__pagination'],
  });

  prevPageButton = createMyElement(mainPagination.element, {
    type: 'button',
    className: ['block-button', 'prev-button'],
    innerText: prevPageVar.toUpperCase(),
  }).element;
  prevPageButton.addEventListener('click', paginationListeners);
  if (currentPageNumber === '1') {
    prevPageButton.classList.add('inactive');
    prevPageButton.setAttribute('disabled', '');
  } else {
    prevPageButton.classList.remove('inactive');
    prevPageButton.removeAttribute('disabled');
  }

  nextPageButton = createMyElement(mainPagination.element, {
    type: 'button',
    className: ['block-button', 'next-button'],
    innerText: nextPageVar.toUpperCase(),
  }).element;
  nextPageButton.addEventListener('click', paginationListeners);
  if (currentPageNumber === totalPages.toString()) {
    nextPageButton.classList.add('inactive');
    nextPageButton.setAttribute('disabled', '');
  } else {
    nextPageButton.classList.remove('inactive');
    nextPageButton.removeAttribute('disabled');
  }
}

export {
  createTrack,
  createTrackLine,
  createCarImage,
  stopAnimation,
  startDrive,
  stopDrive,
  updateTrack,
  trackButtons,
  carsColors,
};
