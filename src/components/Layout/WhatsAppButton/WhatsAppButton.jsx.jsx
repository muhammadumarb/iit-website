import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

// Number bina + aur bina space ke, country code ke saath
const NUMBER = '923420372875'
const MESSAGE = 'Hello, I want to know more about IIT courses'

const WhatsAppButton = () => {
  const link = `https://wa.me/${NUMBER}?text=${encodeURIComponent(MESSAGE)}`

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group mb-10 mr-10 fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-[max(1.25rem,env(safe-area-inset-right))] z-40 flex items-center gap-3"
    >
      {/* Hover ya keyboard focus par likha hua label (mobile par nahi) */}
      <span className="pointer-events-none translate-x-2 whitespace-nowrap rounded-full bg-white px-4 py-2 text-sm font-bold text-[#183D43] opacity-0 shadow-xl transition duration-300 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100 max-sm:hidden">
        Chat with us
      </span>

      {/* Gola button */}
      <span className="relative grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/40 transition duration-300 group-hover:scale-110">
        {/* Peeche phailti hui halki ring (jin ki animation band ho unhein nahi dikhti) */}
        <span aria-hidden="true" className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366]/50 motion-reduce:hidden"></span>
        <FaWhatsapp size={30} />
      </span>
    </a>
  )
}

export default WhatsAppButton