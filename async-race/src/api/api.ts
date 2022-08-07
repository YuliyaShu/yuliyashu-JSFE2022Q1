// eslint-disable-next-line import/no-cycle
import { stopAnimation } from '../components/mainGarage/trackBlock';

const garage = 'http://127.0.0.1:3000/garage';
const engine = 'http://127.0.0.1:3000/engine';
const winners = 'http://127.0.0.1:3000/winners';
const DEFAULT_HEADERS = {
  'Content-Type': 'application/json',
};

export interface Car {
  name: string;
  color: string;
  id: number
}

export interface AllCars {
  cars: Car[];
  count: string | null;
}

async function getCars(limit = 7, page?: number):Promise<AllCars> {
  const response = await fetch(`${garage}?_page=${page}&_limit=${limit}`);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return {
    cars: await response.json(),
    count: response.headers.get('x-total-count'),
  };
}

async function getOneCar(id: number): Promise<Car | unknown> {
  try {
    const response = await fetch(`${garage}/${id}`);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return await response.json();
  } catch (error: unknown) {
    return error;
  }
}

async function createCar(color: string, name: string = 'Tesla Class'): Promise<Car> {
  const response = await fetch(garage, {
    method: 'POST',
    body: JSON.stringify({
      name,
      color,
    }),
    headers: DEFAULT_HEADERS,
  });
  return response.json();
}

async function deleteCar(id: number): Promise<{} | unknown> {
  try {
    const response = await fetch(`${garage}/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return await response.json();
  } catch (error: unknown) {
    return error;
  }
}

async function updateCar(id: number, name: string, color: string): Promise<void | unknown> {
  try {
    const response = await fetch(`${garage}/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        name,
        color,
      }),
      headers: DEFAULT_HEADERS,
    });
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response;
  } catch (error: unknown) {
    return error;
  }
}

interface CarEngine {
  velocity: number,
  distance: number
}

async function startEngine(id: number): Promise<CarEngine | unknown> {
  try {
    const response = await fetch(`${engine}?id=${id}&status=started`, {
      method: 'PATCH',
    });
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return await response.json();
  } catch (error: unknown) {
    // if (error instanceof Error) {

    // }
    return error;
  }
}

async function stopEngine(id: number): Promise<CarEngine | unknown> {
  try {
    const response = await fetch(`${engine}?id=${id}&status=stopped`, {
      method: 'PATCH',
    });
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return await response.json();
  } catch (error: unknown) {
    return error;
  }
}

interface SuccessDrive {
  success: true,
}

async function driveMode(id: number): Promise<SuccessDrive | unknown> {
  try {
    const response = await fetch(`${engine}?id=${id}&status=drive`, {
      method: 'PATCH',
    });
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return await response.json();
  } catch (error: unknown) {
    if (error instanceof Error) {
      if (error.message === 'Internal Server Error') {
        stopAnimation(id);
      }
    }
    return error;
  }
}

interface Winner {
  id: number,
  wins: number,
  time: number
}

interface GetWinners {
  winners: Winner[],
  count: string | null
}

async function getWinners(
  page?: number,
  sort?: 'id' | 'wins' | 'time',
  order?: 'ASC' | 'DESC',
  limit = 10,
): Promise<GetWinners> {
  const response = await fetch(`${winners}?_page=${page}&_sort=${sort}&_order=${order}&_limit=${limit}`);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return {
    winners: await response.json(),
    count: response.headers.get('X-Total-Count'),
  };
}

async function getOneWinner(id: number): Promise<Winner | unknown> {
  try {
    const response = await fetch(`${winners}/${id}`);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return await response.json();
  } catch (error: unknown) {
    return error;
  }
}

async function createWinner(param: Winner): Promise<Winner | unknown> {
  try {
    const response = await fetch(winners, {
      method: 'POST',
      body: JSON.stringify({
        param,
      }),
      headers: DEFAULT_HEADERS,
    });
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return await response.json();
  } catch (error: unknown) {
    return error;
  }
}

async function deleteWinner(id: number): Promise<{} | unknown> {
  try {
    const response = await fetch(`${winners}/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.statusText;
  } catch (error: unknown) {
    return error;
  }
}

async function updateWinner(
  id: number,
  wins: number,
  time: number,
): Promise<Winner | unknown> {
  try {
    const response = await fetch(`${winners}/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        wins,
        time,
      }),
      headers: DEFAULT_HEADERS,
    });
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return await response.json();
  } catch (error: unknown) {
    return error;
  }
}

export {
  getCars,
  getOneCar,
  createCar,
  deleteCar,
  updateCar,
  startEngine,
  stopEngine,
  driveMode,
  getWinners,
  getOneWinner,
  createWinner,
  deleteWinner,
  updateWinner,
  CarEngine,
  SuccessDrive,
};
