import React, { useState } from 'react';
import { User, Calendar, Clock, FileText, Stethoscope } from 'lucide-react';

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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 p-4">
      <div className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-2xl w-full max-w-lg">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">Book an Appointment</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="flex items-center gap-3 border-b-2 pb-2">
            <User className="text-blue-500" />
            <input
              type="text"
              name="patientName"
              placeholder="Patient Name"
              value={formData.patientName}
              onChange={handleChange}
              required
              className="w-full outline-none bg-transparent placeholder-gray-500"
            />
          </div>
          <div className="flex items-center gap-3 border-b-2 pb-2">
            <Stethoscope className="text-blue-500" />
            <input
              type="text"
              name="doctor"
              placeholder="Doctor Name"
              value={formData.doctor}
              onChange={handleChange}
              required
              className="w-full outline-none bg-transparent placeholder-gray-500"
            />
          </div>
          <div className="flex items-center gap-3 border-b-2 pb-2">
            <Calendar className="text-blue-500" />
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="w-full outline-none bg-transparent text-gray-700"
            />
          </div>
          <div className="flex items-center gap-3 border-b-2 pb-2">
            <Clock className="text-blue-500" />
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
              className="w-full outline-none bg-transparent text-gray-700"
            />
          </div>
          <div className="flex items-start gap-3 border-b-2 pb-2">
            <FileText className="mt-2 text-blue-500" />
            <textarea
              name="reason"
              placeholder="Reason for Appointment"
              value={formData.reason}
              onChange={handleChange}
              required
              className="w-full outline-none bg-transparent placeholder-gray-500 resize-none"
              rows="3"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold hover:scale-105 transform transition-all duration-300 shadow-md"
          >
            Book Appointment
          </button>
        </form>
      </div>
    </div>
  );
};

export default Appointment;
