import React from 'react'

const Rules = () => {
  return (
    <div className='bg-red-100 p-5  rounded max-w-[700px] mx-auto mb-10'>
      <h2 className='text-2xl font-bold '>How to play dice game</h2>
      <div className='mt-6'>
        <p>Select any number</p>
        <p>Click on dice image</p>
        <p>
          after click on dice if selected number is eqal to dice number you will get same point as dice{" "}
        </p>
        <p>is you get wrong guess then 1 point will be dedcuted</p>
      </div>
    </div>
  )
}

export default Rules
