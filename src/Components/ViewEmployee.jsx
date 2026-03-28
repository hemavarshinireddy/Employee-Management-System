import React, { useEffect, useState } from 'react'
import Header from '../Designs/Header'
import axios from 'axios'
import APICall from './APICall'



const ViewEmployee = () => {
  const callApi=APICall()
  const[employeeData,setEmployeeData] =useState([])
  const getData=async()=>{
    const abc=await callApi('/Employee','get')
    setEmployeeData(abc)
  }
useEffect(()=>{
  getData()
},[])

  return (
    <>
    <Header/>
    
    <div className='employee_details'>
      <div className="div1">
        <h1>Employee Details</h1>
      </div>
      <div className="div2">
        <button className='Addbutton'><a href='/Add'>AddEmployee</a></button>
         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"></link>
        <table border={1} className='table'>
          <tr>
            <th rowSpan={2}>Serial No</th>
            <th rowSpan={2}>Employee Name</th>
            <th rowSpan={2}>Employee Age</th>
            <th rowSpan={2}>Employee Designation</th>
            <th rowSpan={2}>Employee Department</th>
            <th rowSpan={2}>Employee Salary</th>
            <th colSpan={2}>Actions</th>
          </tr>
          <tr>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
          {employeeData.map((data,index)=>{return(
            <tr>
          <td>{index +1}</td>
          <td>{data.employee_name}</td>
          <td>{data.employee_age}</td>
          <td>{data.employee_designation}</td>
          <td>{data.employee_department}</td>
          <td>{data.employee_salary}</td>
          <td className='edit_button'> < a href={`/edit/${data.id}`}><i class="fa-solid fa-pen-to-square"/></a></td>
          <td className='delete_button'><a href={`/delete/${data.id}`}><i class="fa-solid fa-trash"/></a></td>
          </tr>
          )})}
        </table>
      </div>
    </div>
    </>
  )
}

export default ViewEmployee