import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
  const nav=useNavigate()
  const logging_out =()=>{
    sessionStorage.removeItem('username')
    sessionStorage.removeItem('password')
    nav('/')
  }
  useEffect(()=>{
    logging_out()
  },[])
  return (
    <>
    </>
  )
}

export default Logout