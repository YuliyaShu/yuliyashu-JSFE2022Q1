import {
  startEngine, CarEngine, driveMode, stopEngine,
} from '../../api/api';
import findDistance from '../findDistance';

const state = {
  id: 0,
};

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

async function startDrive(carID: string) {
  const velocityDistance = (await startEngine(+carID)) as CarEngine;
  const timeDrive = velocityDistance.distance / velocityDistance.velocity;
  const distance = findDistance(carID);
  carAnimation(+carID, distance, timeDrive);
  return {
    status: driveMode(+carID),
    time: timeDrive,
  };
}

async function stopDrive(carID: string) {
  await stopEngine(+carID);
  const car = document.querySelector(`[carIDSVG="${carID}"]`);
  if (car instanceof SVGElement) {
    car.style.transform = 'translateX(0px) scale(0.06)';
  }
  window.cancelAnimationFrame(state.id);
}

async function stopAnimation(carID: number) {
  await stopEngine(carID);
  const car = document.querySelector(`[carIDSVG="${carID}"]`);
  const stateID = Number(car?.getAttribute('animateID'));
  window.cancelAnimationFrame(stateID);
}

export { startDrive, stopDrive, stopAnimation };
