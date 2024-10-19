"use client";

import "../globals.css";
import Link from "next/link";
import { useForm } from "react-hook-form";

function Reg() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = async (data: any) => {

    console.log(data);
   
  };

  return (
    <div className="background1">
      <div className="box1">
        <h1 className="heading">REGISTER</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="label">Username</label>
            <input
              className="inputfields"
              {...register("username", {
                required: "Username is required",
              })}
              autoFocus
              type="text"
              placeholder="Username"
            />
            {errors.username && (
              <p className="text-red-600">{errors.username.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="label">Email</label>
            <input
              className="inputfields"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email address",
                },
              })}
              type="email"
              placeholder="Email"
            />
            {errors.email && (
              <p className="text-red-600">{errors.email.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="label">Phone Number</label>
            <input
              className="inputfields"
              {...register("number", {
                required: "Phone number is required",
                pattern: {
                  value: /^\d{10}$/,
                  message: "Invalid phone number. Please enter 10 digits",
                },
              })}
              type="tel"
              placeholder="Tel Number"
            />
            {errors.number && (
              <p className="text-red-600">{errors.number.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="label">Password</label>
            <input
              className="inputfields"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters long",
                },
              })}
              type="password"
              placeholder="Password"
            />
            {errors.password && (
              <p className="text-red-600">{errors.password.message}</p>
            )}
          </div>
          <div className="btndiv">
            <button className="btn1" type="submit">
              Create Account
            </button>
          </div>
          <p className="translate-y-6">
            Already have an account ?
            <Link href="../Login" className="text-blue-900">
              LogIn
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Reg;
