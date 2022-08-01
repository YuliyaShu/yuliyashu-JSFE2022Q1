import { getCars, getOneCar, startEngine } from './api/api';
import createGaragePage from './pages/garagePage';
import './style.css';

createGaragePage();
getCars(1, 3);
getOneCar(2);
startEngine(12);

export {};
