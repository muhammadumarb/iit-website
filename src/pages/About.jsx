import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaLaptopCode, FaChalkboardTeacher, FaCertificate } from 'react-icons/fa'
import PageBanner from './PageBanner'

// Apni asli photo ka path yahan likhein, jaise "/images/campus.webp".
// Khali ho to logo pattern wala gehra frame dikhta hai.
const photo = ''

const point = "flex items-start gap-4"
const pointIcon =
  "grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#DDF3EC] text-xl text-[#269079] " +
  "transition duration-300 group-hover:-translate-y-1 group-hover:bg-[#269079] group-hover:text-white"

const About = () => {
  const ref = useRef(null)
  const [seen, setSeen] = useState(false)

  // Section screen par aate hi ek dafa animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSeen(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const fromTop =
    "transition-all duration-700 ease-out motion-reduce:transition-none " +
    (seen ? "translate-y-0 opacity-100" : "-translate-y-6 opacity-0")
  const fromLeft =
    "transition-all duration-[800ms] ease-out motion-reduce:transition-none " +
    (seen ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0")
  const fromRight =
    "transition-all delay-150 duration-[800ms] ease-out motion-reduce:transition-none " +
    (seen ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0")

  return (
    <section id="about" ref={ref} className="bg-white">

      {/* Upar: bara heading, beech mein */}
      <div className={`px-5 pb-0 pt-16 text-center md:pt-24 ${fromTop}`}>
        <span className="inline-flex items-center gap-2 rounded-full bg-[#DDF3EC] px-4 py-1.5 text-sm font-semibold text-[#207C68]">
          <span className="h-2 w-2 rounded-full bg-[#F2C14E]"></span>
          About IIT
        </span>

        <h2 className="mt-5 font-['Fraunces',serif] text-[clamp(3rem,8.5vw,6rem)] font-semibold leading-none tracking-tighter text-[#183D43]">
          About <em className="italic text-[#269079]">Us</em>
        </h2>

        <div className="mx-auto mt-6 h-1 w-[72px] rounded bg-[#269079]"></div>
      </div>

      {/* Neeche: tasveer aur text, ek hi seedh mein */}
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-16 pt-10 sm:px-8 md:pb-24 lg:grid-cols-[1fr_1.05fr] lg:gap-20 lg:px-10 lg:pt-14">

        {/* Left: arch wala frame */}
        <div className={fromLeft}>
          <div className="relative mx-auto w-full max-w-[440px]">

            {/* Peeche ki patli lakeer */}
            <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-t-[999px] rounded-b-[28px] border-2 border-[#269079]/40"></div>

            {/* Asli frame */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-t-[999px] rounded-b-[28px] bg-gradient-to-br from-[#183D43] to-[#269079] shadow-2xl shadow-[#183D43]/40">
              {photo ? (
                <img src={photo} alt="IIT campus and students" className="h-full w-full object-cover" />
              ) : (
                <div
                  role="img"
                  aria-label="Placeholder for an IIT campus photo"
                  className="h-full w-full bg-[url('/images/logo-pattern.webp')] bg-cover bg-center opacity-20 mix-blend-screen grayscale invert"
                ></div>
              )}
            </div>

            {/* Neeche ka chhota card */}
            <div className="absolute -bottom-5 right-0 flex items-center gap-3 rounded-[18px] border border-[#183D43]/10 bg-white py-3.5 pl-3.5 pr-5 shadow-2xl shadow-[#183D43]/25 sm:-right-6">
              <span className="grid h-[46px] w-[46px] place-items-center rounded-[13px] bg-[#DDF3EC] text-[#269079]">
                <FaLaptopCode size={20} />
              </span>
              <div>
                <p className="font-bold text-[#183D43]">Learn by building</p>
                <p className="text-[13px] text-[#647B7D]">Project-based courses</p>
              </div>
            </div>

          </div>
        </div>

        {/* Right: text, bayen kinare se sidha */}
        <div className={`text-left ${fromRight}`}>

          <h3 className="font-['Fraunces',serif] text-[clamp(1.7rem,3vw,2.4rem)] font-semibold leading-[1.15] tracking-tight text-[#183D43]">
            Where IT skills turn into <em className="italic text-[#269079]">careers</em>
          </h3>

          <p className="mt-5 max-w-xl text-lg text-justify leading-8 text-[#52666A]">
            Welcome to the Institute of Information Technology (IIT), where we empower the next
            generation of IT professionals. Our institution is committed to industry-relevant
            education combined with hands-on practical experience.
          </p>

          <ul className="mt-8 flex flex-col gap-5">
            <li className={`group ${point}`}>
              <span className={pointIcon}><FaLaptopCode /></span>
              <div>
                <b className="block text-[17px] text-[#183D43]">Hands-on practical learning</b>
                <span className="text-[15px] text-[#647B7D]">Every course is built around real projects.</span>
              </div>
            </li>

            <li className={`group ${point}`}>
              <span className={pointIcon}><FaChalkboardTeacher /></span>
              <div>
                <b className="block text-[17px] text-[#183D43]">Experienced instructors</b>
                <span className="text-[15px] text-[#647B7D]">Real-world knowledge in every classroom.</span>
              </div>
            </li>

            <li className={`group ${point}`}>
              <span className={pointIcon}><FaCertificate /></span>
              <div>
                <b className="block text-[17px] text-[#183D43]">Industry-recognized certificates</b>
                <span className="text-[15px] text-[#647B7D]">Verified online in seconds.</span>
              </div>
            </li>
          </ul>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              to="/about"
              className="rounded-xl bg-[#269079] px-7 py-4 font-bold text-white shadow-xl shadow-[#269079]/30 transition duration-300 hover:-translate-y-1 hover:bg-[#207C68]"
            >
              Know More About Us →
            </Link>
            <Link
              to="/admission"
              className="border-b-2 border-[#65D9B5] px-2 py-3 font-bold text-[#183D43] transition-colors hover:text-[#269079]"
            >
              Apply Now
            </Link>
          </div>

        </div>

      </div>
    </section>
  )
}

export default About