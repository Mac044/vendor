"use client"


import Signup from "../components/Signup"
import Signin from "../components/Signin"
import { useState } from "react"


export default function SignUpScreen() {
  const [showLogin, setShowLogin] = useState(false)
  console.log(!showLogin)

  return (
    <div className="flex h-screen w-full bg-gray-800">
      <div className="relative m-auto w-[1000px] h-[600px] rounded-3xl overflow-hidden bg-gray-900 flex">
        {/* Left side - Form */}
        { showLogin ? ( <Signup/>) : (<Signin/>)}
        {/* {showLogin && (<Signin/> ) } */}


        {/* Right side - Background Image */}
        <div className="lg:w-1/2 relative">
  {/* Replaced backgroundImage with img tag */}
  <img 
    src="https://feedthemwisely.com/wp-content/uploads/2020/02/fast-food-restaurant-antibiotic-policies-489x700.png.webp" 
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
