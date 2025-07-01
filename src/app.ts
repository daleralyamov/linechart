import Chart from "./components/Chart.js";
import data from './data.js';

Chart(document.querySelector("#chart") as HTMLCanvasElement, data);
