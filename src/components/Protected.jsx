import React from 'react'

const Protected = ({ isLoggedIn, children }) => {
  return (
    <>
      {isLoggedIn ? (
        children
      ) : (
        <div className='flex justify-center items-center h-screen text-3xl font-bold'>
          404 Not Found
        </div>
      )}
    </>
  )
}

export default Protected
