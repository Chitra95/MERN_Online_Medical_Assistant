import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MyAppointment.css'; // Import CSS file for styling

const MyAppointment = () => {
    const [appointments, setAppointments] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAppointments = async () => {
            try {
                const response = await axios.get('http://localhost:4000/api/v1/appointment/status', {
                    withCredentials: true, // Ensure cookies are sent for authentication
                });
                setAppointments(response.data.appointments);
                setLoading(false);
            } catch (error) {
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    setError(error.response.data.message);
                } else if (error.request) {
                    // The request was made but no response was received
                    setError('No response received from server.');
                } else {
                    // Something happened in setting up the request that triggered an Error
                    setError('Error fetching appointments: ' + error.message);
                }
                setLoading(false);
            }
        };

        fetchAppointments();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="appointments-container">
            <h2>Your Appointments </h2>
            <table className="appointments-table">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        {/* <th>Email</th> */}
                        {/* <th>Phone</th> */}
                        {/* <th>NIC</th> */}
                        {/* <th>DOB</th> */}
                        <th>Gender</th>
                        <th>Appointment Date</th>
                        <th>Department</th>
                        <th>Doctor</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {appointments.map((appointment) => (
                        <tr key={appointment._id}>
                            <td>{appointment.firstName}</td>
                            <td>{appointment.lastName}</td>
                            {/* <td>{appointment.email}</td>
                            <td>{appointment.phone}</td>
                            <td>{appointment.nic}</td>
                            <td>{new Date(appointment.dob).toLocaleDateString()}</td> */}
                            <td>{appointment.gender}</td>
                            <td>{new Date(appointment.appointment_date).toLocaleDateString()}</td>
                            <td>{appointment.department}</td>
                            <td>{`${appointment.doctor.firstName} ${appointment.doctor.lastName}`}</td>
                            <td>{appointment.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MyAppointment;
