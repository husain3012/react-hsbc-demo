import React from 'react'

const EmpUpdateForm = ({updateEmpDetails}) => {
    const [empName, setEmpName] = React.useState('')

    const [empId, setEmpId] = React.useState('')
    const [empSalary, setEmpSalary] = React.useState('')

  return (
    <form
   className='emp-form'
   onSubmit={(e) => {
         e.preventDefault()
         updateEmpDetails(empId, empName, empSalary)
         setEmpId('')
         setEmpName('')
         setEmpSalary('')
   }
    }
    >
    
      <label className='input-label'>
            ID:
            <input
            type="number"
            value={empId}
            onChange={(e) => setEmpId(e.target.value)}
            required
            placeholder='Enter Employee ID'
            />
        </label>
        <label className='input-label'>
            Name:
            <input
            type="text"
            value={empName}
            onChange={(e) => setEmpName(e.target.value)}
            placeholder='Leave empty to keep unchanged'
            />
        </label>
        <label className='input-label'>
            Salary:
            <input
            type="number"
            value={empSalary}
            placeholder='Leave empty to keep unchanged'
            onChange={(e) => setEmpSalary(e.target.value)}
            />
        </label>
        <button
        className='submit-btn'
            type='submit'
        >
            Update
        </button>
    </form>
  )
}

export default EmpUpdateForm