"use client"

import { useState } from "react"
import Signup from "./signup"
import Signin from "./signin"

export default function AuthContainer() {
  const [showLogin, setShowLogin] = useState(false)

  return (
    <div className="flex h-screen w-full bg-gradient-to-br from-yellow-200 to-orange-300">
      <div className="relative m-auto w-[1000px] h-screen sm:h-auto lg:h-[600px] lg:rounded-3xl overflow-hidden bg-yellow-100 shadow-lg flex ">
        {/* Left side - Form */}
        {showLogin ? <Signin setShowLogin={setShowLogin} /> : <Signup setShowLogin={setShowLogin} />}

        {/* Right side - Background Image */}
        <div className="lg:w-1/2 relative">
          <img
            src="https://feedthemwisely.com/wp-content/uploads/2020/02/fast-food-restaurant-antibiotic-policies-489x700.png.webp"
            alt="Background"
            className="w-full h-full object-cover absolute inset-0"
          />

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
