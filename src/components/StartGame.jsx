import React from 'react';
import Dices from '../img/dices.png';

const StartGame = ({ toggle }) => {
  return (
    <div className='md:flex mx-auto max-w-[1180px] h-[100vh] items-center'>
      <div><img src={Dices} alt="A pair of dice" /></div>
      <div>
        <h1 className='text-7xl mb-10 text-center'>DICE GAME</h1>
        <div className='text-center'>
          <button onClick={toggle} className='p-2 bg-black rounded-md min-w-[200px] text-xl hover:ease-in hover:duration-500 hover:bg-white hover:text-black hover:border-2 hover:border-black  text-white'>Play Now</button>
        </div>

      </div>
    </div>
  );
}

export default StartGame;
