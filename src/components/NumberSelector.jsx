import React, { useState } from 'react';

const NumberSelector = ({ setError, error, selectedNumber, setSelectedNumber }) => {
    const arrNumber = [1, 2, 3, 4, 5, 6];

    const NumberSelectorHandler = (value) => {
        handleNumberClick(value);
        setError("")
    }

    const myStyle = (value) => {
        return {
            backgroundColor: selectedNumber === value ? "black" : "white",
            color: selectedNumber === value ? "white" : "black"
        };
    };

    const handleNumberClick = (value) => {
        if (selectedNumber === value) {
            setSelectedNumber(null);
        } else {
            setSelectedNumber(value);
        }
    };

    return (

        <div className='flex flex-col sm:items-end items-center'>
            <p className='text-red-600'>{error}</p>
            <div className='sm:flex gap-[24px]'>
                {arrNumber.map((value, i) => (
                    <div
                        key={i}
                        onClick={() => NumberSelectorHandler(value)}
                        className=' h-16 w-16 text-2xl font-semibold cursor-pointer border-black border-2 grid place-items-center'
                        style={myStyle(value)}>  {value} </div>
                ))}
            </div>
            <p className='text-2xl font-semibold pt-3'>Select Number</p>
        </div>

    );
};

export default NumberSelector;
