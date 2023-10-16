import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { Chart, registerables, CategoryScale } from "chart.js";
Chart.register(...registerables);

Chart.register(CategoryScale);

interface LineData {
  day: string;
  userProfits: number;
}

const LineCharts = ({ chartData }) => {
  return (
    <div>
      <h2>Profit per day</h2>
      <div style={{ width: 700 }}>
        <Line data={chartData} />
      </div>
    </div>
  );
};

export default LineCharts;
