import React from 'react'
import { Line } from 'react-chartjs-2';



const LineCharts = ({data}) => {
  return (
   <div>
    <h2> Line Chart: Profit per day</h2>
    <Line data={data} />
   </div>
  );
};

export default LineCharts