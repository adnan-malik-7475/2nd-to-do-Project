import React, { useState } from 'react';
import { Link } from 'react-router-dom';

let Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="w-full max-w-xs">
          <form className="bg-white rounded px-8 pt-6 pb-8 mb-4">
            <div className="flex items-center justify-center font-bold text-3xl mb-10">
              Log In
            </div>
            <div className="mb-4">
              <input
                className="border rounded bg-gray-100 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="Email"
                type="text"
                placeholder="Email"
              />
            </div>
            <div className="mb-6">
              <div className="relative">
                <input
                  className="border rounded bg-gray-100 w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                />
                <span
                  className="absolute inset-y-0 right-0 pr-3 pb-3 flex font-semibold text-sm items-center cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? 'Hide' : 'Show'}
                </span>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Link to="/sidebar" className="w-full">
                <button
                  className="bg-black text-white rounded-full py-2 px-4 w-full focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Log In
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
