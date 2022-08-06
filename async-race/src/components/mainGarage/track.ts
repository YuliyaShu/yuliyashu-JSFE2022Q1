/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-use-before-define */
import {
  Car, CarEngine, deleteCar, driveMode, getCars, getOneCar, startEngine, stopEngine, SuccessDrive,
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

const startPageNumber = 1;
const trackButtons: HTMLElement[] = [];
localStorage.setItem('current-page-number', startPageNumber.toString());

let prevPageButton: HTMLElement;
let nextPageButton: HTMLElement;
let stopButton: HTMLElement;

async function createTrack(parentElement: HTMLElement, page = 1): Promise<void> {
  const trackMainWrapper = document.querySelector('.track-main__wrapper');
  if (trackMainWrapper) trackMainWrapper.innerHTML = '';
  // page count
  const totalPages = Math.ceil(Number((await getCars()).count) / 7) || 1;
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

  const getAllCars = await getCars(7, page);
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

async function updateTrack(page = 1) {
  const trackMainWrapper = document.querySelector('.track-main__wrapper');
  if (trackMainWrapper) trackMainWrapper.innerHTML = '';
  if (trackMainWrapper instanceof HTMLElement) {
    await createTrack(trackMainWrapper, page);
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

function createCarImage(randomColor: string, id: number): SVGSVGElement {
  const svgImage = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  const dWrapper = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  const svgPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  svgPath.setAttribute('d', 'M640 320L640 368C 640 385.7 625.7 400 608 400L608 400L574.7 400C 567.1 445.4 527.6 480 480 480C 432.4 480 392.9 445.4 385.3 400L385.3 400L254.7 400C 247.1 445.4 207.6 480 160 480C 112.4 480 72.94 445.4 65.33 400L65.33 400L32 400C 14.33 400 0 385.7 0 368L0 368L0 256C 0 228.9 16.81 205.8 40.56 196.4L40.56 196.4L82.2 92.35C 96.78 55.9 132.1 32 171.3 32L171.3 32L353.2 32C 382.4 32 409.1 45.26 428.2 68.03L428.2 68.03L528.2 193C 591.2 200.1 640 254.8 640 319.1L640 319.1L640 320zM171.3 96C 158.2 96 146.5 103.1 141.6 116.1L141.6 116.1L111.3 192L224 192L224 96L171.3 96zM272 192L445.4 192L378.2 108C 372.2 100.4 362.1 96 353.2 96L353.2 96L272 96L272 192zM525.3 400C 527 394.1 528 389.6 528 384C 528 357.5 506.5 336 480 336C 453.5 336 432 357.5 432 384C 432 389.6 432.1 394.1 434.7 400C 441.3 418.6 459.1 432 480 432C 500.9 432 518.7 418.6 525.3 400zM205.3 400C 207 394.1 208 389.6 208 384C 208 357.5 186.5 336 160 336C 133.5 336 112 357.5 112 384C 112 389.6 112.1 394.1 114.7 400C 121.3 418.6 139.1 432 160 432C 180.9 432 198.7 418.6 205.3 400z');
  svgPath.setAttribute('fill', randomColor);
  svgPath.setAttribute('carIDSVG', `${id}`);
  svgImage.appendChild(svgPath);
  svgImage.appendChild(dWrapper);
  return svgImage;
}

const state = {
  id: 0,
};

async function startDrive(carID: string) {
  const velocityDistance = (await startEngine(+carID)) as CarEngine;
  const timeDrive = velocityDistance.distance / velocityDistance.velocity;
  const distance = findDistance(carID);
  carAnimation(+carID, distance, timeDrive);
  await driveMode(+carID);
}

async function stopDrive(carID: string) {
  await stopEngine(+carID);
  const car = document.querySelector(`[carIDSVG="${carID}"]`);
  if (car instanceof SVGElement) {
    car.style.transform = 'translateX(0px) scale(0.06)';
  }
  window.cancelAnimationFrame(state.id);
}

function carAnimation(carID: number, distance: number, animationTime: number) {
  const car = document.querySelector(`[carIDSVG="${carID}"]`);
  let start: number | undefined;
  function startAnimation(timestamp: number) {
    if (!start) {
      start = timestamp;
    }
    const time = timestamp - start;
    const passed = Math.round(time * (distance / animationTime));
    if (car instanceof SVGElement) {
      car.style.transform = `translateX(${Math.min(passed, distance)}px) scale(0.06)`;
    }
    if (passed < distance) {
      state.id = window.requestAnimationFrame(startAnimation);
      car?.setAttribute('animateID', `${state.id}`);
    }
  }
  state.id = window.requestAnimationFrame(startAnimation);
  return state.id;
}

async function stopAnimation(carID: number) {
  await stopEngine(carID);
  const car = document.querySelector(`[carIDSVG="${carID}"]`);
  const stateID = Number(car?.getAttribute('animateID'));
  window.cancelAnimationFrame(stateID);
}

function findDistance(carID: string) {
  const car = document.querySelector(`[carIDSVG="${carID}"]`);
  const flag = document.querySelector(`[flagID="${carID}"]`);
  let result = 0;
  if (car && flag) {
    const carPoint = car.getBoundingClientRect().left;
    const flagPoint = flag.getBoundingClientRect().left;
    result = flagPoint - carPoint + 40;
  }
  return result;
}

// listeners

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

export {
  createTrack,
  createTrackLine,
  updateTrack,
  stopAnimation,
  startDrive,
  stopDrive,
  trackButtons,
};
