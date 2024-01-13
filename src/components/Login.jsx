import React from 'react'

export default function Login() {
  return (
    <>
    <div className="wrapper flex justify-center items-center mt-32 ">
      <form action="#" method='post' className=" bg-slate-500 w-96 h-[70vh] p-8 rounded-md flex flex-col border-blue-400 justify-center items-center  mx-auto relative">
        <div className="flex justify-start">
         <h1>Sign in as Pharmacy</h1>
          
        </div>
        <div className="error w-92 h-12 mt-8 flex justify-center items-center bg-danger border border-danger text-red-500 font-light rounded-md mx-auto absolute top-16 hidden transition duration-2000 ease-in-out"></div>
        <div className="form-group w-full h-32 mt-8 text-center mx-auto relative">
          <div className="input-group flex flex-col space-y-2">
            
            <input type="email" name="email" id="email" placeholder="Enter your email" className="border p-2 outline-none bg-warning-light text-black rounded-md hover:border-green-500" />
            <input type="password" name="password" id="password" placeholder="Password" className="border p-2 outline-none  bg-warning-light text-black rounded-md hover:border-green-500" />
          </div>
          <div className="input-group mt-2">
            <button type="button" className=" bg-blue-700 w-full mt-8 text-center text-white px-4 border p-2 py-2 rounded-md">Sign In</button>
          </div>
        </div>

        <small className="text-light absolute bottom-8 left-2 text-center  mx-auto w-full">
           <a href="#" className=" text-blue-500 hover:text-blue-400 font-bold ">Forgot password?</a>
        </small>
      </form>
    </div>
    </>
  )
}
