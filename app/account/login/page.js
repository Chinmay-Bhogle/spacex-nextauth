"use client";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function LoginUser(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error , setError] = useState('');
  const router = useRouter();

  const userDetails = {
    email : "chinmay.bhogle@gmail.com",
    password: "password"
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(email && password) {
      if (email == userDetails.email && password == userDetails.password) {
        router.push('/');
        localStorage.setItem("user" , JSON.stringify(userDetails));
      } else {
        setError('Invalid username or password !!');
      }
    } else {
      setError('Please enter username and password');
    }
  };

  useEffect(() => {
    const userDetails = localStorage.getItem('user');
    if (userDetails){
      router.push('/');
    }
  }, [])

  return(
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="flex justify-center py-8">
        <div className="px-14 py-12 w-11/12 sm:w-[576px] border border-[#C1C1C1] rounded-[20px]">
          <div className="sm:mx-auto sm:w-full">
            <h2 className="text-3xl font-bold text-black text-center mb-8">Login</h2>
            <h4 className="text-2xl font-medium text-black text-center mb-3">Welcome back to ECOMMERCE</h4>
            <p className="text-base font-normal text-black text-center">The next gen business marketplace</p>
          </div>

          {/* Pending */}
          { error && <h6>{error}</h6> }

          <div className="mt-6 sm:mx-auto sm:w-full">
            <form className="space-y-6"  onSubmit={handleSubmit}>
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
                    // required
                    placeholder="Enter Your Email"
                    className="block w-full rounded-md border border-[#C1C1C1] p-3 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-base font-medium leading-6 text-gray-900">
                    Password
                </label>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    // required
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
                  Login
                </button>
              </div>
            </form>

            <p className="mt-8 pt-8 text-center text-base font-normal text-[#333333] border-t border-[#C1C1C1]">Don’t have an Account? <a href="./register" className="text-base font-medium leading-6 text-black hover:text-indigo-500 uppercase">Sign up</a></p>
          </div>
        </div>
      </div>
    </main>
  )
}