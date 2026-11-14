import React from 'react'
import { Link } from 'react-router-dom'

// Har andar wale page ka upar wala banner: About, Verify Certificate, Courses...
// overlap: true ho to neeche ka card banner ke upar thora chadh sakta hai
const PageBanner = ({ title, accent, text, overlap = false }) => {
  return (
    <section className="px-3 pt-3 sm:px-6 lg:px-10">
      <div
        className={`relative isolate mx-auto max-w-[1600px] overflow-hidden rounded-[22px] bg-gradient-to-br from-[#0f2a30] via-[#183D43] to-[#269079] px-5 pt-16 text-center text-white sm:rounded-[28px] md:pt-24 ${
          overlap ? 'pb-24 md:pb-32' : 'pb-16 md:pb-24'
        }`}
      >
        {/* Logo ka pattern, ulta kar ke bohat halka */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[url('/images/logo-pattern.webp')] bg-cover bg-center opacity-[.14] mix-blend-screen grayscale invert"
        ></div>

        {/* Home > Page ka naam */}
        <nav
          aria-label="Breadcrumb"
          className="inline-flex items-center gap-2.5 rounded-full border border-white/25 bg-white/10 px-[18px] py-[7px] text-sm font-semibold backdrop-blur"
        >
          <Link to="/" className="text-white/75 transition-colors hover:text-white">Home</Link>
          <span className="h-1.5 w-1.5 rounded-full bg-[#F2C14E]"></span>
          <span>{title} {accent}</span>
        </nav>

        <h1 className="mt-5 font-['Fraunces',serif] text-[clamp(2.8rem,8.5vw,5.6rem)] font-semibold leading-none tracking-tighter">
          {title} <em className="italic text-[#65D9B5]">{accent}</em>
        </h1>

        {text && (
          <p className="mx-auto mt-5 max-w-xl text-base text-white/80 sm:text-lg">{text}</p>
        )}
      </div>
    </section>
  )
}

export default PageBanner