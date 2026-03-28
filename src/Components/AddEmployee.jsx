import React, { useState } from 'react'
import Header from '../Designs/Header'
// import Register from './Register'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import APICall from './APICall'

const AddEmployee = () => {
  const callApi=APICall()
  const[employee_name,setemployeename]=useState('')
  const[employee_age,setemployeeage]=useState('')
  const[employee_designation,setemployeedesignation]=useState('')
  const[employee_department,setemployeedepartment]=useState('')
  const[employee_salary,setemployeesalary]=useState('')

  const getvalue = (e) => {
    const { name, value } = e.target
    switch (name) {
      case 'employee_name':
        setemployeename(value)
        break;
      case 'employee_age':
        setemployeeage(value)
        break;
      case 'employee_designation':
        setemployeedesignation(value)
        break;
      case 'employee_department':
        setemployeedepartment(value)
        break;
      case 'employee_salary':
        setemployeesalary(value)
        break;
    }
  }




  const nav = useNavigate()

  const onSubmitButtonPress = async() => {
    const data={
      employee_name:employee_name,
      employee_age:employee_age,    
      employee_designation:employee_designation,
      employee_department:employee_department,
      employee_salary:employee_salary
    }
    await callApi('/Employee','post',0,data)
    .then(()=>{
      Swal.fire({
        title:"congrats!!user",
        text:"Added Successfully",
        icon:'success'
        
      })
      nav('/view')
    })
    .catch((e)=>{
      console.log(e)
    })
  }
  const onBackButtonPress = () => {
    nav('/view')
  }
  return (
    <>
      <Header />
      <div className='add_container'>
        <div className='login_container'>
          <div className='signin_text'>Register Here!!!</div>
          <div className='form_fields'>
            <input type='text' placeholder='Enter the Employee Name' name='employee_name' onChange={getvalue}/>
          </div>
          <div className='form_fields'>
            <input type='number' placeholder='Enter the Employee Age' name='employee_age' onChange={getvalue}/>
          </div>
          <div className='form_fields'>
            <input type='text' placeholder='Enter the Employee Designation' name='employee_designation' onChange={getvalue}/>
          </div>
          <div className='form_fields'>
            <input type='text' placeholder='Enter the Employee Department' name='employee_department' onChange={getvalue}/>
          </div>
          <div className='form_fields'>
            <input type='number' placeholder='Enter the Employee Salary' name='employee_salary' onChange={getvalue}/>
          </div>
          <div className='form_button'>
            <button className='submit_button' onClick={onSubmitButtonPress}>Submit</button>
            <button className='reset_button'>Reset</button>
            <button className='back_button' onClick={onBackButtonPress}>Go back
            </button>
          </div>

        </div>
      </div>
    </>
  )
}

export default AddEmployee