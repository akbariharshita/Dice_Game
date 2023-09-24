import React from 'react'

const TotalScore = ({ score }) => {
    return (
        <div className='text-center sm:max-w-[200px]'>
            <h1 className='text-8xl'>{score}</h1>
            <p className='text-2xl font-semibold'>Total Score</p>
        </div>
    )
}

export default TotalScore
