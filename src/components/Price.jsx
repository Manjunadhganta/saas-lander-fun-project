import React from 'react'
import { MdCheck } from 'react-icons/md'

const Price = () => {
  return (
    <section id='pricing'>
        <div className='w-full py-32 px-5 bg-white'>
            <div className='text-center mb-10 flex flex-col gap-5'>
                <h2 className='text-5xl font-bold text-black'>Pricing</h2>
                <p className='text-lg text-gray-600'>Let’s look at the pricing we offer</p>
            </div>

            <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                <div className="rounded-lg border-2 overflow-hidden shadow-lg">
                {/* Top */}
                <div className="bg-black text-white px-8 pt-10 pb-8">
                    <div className="text-center">
                    <h2 className="text-2xl font-bold mb-2">Basic</h2>
                    <div className="mb-3">
                        <span className="text-lg opacity-80">US$</span>
                        <span className="text-6xl font-bold">10</span>
                    </div>
                    <p className="text-sm opacity-80 mb-4">Every month</p>
                    <p className="text-sm leading-relaxed mb-6 opacity-90">
                        Access premium features with full support and scalability.
                    </p>
                    <p className="text-xs opacity-70 mb-6">Valid for 3 months</p>
                    <button className="w-full bg-white text-black py-3 px-6 rounded-lg font-semibold hover:bg-gray-200 transition">
                        Get Started
                    </button>
                    </div>
                </div>

                {/* Bottom */}
                <div className="bg-[#FFD7EF] px-8 py-8">
                    <div className="space-y-4">
                    {["Unlimited Projects", "Priority Support", "Advanced Analytics", "Team Collaboration"].map((benefit, index) => (
                        <div key={index} className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
                            <MdCheck className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-black font-medium">{benefit}</span>
                        </div>
                    ))}
                    </div>
                </div>
                </div>
                
                <div className="relative">
                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#FFBF23] text-black font-semibold text-sm px-4 py-1 rounded border-black border-1 shadow-md z-10">
                        Best Value
                    </div>
                    <div className="rounded-lg border-2 overflow-hidden shadow-lg">
                    {/* Top */}
                    <div className="bg-black text-white px-8 pt-10 pb-8">
                        <div className="text-center">
                        <h2 className="text-2xl font-bold mb-2">Pro</h2>
                        <div className="mb-3">
                            <span className="text-lg opacity-80">US$</span>
                            <span className="text-6xl font-bold">20</span>
                        </div>
                        <p className="text-sm opacity-80 mb-4">Every month</p>
                        <p className="text-sm leading-relaxed mb-6 opacity-90">
                            Access premium features with full support and scalability.
                        </p>
                        <p className="text-xs opacity-70 mb-6">Valid for 6 months</p>
                        <button className="w-full bg-white text-black py-3 px-6 rounded-lg font-semibold hover:bg-gray-200 transition">
                            Get Started
                        </button>
                        </div>
                    </div>

                    {/* Bottom */}
                    <div className="bg-[#FFD7EF] px-8 py-8">
                        <div className="space-y-4">
                        {["Unlimited Projects", "Priority Support", "Advanced Analytics", "Team Collaboration"].map((benefit, index) => (
                            <div key={index} className="flex items-center space-x-3">
                            <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
                                <MdCheck className="w-4 h-4 text-white" />
                            </div>
                            <span className="text-black font-medium">{benefit}</span>
                            </div>
                        ))}
                        </div>
                    </div>
                    </div>
                </div>



                <div className="rounded-lg border-2 overflow-hidden shadow-lg">
                {/* Top */}
                <div className="bg-black text-white px-8 pt-10 pb-8">
                    <div className="text-center">
                    <h2 className="text-2xl font-bold mb-2">Premium</h2>
                    <div className="mb-3">
                        <span className="text-lg opacity-80">US$</span>
                        <span className="text-6xl font-bold">30</span>
                    </div>
                    <p className="text-sm opacity-80 mb-4">Every month</p>
                    <p className="text-sm leading-relaxed mb-6 opacity-90">
                        Access premium features with full support and scalability.
                    </p>
                    <p className="text-xs opacity-70 mb-6">Valid for 12 months</p>
                    <button className="w-full bg-white text-black py-3 px-6 rounded-lg font-semibold hover:bg-gray-200 transition">
                        Get Started
                    </button>
                    </div>
                </div>

                {/* Bottom */}
                <div className="bg-[#FFD7EF] px-8 py-8">
                    <div className="space-y-4">
                    {["Unlimited Projects", "Priority Support", "Advanced Analytics", "Team Collaboration"].map((benefit, index) => (
                        <div key={index} className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
                            <MdCheck className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-black font-medium">{benefit}</span>
                        </div>
                    ))}
                    </div>
                </div>
                </div>



            </div>
        </div>
    </section>
  )
}

export default Price
