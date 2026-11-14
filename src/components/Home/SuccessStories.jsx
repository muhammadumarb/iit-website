import React, { useEffect, useState } from 'react'

// Misaal ki stories. Asli students ki ijazat se asli lafz aur naam likhein.
// photo khali ho to naam ke pehle harf wala gola dikhta hai.
const stories = [
  {
    quote: "I went from zero IT knowledge to landing a job at a top company.",
    name: "Student Name",
    course: "Web Development",
    photo: "",
  },
  {
    quote: "The projects helped me find my first freelance clients within two months.",
    name: "Student Name",
    course: "Graphic Designing",
    photo: "",
  },
  {
    quote: "Clear lessons and trainers who answer every question, even after class.",
    name: "Student Name",
    course: "Digital Marketing",
    photo: "",
  },
  {
    quote: "The certificate was verified online in seconds, and my employer trusted it.",
    name: "Student Name",
    course: "Python Programming",
    photo: "",
  },
]

const total = stories.length

// Loop beech mein na toote, is liye shuru ki 3 stories aakhir mein dobara lagate hain
const items = [...stories, ...stories.slice(0, 3)]

const initials = (name) =>
  name.split(' ').map((word) => word[0]).join('').slice(0, 2)

const arrow =
  "grid h-[50px] w-[50px] place-items-center rounded-full border-[1.5px] border-[#183D43]/25 bg-white text-2xl " +
  "text-[#183D43] transition hover:border-[#183D43] hover:bg-[#183D43] hover:text-white"

const SuccessStories = () => {
  const [index, setIndex] = useState(0)        // kitne card aage nikal chuke hain
  const [animate, setAnimate] = useState(true) // false: bina animation ke jump
  const [paused, setPaused] = useState(false)

  const next = () => {
    setAnimate(true)
    setIndex((i) => i + 1)
  }

  const prev = () => {
    if (index === 0) {
      // Pehli story se pehle: chupke se aakhir ke clone par jao,
      // phir ek kadam peeche animate karo
      setAnimate(false)
      setIndex(total)
      requestAnimationFrame(() =>
        requestAnimationFrame(() => {
          setAnimate(true)
          setIndex(total - 1)
        })
      )
    } else {
      setAnimate(true)
      setIndex((i) => i - 1)
    }
  }

  // Har 4.5 second baad agla card. Mouse upar ho to ruk jaye.
  // Jin logon ne device mein animation kam kar rakhi ho, unke liye auto-play band.
  useEffect(() => {
    if (paused) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const timer = setInterval(next, 4500)
    return () => clearInterval(timer)
  }, [paused])

  // Clone tak pohonch jaye to chupke se asli pehle card par wapas
  const onEnd = (e) => {
    if (e.propertyName === 'transform' && index >= total) {
      setAnimate(false)
      setIndex(0)
    }
  }

  return (
    <section id="stories" className="relative isolate overflow-hidden bg-[#F4F8F6]">

      {/* Logo ka pattern, halka */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-[url('/images/logo-pattern.webp')] bg-cover bg-center opacity-50"
      ></div>

      {/* Safed dhundlapan, taake cards saaf nazar aayen */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-b from-[#F4F8F6]/90 via-[#F4F8F6]/80 to-[#F4F8F6]/95"
      ></div>

      <div className="mx-auto max-w-[1240px] px-4 py-16 sm:px-6 md:py-24 lg:px-10">

        {/* Heading (left) aur arrows (right) */}
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div>
            <h2 className="font-['Fraunces',serif] text-[clamp(2.2rem,5vw,3.6rem)] font-semibold leading-none tracking-tight text-[#183D43]">
              Success <em className="italic text-[#269079]">Stories</em>
            </h2>
            <p className="mt-3 max-w-md text-lg text-[#52666A]">
              Real students, real careers.
            </p>
          </div>

          <div className="flex gap-2.5">
            <button onClick={prev} aria-label="Previous story" className={arrow}>‹</button>
            <button onClick={next} aria-label="Next story" className={arrow}>›</button>
          </div>
        </div>

        {/* Cards */}
        <div
          className="-mx-3 mt-11 overflow-hidden pb-6 pt-4"
          role="region"
          aria-roledescription="carousel"
          aria-label="Success stories"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          <div className="flex" onTransitionEnd={onEnd}>
            {items.map((s, i) => (
              <div
                key={i}
                className="shrink-0 basis-full px-3 md:basis-1/2 lg:basis-1/3"
                style={{
                  // % yahan card ki apni chaurai ka hai, isliye har kadam ek card ke barabar
                  transform: `translateX(-${index * 100}%)`,
                  transition: animate ? 'transform 1000ms ease-in-out' : 'none',
                }}
              >
                <figure className="flex h-full flex-col justify-between rounded-[26px] border border-[#183D43]/10 bg-white px-7 pb-6 pt-8 shadow-xl shadow-[#183D43]/10 transition duration-300 hover:-translate-y-1.5 hover:shadow-2xl">

                  <div>
                    <span
                      aria-hidden="true"
                      className="block h-10 font-['Fraunces',serif] text-[84px] leading-[.7] text-[#65D9B5]"
                    >
                      “
                    </span>
                    <blockquote className="mt-1.5 font-['Fraunces',serif] text-xl font-semibold leading-snug text-[#183D43] sm:text-[21px]">
                      {s.quote}
                    </blockquote>
                  </div>

                  <figcaption className="mt-6 flex items-center gap-3.5 border-t border-[#183D43]/10 pt-5">
                    {s.photo ? (
                      <img
                        src={s.photo}
                        alt={s.name}
                        className="h-[54px] w-[54px] shrink-0 rounded-full object-cover ring-2 ring-white ring-offset-2 ring-offset-[#269079]/40"
                      />
                    ) : (
                      <span className="grid h-[54px] w-[54px] shrink-0 place-items-center rounded-full bg-gradient-to-br from-[#33b594] to-[#183D43] font-bold text-white ring-2 ring-white ring-offset-2 ring-offset-[#269079]/40">
                        {initials(s.name)}
                      </span>
                    )}

                    <div>
                      <b className="block text-[#183D43]">{s.name}</b>
                      <span className="mt-0.5 inline-block rounded-full bg-[#DDF3EC] px-2.5 py-0.5 text-[12.5px] font-bold text-[#207C68]">
                        {s.course}
                      </span>
                      <span className="mt-1 block text-sm tracking-[3px] text-[#F2C14E]" aria-label="5 out of 5 stars">
                        ★★★★★
                      </span>
                    </div>
                  </figcaption>

                </figure>
              </div>
            ))}
          </div>
        </div>

        {/* Dots: abhi kaunsi story hai */}
        <div className="flex justify-center gap-2">
          {stories.map((s, i) => (
            <span
              key={i}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index % total ? 'w-7 bg-[#269079]' : 'w-2 bg-[#183D43]/25'
              }`}
            ></span>
          ))}
        </div>

      </div>
    </section>
  )
}

export default SuccessStories