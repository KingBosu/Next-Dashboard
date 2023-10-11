import React from 'react';
import { Line } from 'react-chartjs-2';
import {chart from chart}

const LineCharts = ({ chartData }) => {
 
  return (
    <div>
      <h2>Profit per day</h2>
      <Line data={chartData}/>
    </div>
  );
};

export default LineCharts;
