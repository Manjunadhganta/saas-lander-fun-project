import React from 'react'

const About = () => {
  return (
    <section id='features' className='w-full bg-[#FFBF23] py-36 px-4 h-full'>
      <div className='max-w-7xl mx-auto space-y-8 lg:flex lg:flex-row lg:items-center lg:gap-25'>
        <h1 className='text-4xl md:text-5xl font-bold text-black max-w-md text-left md:text-left'>
          With the Right Software, Great Things Can Happen
        </h1>
        <p className='text-lg text-black max-w-2xl text-left md:text-left'>
          Our SaaS platform is designed to simplify your workflow, boost productivity, and scale effortlessly. Whether you're managing a small team or running a large enterprise, our solution adapts to your needs with seamless integrations, real-time insights, and unmatched performance.
          Say goodbye to complicated tools and hello to a unified experience — secure, collaborative, and always available in the cloud.
        </p>
      </div>
    </section>
  )
}

export default About
