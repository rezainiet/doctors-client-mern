import React from 'react';

const Service = ({ service }) => {
    const { name, slots } = service;
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl text-center">
            <div class="card-body text-center">
                <h2 class="text-xl font-bold text-secondary text-center">{name}</h2>
                <p>
                    {
                        slots.length > 0
                            ? <span>{slots[0]}</span>
                            : <span className='text-red-500'>Try Another Day</span>
                    }
                </p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} availabe</p>
                <div class="card-actions justify-center">
                    <button disabled={slots.length === 0} className="btn btn-secondary text-white uppercase">Book Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default Service;