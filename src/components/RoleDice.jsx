import React from 'react';

const RoleDice = ({ roleDice, currentDice }) => {

  const getImageSource = () => {
    return `src/assets/dice_${currentDice}.png`;
  };

  return (
    <div className="mt-10 flex flex-col items-center">
      <div className="cursor-pointer" onClick={roleDice}>
        <img
          src={getImageSource()}
          alt={`dice ${currentDice}`}
          className='h-36 w-36'
        />
      </div>
      <p className="text-2xl">Click on Dice to roll</p>
    </div>
  );
};

export default RoleDice;
