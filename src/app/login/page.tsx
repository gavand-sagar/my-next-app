"use client"
import { TextField } from '@mui/material';
import axios from 'axios';
import React from 'react'
import Cookies from 'js-cookie'
import { useForm } from 'react-hook-form'

interface MyForm {
  username: string;
  password: string;
}



export default function Page() {
  const { register, formState: { errors }, handleSubmit } = useForm<MyForm>()
  function mySubmit(data: MyForm) {
    axios.get<{ token: string }>('https://health-api-2x6i.onrender.com/users/login', {
      headers: {
        username: data.username,
        password: data.password
      }
    }).then(x => {
      if (x.data.token) {
        Cookies.set("token",x.data.token)
      }else{
        localStorage.clear();
      }
    }).catch(x=>{
      localStorage.clear();
    })
  }

  return (
    <div>Order Create

      <TextField
        error={(errors?.username) ? true : false}
        helperText={errors.username?.message}
        {...register("username", { required: { value: true, message: "Required" } })} />

      <TextField
        error={(errors?.password) ? true : false}
        helperText={errors.password?.message}
        {...register("password", { required: { value: true, message: "Required" } })} />


      <button onClick={handleSubmit(mySubmit)}>LOGIN</button>
    </div>
  )
}
