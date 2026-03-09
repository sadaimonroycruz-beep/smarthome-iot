import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip
);

export default function SensorChart() {

  const data = {
    labels: ["12:00","12:10","12:20","12:30","12:40"],

    datasets: [
      {
        label: "Gas Level",
        data: [10,15,20,25,30],
        borderColor: "red",
        fill: false
      },
      {
        label: "Temperature °C",
        data: [20,21,22,23,24],
        borderColor: "blue",
        fill: false
      }
    ]
  };

  return <Line data={data} />;
}