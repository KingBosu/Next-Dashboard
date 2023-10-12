'use client'
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import LineCharts from './components/LineChart';
import PieChart from './components/PieChart';
import Bookings from './components/Bookings';
import { ProfitData } from './ProfitData';

const Dashboard = () => {
  const userData = {
    labels: ProfitData.map(data => data.day),
    datasets: [{
      label: "Profits Gained",
      data: ProfitData.map(data => data.userProfits),
    }],
  };

  return (
    <Container>
      <Bookings />
      <h1>Data Visualization</h1>
      <Row>
        <Col md={6} className="d-flex justify-content-center">
          <LineCharts chartData={userData} />
        </Col>
        <Col md={6} className="d-flex justify-content-center">
          <PieChart data={userData} />
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
