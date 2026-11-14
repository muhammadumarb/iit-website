import React from 'react'
import { Link } from 'react-router-dom'
import { FaPhoneAlt, FaMapMarkerAlt, FaFacebookF, FaInstagram } from 'react-icons/fa'
import { FaArrowRightLong, FaLinkedin, FaXTwitter } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'
import logo from '../../../assets/logo.png' // apni file ki jagah ke hisab se path theek karein

const heading =
  "mb-4 text-lg font-bold text-white after:mt-2 after:block after:h-0.5 after:w-10 after:rounded after:bg-[#269079]"

const linkItem =
  "flex items-center gap-2 text-slate-200 transition-colors duration-300 hover:text-[#65D9B5]"

const social =
  "grid h-11 w-11 place-items-center rounded-full border border-[#65D9B5]/60 text-[#65D9B5] " +
  "transition duration-300 hover:-translate-y-1 hover:border-[#65D9B5] hover:bg-[#65D9B5] hover:text-[#183D43]"

const Footer = () => {
  return (
    <footer className="bg-[#183D43] text-white">

      {/* Upar ki patli emerald line */}
      <div className="h-1 bg-[#269079]"></div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:px-10">

        {/* Logo aur about */}
        <div>
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-12 shrink-0 place-items-center overflow-hidden rounded-xl border-2 border-[#65D9B5]">
              <img src={logo} alt="" className="h-full w-full object-contain" />
            </div>
            <h2 className="text-lg font-bold leading-tight">
              Institute of <span className="block text-[#65D9B5]">Information Technology</span>
            </h2>
          </div>
          <p className="mt-4 text-sm leading-7 text-slate-300">
            Empowering students with modern IT education, practical skills, and industry-level training for a successful future.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className={heading}>Quick Links</h2>
          <ul className="flex flex-col gap-3">
            <li><Link to="/" className={linkItem}><FaArrowRightLong size={12} className="text-[#269079]" />Home</Link></li>
            <li><Link to="/about" className={linkItem}><FaArrowRightLong size={12} className="text-[#269079]" />About Us</Link></li>
            <li><Link to="/courses" className={linkItem}><FaArrowRightLong size={12} className="text-[#269079]" />Courses</Link></li>
            <li><Link to="/admission" className={linkItem}><FaArrowRightLong size={12} className="text-[#269079]" />Admission</Link></li>
            <li><Link to="/lms" className={linkItem}><FaArrowRightLong size={12} className="text-[#269079]" />LMS</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className={heading}>Contact Us</h2>
          <ul className="flex flex-col gap-4">
            <li>
              <a href="tel:+921234567890" className={linkItem}>
                <FaPhoneAlt className="shrink-0 text-[#65D9B5]" />+92 123 4567890
              </a>
            </li>
            <li>
              <a href="mailto:info@iit.edu" className={linkItem}>
                <MdEmail className="shrink-0 text-[#65D9B5]" size={18} />info@iit.edu
              </a>
            </li>
            <li className="flex items-start gap-2 text-slate-200">
              <FaMapMarkerAlt className="mt-1 shrink-0 text-[#65D9B5]" />123 Main Street, City, Country
            </li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h2 className={heading}>Follow Us</h2>
          <ul className="flex flex-wrap gap-3">
            <li><a href="https://facebook.com/your-page" target="_blank" rel="noreferrer" aria-label="Facebook" className={social}><FaFacebookF size={18} /></a></li>
            <li><a href="https://x.com/your-page" target="_blank" rel="noreferrer" aria-label="X (Twitter)" className={social}><FaXTwitter size={18} /></a></li>
            <li><a href="https://linkedin.com/company/your-page" target="_blank" rel="noreferrer" aria-label="LinkedIn" className={social}><FaLinkedin size={18} /></a></li>
            <li><a href="https://instagram.com/your-page" target="_blank" rel="noreferrer" aria-label="Instagram" className={social}><FaInstagram size={18} /></a></li>
          </ul>
        </div>

      </div>

      {/* Neeche ki copyright patti */}
      <div className="border-t border-[#65D9B5]/20 bg-[#12313A]">
        <p className="mx-auto max-w-7xl px-6 py-5 text-center text-sm text-slate-300 lg:px-10">
          © {new Date().getFullYear()} Institute of Information Technology. All rights reserved.
        </p>
      </div>

    </footer>
  )
}

export default Footer