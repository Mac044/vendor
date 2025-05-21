"use client"

import React, { useState } from 'react'
import { Eye, EyeOff } from "lucide-react"
import Link from "next/link"

export default function Signin() {

    const [showPassword, setShowPassword] = useState(false)
    const [formData, setFormData] = useState({
      email: "",
      password: "",
  })
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission logic here
  }


  return (
    <div className="sm:w-1/2 p-12 flex flex-col">



    {/* Form Content */}
    <div className="flex-1 flex flex-col justify-center">
      <h1 className="text-white text-3xl font-bold mb-8">Sign in</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="email" className="block text-gray-400 text-sm mb-2">
            Your email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Charles@comet.co"
            className="w-full bg-gray-800 border border-gray-700 rounded-md p-3 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-600"
          />
        </div>

        <div>
          <div className="flex justify-between mb-2">
            <label htmlFor="password" className="block text-gray-400 text-sm">
              Password
            </label>
            <Link href="#" className="text-gray-400 text-sm hover:text-gray-300">
              Forgot password?
            </Link>
          </div>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••••"
              className="w-full bg-gray-800 border border-gray-700 rounded-md p-3 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-600"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-gray-600 text-white rounded-md hover:bg-gray-500 transition-colors"
        >
          Sign in
        </button>
      </form>

      <div className="mt-auto text-center text-gray-400 text-sm">
        Don't have an account?{" "}
        <Link href="/signup" className="text-gray-300 hover:underline">
          Sign up
        </Link>
      </div>
    </div>
  </div>
  )
}
