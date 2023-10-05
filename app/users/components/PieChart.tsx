import React from 'react'
import { Pie } from 'react-chartjs-2'




const PieChart = ({ data }) => {
  return (
    <div>
      <h2>Profits</h2>
      <Pie data={data} />
    </div>
  )
}

export default PieChart
