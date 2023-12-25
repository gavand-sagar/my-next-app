import { TextField } from '@mui/material';
import React from 'react'
import { useForm } from 'react-hook-form'

interface MyForm {
    username: string;
    email: string;
}



export default function Page() {
    const { register, formState: { errors }, handleSubmit } = useForm<MyForm>()
    function mySubmit(data: MyForm) {
            //
            console.log(data)
    }

    return (
        <div>Order Create

            <TextField error={(errors?.username) ? true : false} {...register("username", { required: { value: true, message: "" } })} />


            <button onClick={handleSubmit(mySubmit)}>SUBMIT</button>
        </div>
    )
}
