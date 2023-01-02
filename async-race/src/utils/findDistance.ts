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

export default findDistance;
