import React, { useState } from 'react';
import {Table} from 'react-bootstrap'


type Appointment = {
    customerName: string;
    serviceType: string;
    amountPaid: number;
    dateScheduled: string;
  };

const Bookings = () => {
  // Initialize the 'appointments' state inside the component
  const [appointments, setAppointments] = useState<Appointment[]>([
    {
        customerName: 'John Doe',
        serviceType: 'Haircut',
        amountPaid: 40.0,
        dateScheduled: '2023-10-16',
      },
      {
        customerName: 'Jane Smith',
        serviceType: 'Massage',
        amountPaid: 60.0,
        dateScheduled: '2023-10-18',
      },
      {
        customerName: 'Phillip J Fry',
        serviceType: 'Wax',
        amountPaid: 55.55,
        dateScheduled: '10-20-2023'
      }
  ]);

  return (
    <>
      <h2>Current Appointments</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Type of Service</th>
            <th>Amount Paid</th>
            <th>Date Scheduled</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment, index) => (
            <tr key={index}>
              <td>{appointment.customerName}</td>
              <td>{appointment.serviceType}</td>
              <td>${appointment.amountPaid.toFixed(2)}</td>
              <td>{appointment.dateScheduled}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default Bookings;
