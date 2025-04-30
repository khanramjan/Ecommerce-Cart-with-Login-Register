import React from 'react'
import { CardsData } from './CartData'
import { useSelector } from 'react-redux'
import { addToCart } from '../redux/features/cartSlice'
import { useDispatch } from 'react-redux'

const Home = () => {
  const [cart, setCart] = React.useState(CardsData)
  const [cartItem,setCartItem]=useSelector((state)=> state.cart.carts)
  const dispatch = useDispatch()
  const send = (item) => {
dispatch(addToCart(item))
  }

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cart.map((item) => {
          return (
            <div key={item.id} className="flex flex-col items-center justify-center p-4 border rounded-lg shadow-md hover:shadow-lg transition">
              <img src={item.imgdata} alt={item.dish} className="w-full h-48 object-cover mb-4 rounded" />
              <div className='flex  justify-between w-full'>
              <h2 className="text-lg font-bold mb-2">{item.dish}</h2>
                <p className='bg-green-500 border rounded-md px-1'>{item.rating}★</p>
              </div>
              
              
              <p className="text-lg font-bold text-green-600 mb-2">৳{item.price}</p>
              <button className='border rounded-md bg-orange-600 px-2 py-1' onClick={()=>{
                send(item)
              }}>Add to Cart</button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Home
