"use client"
import { Box, Button, CircularProgress, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react'
import Cookies from 'js-cookie'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation';

interface MyForm {
  username: string;
  password: string;
}



export default function Page() {
  const { register, formState: { errors }, handleSubmit } = useForm<MyForm>();
  const [isBusy, setIsBusy] = useState<boolean>(false)
  const router = useRouter()
  function mySubmit(data: MyForm) {
    setIsBusy(true)
    axios.get<{ token: string }>('https://health-api-2x6i.onrender.com/users/login', {
      headers: {
        username: data.username,
        password: data.password
      }
    }).then(x => {
      if (x.data.token) {
        Cookies.set("token", x.data.token)
        router.push("/home")
      } else {
        localStorage.clear();
      }
    }).catch(x => {
      localStorage.clear();
    })
      .finally(() => {
        setIsBusy(false)
      })
  }

  return (
    <Box sx={{ display: 'flex', 'flexDirection': 'column', gap: '20px', alignItems: 'center' }}>
      <Typography variant='h1'>Login</Typography>

      <TextField
        disabled={isBusy}
        label="Username"
        error={(errors?.username) ? true : false}
        helperText={errors.username?.message}
        {...register("username", { required: { value: true, message: "Required" } })} />

      <TextField
        label="Password"
        type='password'
        disabled={isBusy}
        error={(errors?.password) ? true : false}
        helperText={errors.password?.message}
        {...register("password", { required: { value: true, message: "Required" } })} />


      <Button disabled={isBusy} variant='contained' onClick={handleSubmit(mySubmit)}>LOGIN</Button>

      {isBusy && <CircularProgress />}
    </Box>
  )
}
