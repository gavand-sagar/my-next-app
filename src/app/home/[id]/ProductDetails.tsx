"use client"
import React from 'react'
import { Paper,TextField,Button } from '@mui/material'
import { useForm } from 'react-hook-form'
import { IProductForm } from './product.interface';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState, persistor } from '@/data/store';
import { increment } from '@/data/authSlice';
import { getProducts } from '@/services/product';
import { useRouter } from 'next/navigation';


export default function ProductDetails({params}:any) {

  const value = useSelector((state:RootState) => state.counter.value);
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const {register,handleSubmit,formState:{errors}} = useForm<IProductForm>();
  function mySubmit(data:IProductForm){
      dispatch(increment());
      dispatch(increment());
      dispatch(increment());
      getProducts().then(x=>{
        console.log("data",x)
      }).catch(x=>{
        console.log("error",x)
      });
    }
    function handlePurge(){
      persistor.purge()
    }
  return (
    <Paper sx={{margin:'15px'}}
    >
      Value : {value}
      <br/>
      <br/>
      <form onSubmit={handleSubmit(mySubmit)}>
          <TextField label="Price" {...register('model')}/>
          <Button type='submit' variant='contained'>{params?.id?"Update":"Save"}</Button>
          <br/>
          <br/>
          <br/>
          <Button type='button' onClick={handlePurge} variant='contained'>PURGE</Button>
      </form>      
    </Paper>
  )
}
