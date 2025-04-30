import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from '../components/Home'
import CartDetails from '../components/CartDetails'
import { faHourglass1 } from '@fortawesome/free-solid-svg-icons'
import Landing from '../components/Landing'
import Login from '../components/Login'
import Protected from '../components/Protected'
import { useSelector } from 'react-redux'

const Index = () => {
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn)
  return (
   
      <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path="/cart" element={<CartDetails />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/home" element={
          <Protected isLoggedIn={isLoggedIn}>
            <Home />
          </Protected>
        }/>
        <Route path="*" element={<div className='flex justify-center items-center h-screen text-3xl font-bold'>404 Not Found</div>} />
      

     </Routes>

  )
}

export default Index
