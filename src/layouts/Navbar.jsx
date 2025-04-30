import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { login, logout } from '../redux/features/LoginSlice' // Adjust the import path as necessary

const Navbar = () => {
  const cartItemCount = useSelector((state) => state.cart.carts.length)
  const navigate = useNavigate()
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn)
  const dispatch = useDispatch()

  return (
    <div>
      <nav className="fixed top-0 left-0 w-full z-50 bg-gray-800 p-4 flex justify-between items-center rounded-sm shadow-lg">
        <Link to="/home" className="text-white text-xl font-bold">
          Ecommerce
        </Link>

        <div className='flex items-center space-x-4'>
           
        {isLoggedIn ? (<Link to="/" className='text-gray-400 font-bold' onClick={()=>dispatch(logout())}>Log Out</Link>) : (
          <Link to="/" className='text-gray-400 font-bold' onClick={() => {
            dispatch(login());
            navigate("/login");
          }}
          >Log In</Link>
        )}
        <div className="relative cursor-pointer" onClick={() => navigate('/cart')}>
          <FontAwesomeIcon icon={faCartShopping} className="text-white text-2xl" />

          {cartItemCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {cartItemCount}
            </span>
          )}
        </div>
        </div>
      </nav>
      <div className="pt-16"></div> {/* Add padding to prevent content from being hidden behind navbar */}
    </div>
  )
}

export default Navbar
