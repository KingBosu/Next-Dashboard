'use server'
import { useState } from 'react';

const AddAppointment = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    serviceType: '',
    date: '',
    priceQuoted: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send form data to your server for processing (e.g., API request)
    console.log('Form data:', formData);
  };

  return (
    <div>
      <h1>Add Appointment</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Service Type:</label>
          <input
            type="text"
            name="serviceType"
            value={formData.serviceType}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Date of Appointment:</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Price Quoted</label>
          <input
          type="number"
          name="Price Quoted"
          value={formData.priceQuoted}
          required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddAppointment;

export async function getServerSideProps() {
    // Fetch initial data if needed (e.g., service types, etc.)
  
    // Example data for prepopulating form fields
    const initialData = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'johndoe@example.com',
      serviceType: 'Haircut',
      date: '2023-12-31',
    };
  
    return {
      props: {
        initialData,
      },
    };
  }
  