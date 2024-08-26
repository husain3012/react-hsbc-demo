import React from 'react'

const EmpAddForm = ({addEmp}) => {
    const [empName, setEmpName] = React.useState('')
    const [empSalary, setEmpSalary] = React.useState('')
  return (
    <form
    className='emp-form'
    onSubmit={(e) => {
        e.preventDefault()
        addEmp(empName, empSalary)
        setEmpName('')
        setEmpSalary('')
    }}
     >
     
         <label className='input-label'>
             Name:
             <input
             type="text"
             value={empName}
             onChange={(e) => setEmpName(e.target.value)}
                placeholder='Enter Employee Name'
                required
             />
         </label>
         <label className='input-label'>
             Salary:
             <input
             type="number"
             value={empSalary}
             onChange={(e) => setEmpSalary(e.target.value)}
             placeholder='Enter Employee Salary'
             required
             />
         </label>
         <button
            className='submit-btn'
                type='submit'   
         >
             Add
         </button>
     </form>
  )
}

export default EmpAddForm