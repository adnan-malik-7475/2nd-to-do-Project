import React from 'react'

export  const LoginInput = () => {
  return (
    <input
                className="border rounded bg-gray-100 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder='Username'
                type="text"
                
           />
  )
}
export  const PasswordInput = ({showPassword}) => {
  return (
    <input
    className="border rounded bg-gray-100 w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                
           />
  )
}

