import React, { useEffect, useState } from 'react'
import Header from '../Designs/Header'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import APICall from './APICall'

const Login = () => {
  const callApi=APICall()
  const nav = useNavigate()
  const [username, setusername] = useState('')
  const [password, setpassword] = useState('')
  const[apiData,setApiData]=useState([])

  const onSubmitButtonPress = async() => {
  
  const check =apiData.find((data)=>
    data.username === username &&
    data.password === password
  )
  if(check){
    sessionStorage.setItem('username',username)
    sessionStorage.setItem('password',password)
          Swal.fire({
            title:"congrats!!user",
            text:"Registered Successfully",
            icon:'success'
            
          })
    nav('/dashboard')
  }
  else{
          Swal.fire({
            title:"opps!!user",
            text:"Register is unsuccess",
            icon:'error'
            
          })
    alert("Login Failed")
  }
}
  const getData=async()=>{
  const response = await callApi("/users","get",0,null)
  setApiData(response)
  }

  useEffect(()=>{
    getData()
  },[])
  
  


  const onBackButtonPress = () => {
    nav('/view')
  }
  

  const getvalue = (e) => {
    const { name, value } = e.target
    switch (name) {
      case 'username':
        setusername(value)
        break;
      case 'password':
        setpassword(value)
        break;
    }
  }


  return (
    <>
      <Header />

      <div className='login_container'>
        <div className='signin_text'>Sign In Here!!!</div>
        <div className='form_fields'>
          <input type='text' placeholder='Enter your username' name='username' onChange={getvalue} />
        </div>
        <div className='form_fields'>
          <input type='password' placeholder='Enter your password' name='password' onChange={getvalue} />
        </div>
        <div className='form_button'>
          <button className='submit_button' onClick={onSubmitButtonPress}>Submit</button>
          <button className='reset_button'>Reset</button>
          <button className='back_button' onClick={onBackButtonPress}>Go back
          </button>
        </div>
        <p className='login1'>Don't have Account Please Register<a href='/register'>Please Register</a></p>

      </div>
    </>
  )
}

export default Login