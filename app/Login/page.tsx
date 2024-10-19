"use client"
import Link from 'next/link'
import '../globals.css'
import {useForm} from "react-hook-form"

function Login() {

const {register,handleSubmit,formState: { errors }}=useForm();

 const   onSubmit=async(data:any)=>{
  console.log(data)
}

  return (
    <div className="background">
    <div className="box">
      <h1 className="heading">Log In</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="label" >Username</label>
          <input {...register("username",{
            required:"Username is require "
          })}
          className="inputfield" id="username" type="text" placeholder="Username" />
         {errors.username &&<p className='text-red-600'>{errors.username.message}</p>}
        </div>
        <div className="mb-4">
          <label className="label">Email</label>
          <input {...register("email",{required:"Email is require"})} 
          className="inputfield" id="email" type="email" placeholder="Email" />
          {errors.email&&<p className='text-red-600'>{errors.email.message}</p>}
        </div>
        <div className="mb-4">
          <label className="label" >Password</label>
          <input {...register("password",{required:"password is require"})}
           className="inputfield" id="password" type="password" placeholder="Password" />
           {errors.password&&<p className='text-red-600'>{errors.password.message}</p>}
        </div>
        <div className="btndiv">
          <button className="btn" type="submit">Log In</button>
         
        </div>
        <p className='translate-y-6 translate-x-2'>Don't have an account? <Link href='../Register' className='text-blue-900'>Register</Link></p>
      </form>
    </div>
  </div>
  )
}

export default Login