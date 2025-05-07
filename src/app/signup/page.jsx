"use client"

import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import Link from "next/link"

export default function SignUpScreen() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
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
    <div className="flex h-screen w-full bg-gray-800">
      <div className="relative m-auto w-[1000px] h-[600px] rounded-3xl overflow-hidden bg-gray-900 flex">
        {/* Left side - Form */}
        <div className="lg:w-1/2 p-12 flex flex-col">
          {/* Logo and Navigation */}
          <div className="flex items-center justify-between mb-16">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-blue-500 rounded-full mr-2"></div>
              <span className="text-white font-medium">Anywhere app</span>
            </div>
            <div className="flex gap-6 text-gray-400">
              <Link href="#" className="hover:text-white transition-colors">
                Home
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Join
              </Link>
            </div>
          </div>

          {/* Form Content */}
          <div className="flex-1">
            <div className="text-gray-400 text-sm mb-1">START FOR FREE</div>
            <h1 className="text-white text-3xl font-bold mb-1">
              Create new account<span className="text-blue-500">.</span>
            </h1>
            <div className="text-gray-400 text-sm mb-8">
              Already A Member?{" "}
              <Link href="/signin" className="text-blue-500 hover:underline">
                Log In
              </Link>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="firstName" className="sr-only">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Michal"
                    className="w-full bg-gray-800 border border-gray-700 rounded-md p-3 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="sr-only">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Mostek"
                    className="w-full bg-gray-800 border border-gray-700 rounded-md p-3 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="michal.mostek@anywhere.co"
                  className="w-full bg-gray-800 border border-gray-700 rounded-md p-3 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>

              <div className="mb-8 relative">
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full bg-gray-800 border border-blue-500 rounded-md p-3 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>

              <div className="flex gap-4">
                <button
                  type="button"
                  className="px-6 py-3 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition-colors"
                >
                  Change method
                </button>
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors flex-1"
                >
                  Create account
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Right side - Background Image */}
        <div className="lg:w-1/2 sm:hidden relative">
  {/* Replaced backgroundImage with img tag */}
  <img 
    src="https://res.cloudinary.com/upwork-cloud/image/upload/c_scale,w_1000/v1708023216/catalog/1520818437215236096/wzrgqfa0xbi8an2y4gnj.webp" 
    alt="Background" 
    className="w-full h-full object-cover absolute inset-0"
  />
  
  {/* Your original dotted line SVG (unchanged) */}
  <div className="absolute bottom-8 right-8">
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 0 L20 40" stroke="white" strokeOpacity="0.2" strokeDasharray="2 2" />
      <path d="M0 20 L40 20" stroke="white" strokeOpacity="0.2" strokeDasharray="2 2" />
    </svg>
  </div>
</div>
      </div>
    </div>
  )
}
