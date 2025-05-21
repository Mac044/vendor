"use client"

import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"

export default function Signin({ setShowLogin }) {
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
    <div className="lg:w-1/2 p-12 flex flex-col">
      {/* Logo and Navigation */}
      <div className="flex items-center justify-between mb-16">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-blue-500 rounded-full mr-2"></div>
          <span className="text-white font-medium">Anywhere app</span>
        </div>
      </div>

      {/* Form Content */}
      <div className="flex-1">
        <h1 className="text-white text-3xl font-bold mb-1">Sign in</h1>
        <p className="text-gray-400 mb-8">Please enter your details to sign in</p>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
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
              className="w-full bg-gray-800 border border-gray-700 rounded-md p-3 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div className="mb-8">
            <div className="flex justify-between mb-2">
              <label htmlFor="password" className="block text-gray-400 text-sm">
                Password
              </label>
              <span className="text-gray-400 text-sm hover:text-gray-300 cursor-pointer">Forgot password?</span>
            </div>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••••"
                className="w-full bg-gray-800 border border-gray-700 rounded-md p-3 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
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
            className="w-full py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          >
            Sign in
          </button>

          <div className="text-gray-400 text-sm mt-4">
            Don't have an account?{" "}
            <span className="text-blue-500 hover:underline cursor-pointer" onClick={() => setShowLogin(false)}>
              Sign up
            </span>
          </div>
        </form>
      </div>
    </div>
  )
}
