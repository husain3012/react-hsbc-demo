import React from 'react'

const CarCard = ({car}) => {
  return (
    <div className="car-card">
      <h1>Car 🚘 </h1>
      <hr/>
      <h2 className='car-make'>Brand: <span className='car-make-span'>{car.brand}</span></h2>
      <h2 className='car-model'>Model: <span className='car-model-span'>{car.model}</span></h2>
      <h2 className='car-year'>Year: <span className='car-year-span'>{car.year}</span></h2>
    </div>
  )
}

export default CarCard