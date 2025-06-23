import React from 'react'

const Footer = () => {
  return (
    <div className='max-w-screen flex justify-center bg-black text-white'>
        <span>&copy; Servora - {new Date().getFullYear()}</span>
    </div>
  )
}

export default Footer