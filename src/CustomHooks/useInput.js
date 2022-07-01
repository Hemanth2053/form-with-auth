import React from 'react'
import { useState } from 'react'

function useInput(initialValue, validateOnChange=false,validate) {

    const [formValue, setFormValue] = useState(initialValue)
    const [error,setError] = useState({})

    const handleChange =  (e) => {
        const {name, value} =e.target;
        setFormValue({...formValue, [name]: value})

        if(validateOnChange){
            validate({[name]: value})
        }
    }
  return {
    formValue,
    setFormValue,
    handleChange,
    error,
    setError,
  }
}

export default useInput