import React from 'react'

const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const profitData = {};

daysOfWeek.forEach((day) => {
  profitData[day] = Math.floor(Math.random() * 500); // Generate random profit values (adjust range as needed)
});

  export default profitData

