import React, { useState } from 'react';

const Appointment = () => {
  const [formData, setFormData] = useState({
    patientName: '',
    doctor: '',
    date: '',
    time: '',
    reason: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const result = await response.json();
      alert('Appointment booked successfully!');
      setFormData({
        patientName: '',
        doctor: '',
        date: '',
        time: '',
        reason: ''
      });
    } catch (error) {
      console.error('Error booking appointment:', error);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 shadow-lg bg-white mt-10 rounded-2xl">
      <h2 className="text-2xl font-bold mb-6 text-center">Book an Appointment</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="patientName"
          placeholder="Patient Name"
          value={formData.patientName}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md"
        />
        <input
          type="text"
          name="doctor"
          placeholder="Doctor Name"
          value={formData.doctor}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md"
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md"
        />
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md"
        />
        <textarea
          name="reason"
          placeholder="Reason for Appointment"
          value={formData.reason}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md"
        />
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
          Book Appointment
        </button>
      </form>
    </div>
  );
};

export default Appointment;
