/* eslint-disable @typescript-eslint/no-use-before-define */
import { Car, getCars, getOneCar } from '../../api/api';
import generateRandomColor from '../../utils/generate-random-color';
import createMyElement from '../../utils/HTML_Elements/createMyElement';
import {
  removeVar,
  selectVar,
  startVar,
  stopVar,
} from '../../utils/string-variables';

const defaultLinesCount = 7;
async function createTrack(parentElement: HTMLElement, page = 1): Promise<void> {
  const mainActionsButtons = createMyElement(parentElement, {
    type: 'div',
    className: ['main__track', 'track'],
  });

  const getAllCars = await getCars();
  for (let i = 0; i < defaultLinesCount; i += 1) {
    const carIndex = page * defaultLinesCount - defaultLinesCount + i;
    const { id } = getAllCars.cars[carIndex];
    createTrackLine(mainActionsButtons.element, id, generateRandomColor());
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
  createMyElement(trackLineCarPanel.element, {
    type: 'button',
    className: ['block-button'],
    innerText: selectVar.toUpperCase(),
  });
  createMyElement(trackLineCarPanel.element, {
    type: 'button',
    className: ['block-button'],
    innerText: removeVar.toUpperCase(),
  });
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
  createMyElement(trackLineCarManipulate.element, {
    type: 'button',
    className: ['block-button'],
    innerText: startVar.toUpperCase(),
  });
  createMyElement(trackLineCarManipulate.element, {
    type: 'button',
    className: ['block-button'],
    innerText: stopVar.toUpperCase(),
  });
  const carImg = createMyElement(trackLineCarManipulate.element, {
    type: 'div',
    className: ['car-img'],
  });
  const svgImage = createCarImage(randomColor);
  carImg.element.append(svgImage);

  const trackLineFlag = createMyElement(trackLineCarDrive.element, {
    type: 'div',
    className: ['track-line__flag'],
  });
  createMyElement(trackLineFlag.element, {
    type: 'img',
    className: ['track-line__flag-img'],
    attributes: [['src', '../../assets/images/flag.svg'], ['alt', 'flag image']],
  });

  createMyElement(trackLineWrapper.element, {
    type: 'hr',
    className: ['dotted-line'],
  });
}

function createCarImage(randomColor: string): SVGSVGElement {
  const svgImage = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  const dWrapper = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  const svgPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  svgPath.setAttribute('d', 'M640 320L640 368C 640 385.7 625.7 400 608 400L608 400L574.7 400C 567.1 445.4 527.6 480 480 480C 432.4 480 392.9 445.4 385.3 400L385.3 400L254.7 400C 247.1 445.4 207.6 480 160 480C 112.4 480 72.94 445.4 65.33 400L65.33 400L32 400C 14.33 400 0 385.7 0 368L0 368L0 256C 0 228.9 16.81 205.8 40.56 196.4L40.56 196.4L82.2 92.35C 96.78 55.9 132.1 32 171.3 32L171.3 32L353.2 32C 382.4 32 409.1 45.26 428.2 68.03L428.2 68.03L528.2 193C 591.2 200.1 640 254.8 640 319.1L640 319.1L640 320zM171.3 96C 158.2 96 146.5 103.1 141.6 116.1L141.6 116.1L111.3 192L224 192L224 96L171.3 96zM272 192L445.4 192L378.2 108C 372.2 100.4 362.1 96 353.2 96L353.2 96L272 96L272 192zM525.3 400C 527 394.1 528 389.6 528 384C 528 357.5 506.5 336 480 336C 453.5 336 432 357.5 432 384C 432 389.6 432.1 394.1 434.7 400C 441.3 418.6 459.1 432 480 432C 500.9 432 518.7 418.6 525.3 400zM205.3 400C 207 394.1 208 389.6 208 384C 208 357.5 186.5 336 160 336C 133.5 336 112 357.5 112 384C 112 389.6 112.1 394.1 114.7 400C 121.3 418.6 139.1 432 160 432C 180.9 432 198.7 418.6 205.3 400z');
  svgPath.setAttribute('fill', randomColor);
  svgImage.appendChild(svgPath);
  svgImage.appendChild(dWrapper);
  return svgImage;
}

export default createTrack;
