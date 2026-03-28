import React, { useEffect, useState } from 'react'
import Header from '../Designs/Header'
import { useNavigate, useParams } from 'react-router-dom'
import APICall from './APICall'
import Swal from 'sweetalert2'

const EditEmployee = () => {
  const callApi=APICall()
  const [employee_name,setEmployeeName]=useState()
  const [employee_age,setEmployeeAge]=useState()
  const [employee_designation,setEmployeeDesignation]=useState()
  const [employee_department,setEmployeeDepartment]=useState()
  const [employee_salary,setEmployeeSalary]=useState()
  const {id}=useParams()

  const getData=async()=>{
    const response = await callApi("/Employee","get",id,null)
    setEmployeeName(response.employee_name)
    setEmployeeAge(response.employee_age)
    setEmployeeDesignation(response.employee_designation)
    setEmployeeDepartment(response.employee_department)
    setEmployeeSalary(response.employee_salary)

  }
  useEffect(()=>{ getData()},[])

  const getValue=(e)=>{
    const {name,value}=e.target
    switch(name){
      case "employee_name":
        setEmployeeName(value)
        break;
      case "employee_age":
        setEmployeeAge(value)
        break;
      case "employee_designation":
        setEmployeeDesignation(value)
        break;
      case "employee_department":
        setEmployeeDepartment(value)
        break;
      case "employee_salary":
        setEmployeeSalary(value)
        break;

    }
  }
  const nav=useNavigate()
  const onSubmitUpdate=async()=>{
    const data={
      employee_name:employee_name,
      employee_age:employee_age,
      employee_designation:employee_designation,
      employee_department:employee_department,
      employee_salary:employee_salary
    }
    try{
    await callApi('/Employee','put',id,data)
    
      Swal.fire({
        title:"congrats!!user",
        text:"Edited Successfully",
        icon:'success'
        
      })
      nav('/view')
    }
    catch(e){
            Swal.fire({
              title:"opps!!user",
              text:"edit is unsuccessfull",
              icon:'error'
              })
      console.log('error',e)
    }
  }
  return (
    <>
      <Header />
      <fieldset className='fieldedit' >
        <legend>Update Employee Details Here !!!!!</legend>
        <div className='editform'>
            <input type="text" value={employee_name} placeholder='enter your name' name="employee_name" onChange={getValue}/>
            <input type='number' value={employee_age} placeholder='enter your age' name="employee_age"onChange={getValue}/>
            <input type="text" value={employee_designation} placeholder='enter your designation' name="employee_designation"onChange={getValue}/>
            <input type="email"  value={employee_department} placeholder='enter your department'name="employee_department" onChange={getValue}/>
            <input type="text"  value={employee_salary} placeholder='enter salary'name="employee_salary"onChange={getValue} />
        </div>
        <div className='edit_field_buttons'>
        <button className='buttonsubmit'onClick={onSubmitUpdate}>Submit</button>
        <button className='buttonreset'>Reset</button>
        </div>
      </fieldset>


    </>
  )
}

export default EditEmployee