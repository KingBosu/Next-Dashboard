'use client';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import LineCharts from './components/LineChart';
import PieChart from './components/PieChart';
import Bookings from './components/Bookings';
import { useState } from 'react';
import {profitData} from './profitData'

const Dashboard = () => {

    const [profitData, setProfitData] = useState({
      labels: ProfitData.map((data) => data.days),
      datasets: [{
        label: "Profits Gained",
        data: ProfitData.map((data) => data.userProfits)
      }]
    })
    
    return (
        <Container>
          <Bookings/>
          <h1>Data Visualization</h1>
          <Row>
            <Col md={6}>
              <LineCharts data={userData} />
            </Col>
            {/* <Col md={6}>
              <PieChart data={daysOfWeekData} />
            </Col> */}
          </Row>
        </Container>
    )
};

export default Dashboard