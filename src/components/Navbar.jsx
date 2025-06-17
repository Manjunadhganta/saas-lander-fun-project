import React, { useState } from 'react'
import { AiFillBug } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const items = [
        'Home',
        'Features',
        'Pricing',
        'Testimonials',
        'Contact'
    ]
  return (
    <section className='backdrop-blur-sm min-h-auto flex px-20 py-9 justify-between items-center'>
        
        <div className='text-3xl flex items-center justify-center gap-1'>
            <AiFillBug className='w-[25px] h-[25px] rotate-25'/>
            <span className='text-black font-bold'>Servora</span>
        </div>

        {/* Desktop Navbar */}
        <div className='hidden lg:flex justify-center items-center gap-10'>
            {items.map((item, index)=>(
                <a key={index} href={`#${item.toLowerCase()}`} className='text-black'>
                    {item}
                </a>
            ))}

            {/*Login*/}
            <div className='flex justify-center items-center gap-1'>
                <CgProfile className='w-[25px] h-[25px]'/>
                <span>Log in</span>
            </div>
            
            {/* Button */}
            <div className='text-[15px] border-1 border-black font-semibold text-black bg-[#FFBF23] px-4 py-1 rounded hover:bg-black hover:text-white hover:cursor-pointer'>
                <button className='hover:cursor-pointer'>Free Trial</button>
            </div>
        </div>
        
        {/* Mobile Nav */}
        <div className='lg:hidden'>
            <button onClick={()=> setIsOpen(!isOpen)}>
                {isOpen ? <HiOutlineX size={28} /> : <HiOutlineMenu size={28}/>}
            </button>
        </div>


        {isOpen && (
            <div className='absolute top-20 left-0 w-full bg-white shadow-md z-50 px-6 py-5 flex flex-col lg:hidden gap-5 justify-center items-center'>
                {items.map((item, index)=>(
                    <a key={index} href={`#${item.toLowerCase()}`} className='text-black'>
                        {item}
                    </a>
                ))}
                
                {/*Login*/}
                <div className='flex justify-center items-center gap-1'>
                    <CgProfile className='w-[25px] h-[25px]'/>
                    <span>Log in</span>
                </div>
                
                {/* Button */}
                <div className='text-[15px] border-1 border-black font-semibold text-black bg-[#FFBF23] px-4 py-2 rounded hover:bg-black hover:text-white hover:cursor-pointer'>
                    <button className='hover:cursor-pointer'>Free Trial</button>
                </div>
                
            </div>
        )}
        
    </section>
  )
}

export default Navbar