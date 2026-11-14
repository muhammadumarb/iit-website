import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const slides = [
  {
    eyebrow: "Admissions open",
    before: "Build a career in",
    accent: "technology",
    after: "you can be proud of.",
    text: "Practical IT courses, experienced trainers and certificates that employers can verify online.",
    button: "Explore Courses", to: "/courses",
    image: "/images/slide-1.webp",
  },
  {
    eyebrow: "New batch starting soon",
    before: "Learn skills that",
    accent: "get you hired",
    after: "faster.",
    text: "Choose your course, pick your class timing and apply online in two minutes.",
    button: "Apply Now", to: "/admission",
    image: "/images/slide-2.webp",
  },
  {
    eyebrow: "Verified certificates",
    before: "Proof of your skills,",
    accent: "one click",
    after: "away.",
    text: "Every IIT certificate can be checked online in seconds using its certificate ID.",
    button: "Verify Certificate", to: "/verify-certificate",
    image: "/images/slide-3.webp",
  },
]

const arrow =
  "grid h-11 w-11 place-items-center rounded-full border border-white/35 text-3xl text-gray-200 " +
  "transition hover:bg-[#65D9B5] hover:text-[#183D43] sm:h-[46px] sm:w-[46px]"

const HeroSlider = () => {
  const [current, setCurrent] = useState(0)
  const [touchStart, setTouchStart] = useState(null)
  const total = slides.length

  const go = (n) => setCurrent((n + total) % total)

  const onTouchEnd = (e) => {
    if (touchStart === null) return
    const diff = touchStart - e.changedTouches[0].clientX
    if (diff > 50) go(current + 1)
    if (diff < -50) go(current - 1)
    setTouchStart(null)
  }

  return (
    <section className="px-3 pb-7 pt-3 sm:px-6 lg:px-10">
      <div
        className="group relative mx-auto h-[560px] max-w-[1600px] overflow-hidden rounded-[22px] bg-[#183D43] shadow-2xl shadow-[#183D43]/40 sm:rounded-[28px] md:h-[640px] lg:h-[calc(100svh-7rem)] lg:max-h-[760px] lg:min-h-[600px]"
        role="region"
        aria-roledescription="carousel"
        aria-label="Highlights"
        onTouchStart={(e) => setTouchStart(e.touches[0].clientX)}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="flex h-full transition-transform duration-[800ms] ease-[cubic-bezier(.65,0,.35,1)] motion-reduce:transition-none"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((s, i) => {
            const Heading = i === 0 ? 'h1' : 'h2' // page par sirf ek h1
            return (
              <div
                key={s.eyebrow}
                role="group"
                aria-roledescription="slide"
                aria-label={`${i + 1} of ${total}`}
                aria-hidden={i !== current}
                className="relative flex h-full w-full shrink-0 items-center bg-gradient-to-br from-[#0f2a30] via-[#183D43] to-[#269079] bg-cover bg-center"
                style={{ backgroundImage: `url(${s.image})` }}
              >
               
                <div aria-hidden="true" className="absolute inset-0 bg-[url('/images/logo-pattern.webp')] bg-cover bg-center opacity-[.14] mix-blend-screen grayscale invert"></div>

                <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-[#0f2a30]/80 via-[#183D43]/35 to-[#183D43]/10"></div>

                <div className="relative max-w-3xl px-6 text-white sm:px-12 lg:px-20">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-sm font-semibold backdrop-blur">
                    <span className="h-2 w-2 rounded-full bg-[#F2C14E]"></span>
                    {s.eyebrow}
                  </span>

                  <Heading className="mt-5 font-['Fraunces',serif] text-[clamp(2.3rem,5.8vw,4.6rem)] font-semibold leading-[1.05] tracking-tight">
                    {s.before} <em className="italic text-[#65D9B5]">{s.accent}</em> {s.after}
                  </Heading>

                  <p className="mt-5 max-w-lg text-base leading-7 text-white/85 sm:text-lg">{s.text}</p>

                  <Link
                    to={s.to}
                    tabIndex={i === current ? 0 : -1}
                    className="mt-8 inline-block rounded-xl bg-[#269079] px-7 py-4 font-bold text-white shadow-xl shadow-[#269079]/40 transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#183D43]"
                  >
                    {s.button} →
                  </Link>
                </div>
              </div>
            )
          })}
        </div>

        <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-4 px-6 pb-6 text-white sm:px-12 lg:px-20">
          <div className="flex items-center gap-4 font-['Fraunces',serif] text-[15px] font-semibold tracking-wider">
            <span>0{current + 1} / 0{total}</span>
            <span className="h-[3px] w-[clamp(70px,12vw,140px)] overflow-hidden rounded bg-white/25">
              {/* key badalne se animation har slide par dobara shuru; khatam hote hi agli slide */}
              <span key={current} className="progress-bar" onAnimationEnd={() => go(current + 1)}></span>
            </span>
          </div>

          <div className="flex gap-2.5">
            <button onClick={() => go(current - 1)} aria-label="Previous slide" className={arrow}>‹</button>
            <button onClick={() => go(current + 1)} aria-label="Next slide" className={arrow}>›</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSlider