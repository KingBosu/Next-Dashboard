'use client';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import LineCharts from './components/LineChart';
import PieChart from './components/piechart';

const profitData = {
    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    datasets: [
      {
        label: 'Profit per day',
        data: [100, 200, 150, 300, 250, 400, 350], // Replace with your profit data
        fill: false,
        borderColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };
  
  const daysOfWeekData = {
    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    datasets: [
      {
        data: [10, 15, 20, 25, 30, 35, 40], // Replace with your data
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
          'rgba(255, 99, 132, 0.6)',
        ],
      },
    ],
  };
const Dashboard = () => {
    
    return (
        <Container>
          <h1>Data Visualization</h1>
          <Row>
            <Col md={6}>
              <LineCharts data={profitData} />
            </Col>
            <Col md={6}>
              <PieChart data={daysOfWeekData} />
            </Col>
          </Row>
        </Container>
    )
};

export default Dashboard