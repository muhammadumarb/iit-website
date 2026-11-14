import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const base =
  "flex h-12 w-12 items-center overflow-hidden rounded-r-2xl text-white shadow-xl transition-[width] duration-300 " +
  "hover:w-[152px] focus-visible:w-[152px] max-sm:h-[42px] max-sm:w-[42px]"
const iconSlot = "grid h-12 w-12 shrink-0 place-items-center max-sm:h-[42px] max-sm:w-[42px]"
const text = "whitespace-nowrap pr-4 text-sm font-bold"

const SideActions = () => {
  return (
    <div className="fixed left-0 top-1/2 z-40 flex -translate-y-1/2 flex-col gap-2">

      <a href="tel:+921234567890" aria-label="Contact us by phone" className={`${base} bg-[#269079]`}>
        <span className={iconSlot}><FaPhoneAlt size={18} /></span>
        <span className={text}>Contact</span>
      </a>

      <a href="mailto:info@iit.edu" aria-label="Send us an email" className={`${base} bg-[#183D43] ring-1 ring-[#65D9B5]/45`}>
        <span className={iconSlot}><MdEmail size={21} /></span>
        <span className={text}>Email</span>
      </a>

    </div>
  )
}

export default SideActions