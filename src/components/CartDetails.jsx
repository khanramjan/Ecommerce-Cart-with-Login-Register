import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faTrash } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux'
import { use } from 'react'
import { clearCart, decreaseQuantity, incrementQuantity, removeFromCart } from '../redux/features/cartSlice'
import { useDispatch } from 'react-redux'
import axios from 'axios'

const CartDetails = () => {
  const cartItems=useSelector((state) => state.cart.carts)
  const dispatch=useDispatch()
  const handleCheckout = async () => {
    try {
      const response = await axios.post('http://localhost:4242/create-checkout-session', { cartItems });
      if (response.data && response.data.url) {
        window.location.href = response.data.url;
      }
    } catch (error) {
      alert('Checkout failed!');
      console.error(error);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Cart Details</h1>

      {cartItems.length === 0 ? (
        <div className="flex flex-col justify-center items-center h-[60vh]">
          <FontAwesomeIcon icon={faCartShopping} className="text-gray-500 text-6xl mb-4" />
          <div className="text-2xl font-semibold text-gray-600">Your cart is empty</div>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg shadow-md">
            <thead>
              <tr className="bg-gray-800 text-white">
                <th className="py-3 px-6 text-left">Item</th>
                <th className="py-3 px-6 text-center">Price</th>
                <th className="py-3 px-6 text-center">Quantity</th>
                <th className="py-3 px-6 text-center">Total</th>
                <th className="py-3 px-6 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={index} className="border-b hover:bg-gray-100">
                 
                  <td className="py-4 px-6 flex items-between">
                  <img src={item.imgdata} alt="" className='h-14 w-14'/>
                    <span className='ml-2'>
                    {item.dish}
                     </span>
                    </td>
                  <td className="py-4 px-6 text-center">৳{item.price}</td>
                  <td className="py-4 px-6 text-center">
                    <button className='bg-gray-200 px-2 py-0.5 font-bold' onClick={()=>dispatch(incrementQuantity(item))}>+</button>
                    <span className="mx-2">{item.qnty}</span>
                    <button className='bg-gray-200 px-2 py-0.5 font-bold' onClick={()=>dispatch(decreaseQuantity(item))} >-</button>
                  </td>
                  <td className="py-4 px-6 text-center">৳{(item.price * (item.qnty)).toFixed(2)}</td>
                  <td className="py-4 px-6 text-center">
                    <button className="text-red-600 hover:text-red-800" onClick={() => {
                      dispatch(removeFromCart(item.id))
                    }}>
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="mt-6 flex justify-end">
            <div className="text-2xl font-bold">
              Grand Total: ৳
              {cartItems.reduce((acc, item) => acc + item.price * (item.qnty), 0).toFixed(2)}
            </div>
          </div>
        </div>
      )}
     {cartItems.length > 0 && (
  <span className='flex flex-col justify-center items-center gap-3'>
    <button className='bg-red-400 text-center px-4 py-1 rounded-md' onClick={()=>dispatch(clearCart())}>Empty Cart</button>
    <button className='bg-green-500 text-white px-6 py-2 rounded-md font-semibold' onClick={handleCheckout}>Checkout</button>
  </span>
)}
    </div>
  )
}

export default CartDetails
