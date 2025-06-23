import React from 'react'
import email from '../assets/email.svg'

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-[#FFD7EF]">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-5xl font-bold text-black">Contact Us</h2>
        <p className="text-gray-600 text-lg mt-4">We'd love to hear from you</p>
      </div>

      {/* Form and Image */}
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:grid md:grid-cols-2 gap-10 items-center">
        {/* Form */}
        <form className="space-y-6 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 border-black border-2 rounded-lg focus:outline-none"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 border-black border-2 rounded-lg focus:outline-none"
              required
            />
          </div>

          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full p-4 border-black border-2 rounded-lg focus:outline-none resize-none"
            required
          ></textarea>

          <button
            type="submit"
            className="bg-black text-white px-6 py-3 rounded-lg hover:bg-[#FFBF23] hover:text-black transition"
          >
            Submit
          </button>
        </form>

        {/* Image */}
        <div className="flex justify-center">
          <img src={email} alt="Contact Illustration" className="w-full max-w-sm h-auto" />
        </div>
      </div>
    </section>
  )
}

export default Contact
