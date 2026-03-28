import axios from 'axios'
const APICall = () => {
const baseUrl="http://localhost:3000"

const callApi=async(endpoint="/",methods='get',id=0,body=null)=>{
    if(methods=="post"){
        const response=await axios.post(baseUrl+endpoint,body)
        return response.status
    }
    else if(methods=="put" && id!=0){
        const response=await axios.put(baseUrl+endpoint+'/'+id,body)
        return response.status
    }
    else if(methods=="delete"){
        const response=await axios.delete(baseUrl+endpoint+'/'+id)
        return response.status
    }
    else if(methods=="get" && id!=0){
        const response=await axios.get(baseUrl+endpoint+'/'+id)
        return response.data
    }
    else{
        const response=await axios.get(baseUrl+endpoint)
        return response.data        
    }
}    
  return callApi
}

export default APICall