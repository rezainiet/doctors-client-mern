import React, { useState } from 'react';
import Footer from '../Shared/Footer';
import AppointmentHero from './AppointmentHero';
import AvailableAppointments from './AvailableAppointments';

const Appointment = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div>
            <AppointmentHero date={date} setDate={setDate}></AppointmentHero>
            <AvailableAppointments date={date}></AvailableAppointments>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;