import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Landing = () => {
    const navigate=useNavigate()
  return (
    <div>
     <h1 className='text-3xl font-bold text-green-500 text-center mt-10'> Welcome the Biggest Ecommerce Cart App.</h1>
   <div className='flex justify-center items-center mt-10'>
   <button className='bg-orange-400 border rounded-md px-8 py-2 mr-2 font-bold' onClick={()=>navigate("/login")}>Sign In</button>
   <button className='bg-orange-400 border rounded-md px-8 py-2 font-bold'>Sign Up</button>
   </div>
    </div>
  )
}

export default Landing
