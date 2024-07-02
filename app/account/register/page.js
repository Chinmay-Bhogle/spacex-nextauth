"use client";
import { useState } from 'react';

export default function RegisterUser(){
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(userName,email,password);

  };

  return(
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="flex justify-center py-8">
        <div className="px-14 py-12 w-11/12 sm:w-[576px] border border-[#C1C1C1] rounded-[20px]">
          <div className="sm:mx-auto sm:w-full">
            <h2 className="text-3xl font-bold text-black text-center">Create your account</h2>
          </div>

          <div className="mt-6 sm:mx-auto sm:w-full">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-base font-medium text-gray-900">Name</label>
                <div className="mt-2">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    placeholder="Enter Name"
                    className="block w-full rounded-md border border-[#C1C1C1] p-3 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-base font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder="Enter Your Email"
                    className="block w-full rounded-md border border-[#C1C1C1] p-3 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-base font-medium leading-6 text-gray-900">
                    Password
                  </label>
                  <div className="text-base">
                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    placeholder="Enter Password"
                    className="block w-full rounded-md border border-[#C1C1C1] p-3 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full rounded-md bg-black p-3 border text-base font-semibold leading-6 text-white hover:bg-white hover:border-black hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                  Create account
                </button>
              </div>
            </form>

            <p className="mt-10 text-center text-base font-normal text-[#333333] mb-16">Have an Account? <a href="./login" className="text-base font-medium leading-6 text-black hover:text-indigo-500 uppercase">Login</a></p>
          </div>
        </div>
      </div>
    </main>
  )
}