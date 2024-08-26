import React from 'react'




const EmpCard = ({emp}) => {

  

  return (
    <div className="emp-card">
      <h1>Employee</h1>
      <hr/>
      <h2 className='emp-name'>Name: <span className='emp-name-span'>{emp.name}</span></h2>
      <h2 className='emp-id'>Id: <span className='emp-id-span'>{emp.id}</span></h2>
      <h2 className='emp-salary'>Salary: <span className='emp-salary-span'>{emp.salary}</span></h2>


    </div>
  )
}

export default EmpCard