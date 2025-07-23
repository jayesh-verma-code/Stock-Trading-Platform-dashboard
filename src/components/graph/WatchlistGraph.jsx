import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  ArcElement,
  Title,
  Tooltip,
  Legend,
);

const generateSoftBrightColors = (count) => {
  const colors = [];
  for (let i = 0; i < count; i++) {
    const hue = Math.floor(Math.random() * 360);
    colors.push(`hsl(${hue}, 70%, 75%)`); // soft, bright tones
  }
  return colors;
};

const WatchlistGraph = ({ allHoldings }) => {
  const options = {};

  const labels = allHoldings.map((subArray) => subArray["name"]);
  const prices = allHoldings.map((stock) => stock.price);
  const softColors = generateSoftBrightColors(allHoldings.length);

  const WatchlistGraphData = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: prices,
        backgroundColor: softColors,
        borderColor: 'white',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className='p-[2rem] mt-[1rem] w-full px-[5rem]'>
      <Pie options={options} data={WatchlistGraphData} />
    </div>
  );
};

export default WatchlistGraph;
