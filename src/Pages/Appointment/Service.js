import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl text-center">
            <div class="card-body text-center">
                <h2 class="text-xl font-bold uppercase text-secondary text-center">{name}</h2>
                <p>
                    {
                        slots.length > 0
                            ? <span>{slots[0]}</span>
                            : <span className='text-red-500'>Try another day</span>
                    }
                </p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} availabe</p>
                <div class="card-actions justify-center">
                    <label for="booking-modal"
                        disabled={slots.length === 0}
                        onClick={() => setTreatment(service)}
                        class="btn btn-secondary text-white uppercase">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default Service;