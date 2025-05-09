import React, { useState, useEffect } from 'react';

const Patients = () => {
  const [patients, setPatients] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    contact: ''
  });

  const fetchPatients = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/patients');
      const data = await res.json();
      setPatients(data);
    } catch (error) {
      console.error('Error fetching patients:', error);
    }
  };

  useEffect(() => {
    fetchPatients();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch('http://localhost:5000/api/patients', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      setFormData({ name: '', age: '', gender: '', contact: '' });
      fetchPatients();
    } catch (error) {
      console.error('Error adding patient:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/patients/${id}`, {
        method: 'DELETE'
      });
      fetchPatients();
    } catch (error) {
      console.error('Error deleting patient:', error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-2xl">
      <h2 className="text-2xl font-bold mb-6 text-center">Patients</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4 mb-10">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md"
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md"
        />
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md"
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <input
          type="text"
          name="contact"
          placeholder="Contact Number"
          value={formData.contact}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md"
        />
        <button type="submit" className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700">
          Add Patient
        </button>
      </form>

      <div>
        <h3 className="text-xl font-semibold mb-4">Patient List</h3>
        {patients.length === 0 ? (
          <p>No patients found.</p>
        ) : (
          <ul className="space-y-2">
            {patients.map((patient) => (
              <li key={patient._id} className="flex justify-between items-center border-b py-2">
                <div>
                  <strong>{patient.name}</strong> ({patient.age}, {patient.gender}) - {patient.contact}
                </div>
                <button
                  onClick={() => handleDelete(patient._id)}
                  className="text-red-500 hover:underline"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Patients;
