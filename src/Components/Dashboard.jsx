import React, { useState, useEffect } from 'react'
import Header from '../Designs/Header'
import axios from 'axios'

const Dashboard = () => {
  const [employeedata, setemployeedata] = useState([])
  const apiurl = "http://localhost:3000/Employee"

  const getData = async () => {
    try {
      const response = await axios.get(apiurl)
      setemployeedata(response.data)
    } catch (error) {
      console.error("Error fetching employee data:", error)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <Header />
      <main className='main_container'>
        <h2>Welcome to Dashboard</h2>
        <div className='cards'>
          <div className='card_details'>
            <h5>{employeedata.length}</h5>
            <p>Total Employees</p>
            <p><a href='/view'> Click to view all Employee Details</a></p>
          </div>
          <div className='card_details'>
            <h5>12</h5>
            <p>Total Employees</p>
            <p><a href='/view'> Click to view all Employee Details</a></p>
          </div>
          <div className='card_details'>
            <h5>12</h5>
            <p>Total Employees</p>
            <p><a href='/view'> Click to view all Employee Details</a></p>
          </div>
        </div>
      </main>
    </>
  )
}

export default Dashboard