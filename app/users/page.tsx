'use client'
import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import LineCharts from './components/LineChart';
import PieChart from './components/PieChart';
import Bookings from './components/Bookings';
import { ProfitData } from './ProfitData';

interface DataItem {
  day: string;
  userProfits: number;
}

const Dashboard = () => {
  const [userData, setUserData] = useState({
    labels: 'Sunday, Monday,Tuesday, Wednesday, Thursday, Friday, Saturday',
    datasets: [{
      label: "Profits Gained",
      data: [ProfitData.map((data) => data.userProfits)],
    }],
  });

  return (
    <Container>
      <Bookings />
      <h1>Data Visualization</h1>
      <Row>
        <Col md={6}>
          <LineCharts chartData={userData} />
        </Col>
        {/* <Col md={6}>
          <PieChart data={daysOfWeekData} />
        </Col> */}
      </Row>
    </Container>
  );
};

export default Dashboard;
