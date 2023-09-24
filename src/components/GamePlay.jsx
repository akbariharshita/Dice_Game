import React, { useState } from 'react';
import TotalScore from './TotalScore';
import NumberSelector from './NumberSelector';
import RoleDice from './RoleDice';
import Rules from './Rules';

const GamePlay = () => {

  const [score, setScore] = useState(0)
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("")
  const [showRules, setShowRules] = useState(false)

  const roleDice = () => {
    if (!selectedNumber) {
      setError("You have not selected any number")
      return;
    }



    const randomNumber = Math.floor(Math.random() * 6) + 1;
    setCurrentDice(randomNumber);

    if (selectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber)
    } else {
      setScore((prev) => prev - 1);
    }

    setSelectedNumber(undefined);
  };

  const resetScore = () => {
    setScore(0);
  }

  return (
    <main className='relative'>
      <div className='md:flex justify-around items-center pt-[30px]'>
        <TotalScore score={score} />
        <NumberSelector selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} error={error} setError={setError} />
      </div>
      <RoleDice currentDice={currentDice} roleDice={roleDice} />
      <div className='flex flex-col justify-center gap-3 items-center my-5 '>
        <button onClick={resetScore}
          className='p-1 bg-white rounded-md min-w-[200px] text-xl hover:ease-in hover:duration-300 hover:bg-black hover:text-white border-2 border-black text-black'>Reset</button>
        <button
          onClick={() => setShowRules((prev) => !prev)}
          className='p-1 mb-10 bg-black rounded-md min-w-[200px] text-xl hover:ease-in hover:duration-300 hover:bg-white hover:text-black hover:border-2 hover:border-black  text-white'>
          {showRules ? "Hide" : "Show"} Rules</button>
      </div>
      {showRules && <Rules />}

      <div className="bg-cover bg-[url('/dice.png')] opacity-10 top-10 left-0 w-full h-full absolute z-[-1]"></div>
    </main>
  )
}

export default GamePlay
