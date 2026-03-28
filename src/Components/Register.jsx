import React, { useState } from 'react'
import Header from '../Designs/Header'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import APICall from './APICall'


const Register = () => {
  const callApi=APICall()
  const [username, setusername] = useState('')
  const [password, setpassword] = useState('')
  const [age, setage] = useState('')
  const [address, setaddress] = useState('')
  const nav = useNavigate()

  const onSubmitButtonPress = async() => {
    const data={
      username :username,
      password :password,
      age :age,
      address :address
    }
        //post is used to add the data
    try{
      await callApi('/users',"post",0,data)
      Swal.fire({
        title:"congratss!!user",
        text:"Registered Successfully",
        icon:'success'
        
      })
      console.log('success')
      
    }
    catch(e){
        Swal.fire({
        title:"OPPs!!user",
        text:"Something issue faced check properly",
        icon:'error'
        
      })
      console.log("Facing an error",e)
    }
  }
  const onBackButtonPress = () => {
    nav('/')
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
      case 'age':
        setage(value)
        break;
      case 'address':
        setaddress(value)
        break
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
        <div className='form_fields'>
          <input type='text' placeholder='Enter your age' name='age' onChange={getvalue} />
        </div>
        <div className='form_fields'>
          <input type='text' placeholder='Enter your address' name='address' onChange={getvalue} />
        </div>
        <div className='form_button'>
          <button className='submit_button' onClick={onSubmitButtonPress}>Submit</button>
          <button className='reset_button'>Reset</button>
          <button className='back_button' onClick={onBackButtonPress}>Go back
          </button>
        </div>
        <div className='register_link'>
          <p>Already have an account? <a href='/login'>Sign up Here</a></p>
        </div>

      </div>
    </>
  )
}

export default Register