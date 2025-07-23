import React from 'react';
import {Bar} from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
)

const HoldingGraph = ({allHolding}) => {
    const options = {};
    const labels = allHolding.map((subArray) => subArray["name"]);
    const HoldingGraphData = {
    labels,
    datasets: [
        {
            label: "Stock Price",
            data: allHolding.map((stock) => stock.price),
            borderColor: "red",
            backgroundColor: "#FF000033",
            borderWidth: 1,
        },
    ]
}
  return (
    <div className="p-[2rem] mt-[5rem] flex justify-center items-center">
        <Bar options={options} data={HoldingGraphData} />
    </div>
  )
}

export default HoldingGraph