import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }}
            className='flex justify-center items-center mt-12'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-100px]' src={doctor} alt="doctorUncle" />
            </div>
            <div className='flex-1 p-5'>
                <h3 className='text-xl text-primary font-bold'>Appointment</h3>
                <h2 className='text-3xl my-3 text-white'>Make an Appointment Today</h2>
                <p className='text-white my-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto earum, debitis minima molestiae illum nesciunt totam dolore, magnam excepturi cumque ipsam est dolores? Neque quod iste debitis, accusantium provident commodi soluta earum atque minima, esse asperiores corrupti officiis? Voluptas, provident?</p>
                <PrimaryButton>Get Started</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointment;