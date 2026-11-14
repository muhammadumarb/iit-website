import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaUserGraduate, FaBookOpen, FaChalkboardTeacher } from 'react-icons/fa'

// Ginti: scroll par 0 se shuru ho kar apni value tak chalti hai
const Counter = ({ to, start }) => {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!start) return

    // Jinhon ne device mein animation kam kar rakhi ho, unhein seedha final number
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setValue(to)
      return
    }

    const duration = 1800
    const begin = performance.now()
    let frame

    const tick = (now) => {
      const progress = Math.min((now - begin) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3) // shuru mein tez, aakhir mein halka
      setValue(Math.round(to * eased))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [start, to])

  return <>{value.toLocaleString()}</>
}

// Typography aur styling ek jagah, taake badalna aasaan ho
const iconBox =
  "mx-auto grid h-[88px] w-[88px] place-items-center rounded-3xl bg-gradient-to-br from-[#33b594] to-[#269079] " +
  "text-4xl text-white shadow-xl shadow-[#269079]/50 transition-all duration-700 motion-reduce:transition-none"

const label = "mt-6 text-lg font-semibold tracking-wide text-slate-200"

const number =
  "mt-1 text-6xl font-extrabold leading-none tracking-tighter tabular-nums text-white md:text-7xl lg:text-8xl"

const plus = "text-[#65D9B5]"

const Stats= () => {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  // Section screen par aate hi ek dafa animation shuru
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  // Har column neeche se upar aata hai
  const column =
    "px-6 py-2 transition-all duration-700 ease-out motion-reduce:transition-none " +
    (visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0")

  // Icon halka sa ghoom kar apni jagah par aata hai
  const pop = visible ? "scale-100 rotate-0" : "scale-[.6] -rotate-[8deg]"

  return (
    <section ref={ref} className="relative isolate overflow-hidden bg-[#183D43]">

      {/* 1. Logo pattern: ulta kar ke halka safed, gehre rang par */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-30 bg-[url('/images/logo-pattern.webp')] bg-cover bg-center opacity-20 mix-blend-screen grayscale invert"
      ></div>

      {/* 2. Beech mein halki emerald roshni */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_50%_40%,rgba(38,144,121,0.35),transparent_60%)]"
      ></div>

      {/* 3. Gehri parat, taake text saaf parha jaye */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0f2a30]/35 to-[#0f2a30]/75"
      ></div>

      <div className="mx-auto max-w-6xl px-6 py-24 text-center text-white md:py-28">

        <div className="grid gap-14 md:grid-cols-3 md:gap-0 md:divide-x md:divide-white/15">

          {/* Stat 1 */}
          <div className={column} style={{ transitionDelay: '0ms' }}>
            <div className={`${iconBox} ${pop}`}><FaUserGraduate /></div>
            <p className={label}>Students Trained</p>
            <h3 className={number}>
              <Counter to={2500} start={visible} />
              <span className={plus}>+</span>
            </h3>
          </div>

          {/* Stat 2 */}
          <div className={column} style={{ transitionDelay: '150ms' }}>
            <div className={`${iconBox} ${pop}`}><FaBookOpen /></div>
            <p className={label}>Courses Offered</p>
            <h3 className={number}>
              <Counter to={12} start={visible} />
              <span className={plus}>+</span>
            </h3>
          </div>

          {/* Stat 3 */}
          <div className={column} style={{ transitionDelay: '300ms' }}>
            <div className={`${iconBox} ${pop}`}><FaChalkboardTeacher /></div>
            <p className={label}>Expert Trainers</p>
            <h3 className={number}>
              <Counter to={30} start={visible} />
              <span className={plus}>+</span>
            </h3>
          </div>

        </div>

        {/* Button */}
        <Link
          to="/courses"
          className="group mt-16 inline-flex items-center gap-3 rounded-full bg-[#269079] py-4 pl-9 pr-5 text-lg font-bold shadow-xl shadow-[#269079]/40 transition duration-300 hover:-translate-y-1 hover:bg-[#207C68]"
        >
          Explore Our Courses
          <span className="grid h-8 w-8 place-items-center rounded-full bg-white/20 transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </Link>

      </div>
    </section>
  )
}

export default Stats