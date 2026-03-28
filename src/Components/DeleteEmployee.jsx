import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Swal from 'sweetalert2'
import APICall from './APICall'


  const DeleteEmployee = () => {
  const callApi=APICall()
  const{id}=useParams()
  const nav=useNavigate()
  const deleteData=async()=>{
    try{
    await callApi("/Employee","delete",id,null)
      Swal.fire({
        title:"congrats!!user",
        text:"Deleted Successfully",
        icon:'success'
      })
      nav('/view')
    }
    catch(e){
            Swal.fire({
        title:"opps!!user",
        text:"not deleted , check prperly",
        icon:'error'
        
      })
      console.log(e)
    }
  }
    useEffect(()=>{
      deleteData()
    },[])
  return (
    <>

    </>
  )
}

export default DeleteEmployee
