"use client"

import { Lock, Mail, User } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

import Link from "next/link";
import UseRegister from "./hooks/use-register";
import Spinner from "../ui/spinner";

export default function RegisterPage(){

  const {errors,onSubmit,register,isPending} = UseRegister()

    return(
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-4">
          <div className="dark:bg-gray-950 bg-gray-150 p-10 rounded-xl shadow-xl">

            <form onSubmit={onSubmit} className="flex flex-col w-[350px] gap-5 mb-2">
              <div>

              <p className="font-bold text-3xl text-center">Create your account</p>
              <p className="text-center mt-1 mb-3">Get started with your account</p>
              </div>

      <div className="relative" >
        <Mail color="#616161" className="absolute left-2 top-1.5"/>
        <Input
          id="email"
          type="text"
          placeholder="Email"
          className="pl-10 shadow-sm"
          {...register("email")}
        />
        <p className="text-red-500 text-sm">{errors.email?.message}</p>
      </div>
      <div className="relative">
        <User  color="#616161" className="absolute left-2 top-1.5"/>
        <Input
          id="username"
          placeholder="Username"
          className="pl-10 shadow-sm"
          {...register("username")}
          />
        <p className="text-red-500 text-sm">{errors.username?.message}</p>
      </div>
       <div className="relative">
        <Lock color="#616161" className="absolute left-2 top-1.5" />
        <Input
          id="password"
          type="password"
          placeholder="Password"
          className="pl-10 shadow-sm"
          {...register("password")}
          />
        <p className="text-red-500 text-sm">{errors.password?.message}</p>
      </div>
      <Button disabled={isPending} type="submit">
        {isPending ? <Spinner /> : "Register"}  
      </Button>
    </form>
    <p>have an account? <Link className="text-blue-800" href="/login">Login</Link></p>
          </div>
        </div>
    )
}