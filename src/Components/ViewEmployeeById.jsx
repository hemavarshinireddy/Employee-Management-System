import React from 'react'
import Header from '../Designs/Header'

const ViewEmployeeById = () => {
  return (
    <>
    <Header/>
    {/* <div className='Viewidhead'>
      <div className='div1'>
        <h1>Tech</h1>
        <h2> Mahindra</h2>
      </div>
      <div className='div2'>
        <h2>Tech Mahindra pvt Limited</h2>
      </div>
    </div> */}
    <fieldset className='Employee_Details'>
      <legend>Employee Details</legend>
      <div className='viewemployee_details'>
      <p>Employee ID:1</p>
      <p>Employee Name : Barbie</p>
      <p>Employee Age:21</p>
      <p>Employee Contact Email:Barbie@gmail.com</p>
      <p>Employee Contact Number:6382845881</p>
      </div>
      <div className='viewemployee_buttons'>
      <button className='edit_button'><a href='/edit/:id'>Edit</a></button>
      <button className='delete_button'><a href='/delete/:id'>Delete</a></button>
      <button className='back_button'>Go Back</button>
      </div>
    </fieldset>
    </>
  )
}

export default ViewEmployeeById