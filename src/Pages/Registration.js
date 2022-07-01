import React from 'react'
import { Navigate } from 'react-router-dom'
import FieldInput from '../Components/FieldInput'
import useInput from '../CustomHooks/useInput'
import '../Page-css/Registration.css'
import axios from 'axios'
import { useNavigate } from  'react-router-dom'


function Registration() {

  const Navigate = useNavigate()

  const initialValue  = { Username:"", Phone:"",Password:""}

  const validate = (fieldValue = formValue) => {
    let temp = {}
    if("Username" in fieldValue){
      temp.Username = fieldValue.Username ? "" : "Enter Your Username"
    }
    if("Phone" in fieldValue){
      temp.Phone = fieldValue.Phone ? "" : "Enter Your Mobile number"
    }
    if("Password" in fieldValue){
      temp.Password = fieldValue.Password ? "" : "Enter Your password"
    }
    setError({...temp});
    if(fieldValue == formValue){
      return Object.values(temp).every((e) => e == "")
    }

  }

  const { formValue, setFormValue, error, setError, handleChange} = useInput(initialValue,true,validate)

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if(validate()){
      await axios.post("https://guarded-crag-39247.herokuapp.com/api/register", formValue)
      .then((res) => window.localStorage.setItem("Token",res.data.token))
      .then(() => Navigate('/',{replace: true}))

    }
  }

  return (
    <div>
      <h1>Registration</h1>
      
      <FieldInput
      placeholder="User Name"
      name="Username"
      value={formValue.Username}
      onChange={handleChange}
      errormessage={error.Username}/>

      <FieldInput
      placeholder="Mobile No"
      name="Phone"
      value={formValue.Phone}
      onChange={handleChange}
      errormessage={error.Phone}/>

      <FieldInput
      placeholder="Password"
      name="Password"
      value={formValue.Password}
      onChange={handleChange}
      errormessage={error.Password}/>
    
      <button onClick={(e) => handleSubmit(e)}> Register </button>
      
      
    </div>
  )
}

export default Registration