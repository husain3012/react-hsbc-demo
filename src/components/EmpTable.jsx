import React from 'react'

const EmpTable = ({empList, handleDelete}) => {
  return (
    <div
  
    className='emp-table-container'
    >
    {
        empList.length === 0 ? <p className='no-emp'>No Employees to display</p>:    <table className='emp-table'>
            <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Salary</th>
                <th>Delete</th>
            </tr>
            </thead>
            <tbody>
            {empList.map((emp) => (
                <tr key={emp.id}>
                <td>{emp.id}</td>
                <td>{emp.name}</td>
                <td>{emp.salary}</td>
                <td>
                    <button onClick={()=>handleDelete(emp.id)} className='delete-btn'>Delete</button>
                </td>
                </tr>
            ))}
            </tbody>
        </table>

    }
    
    </div>
  )
}

export default EmpTable