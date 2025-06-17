import React from 'react'
import saas from '../assets/saas.svg'

const Hero = () => {
  return (
    <section className='py-15 px-25'>
      <div className='max-w-7xl mx-auto px-5'>
        <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-20'>

          {/* Left Part */}
          <div className='flex justify-center items-center'>
            <img src={saas} alt="SaaS Illustration" className='w-full max-w-md' />
          </div>

          {/* Right Part */}
          <div className='flex flex-wrap gap-6'>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-semibold text-black leading-tight'>
              Launch. <br /> Grow. Succeed.
            </h1>
            <p className='text-lg text-gray-600'>
              Our platform helps startups launch, scale, and succeed faster with intuitive tools, real-time analytics, and seamless integrations that accelerate your growth.
            </p>

            <div className='flex gap-6 mt-6'>
              <button className='px-6 py-3 bg-black text-white border-2 border-black rounded-lg hover:bg-[#FFBF23] hover:text-black transition'>
                Get Started
              </button>
              <button className='px-6 py-3 border-black border-2 rounded-lg hover:border-[#FFBF23] hover:text-[#FFBF23] transition'>
                View Pricing
              </button>
            </div>
          </div>

          
        </div>
      </div>
    </section>
  )
}

export default Hero
