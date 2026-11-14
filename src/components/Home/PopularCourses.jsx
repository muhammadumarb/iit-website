import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  FaCode, FaPaintBrush, FaBullhorn, FaPython, FaShieldAlt,
  FaMobileAlt, FaFileExcel, FaRobot, FaPenNib, FaVideo, FaClock,
} from 'react-icons/fa'

// Misaal ke courses. Apne asli courses, level aur muddat likhein.
// image khali ho to teal gradient aur icon dikhta hai.
// isNew: true wale course par NEW ka nishan lagta hai.
const courses = [
  { id: 1,  title: "Web Development",    level: "Beginner to advanced", duration: "6 months", icon: FaCode,        image: "", isNew: true },
  { id: 2,  title: "Graphic Designing",  level: "Beginner",             duration: "3 months", icon: FaPaintBrush,  image: "", isNew: true },
  { id: 3,  title: "Digital Marketing",  level: "Beginner",             duration: "3 months", icon: FaBullhorn,    image: "", isNew: true },
  { id: 4,  title: "Python Programming", level: "Beginner",             duration: "4 months", icon: FaPython,      image: "", isNew: true },
  { id: 5,  title: "Cyber Security",     level: "Intermediate",         duration: "4 months", icon: FaShieldAlt,   image: "", isNew: false },
  { id: 6,  title: "App Development",    level: "Intermediate",         duration: "5 months", icon: FaMobileAlt,   image: "", isNew: false },
  { id: 7,  title: "Office Automation",  level: "Beginner",             duration: "2 months", icon: FaFileExcel,   image: "", isNew: false },
  { id: 8,  title: "AI Tools for Work",  level: "Beginner",             duration: "2 months", icon: FaRobot,       image: "", isNew: false },
  { id: 9,  title: "UI/UX Design",       level: "Intermediate",         duration: "3 months", icon: FaPenNib,      image: "", isNew: false },
  { id: 10, title: "Video Editing",      level: "Beginner",             duration: "3 months", icon: FaVideo,       image: "", isNew: false },
]

const FIRST = 8 // shuru mein kitne dikhane hain
const STEP = 4  // Load More par kitne aur

const PopularCourses = () => {
  const ref = useRef(null)
  const [seen, setSeen] = useState(false)
  const [visible, setVisible] = useState(FIRST)

  // Grid screen par aate hi cards animate hon
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

  return (
    <section id="courses" className="bg-[#F4F8F6]">
      <div className="mx-auto max-w-[1240px] px-4 py-16 sm:px-6 md:py-24 lg:px-10">

        {/* Heading (left) aur View All (right) */}
        <div className="flex flex-wrap items-end justify-between gap-5">
          {/* Heading, beech mein */}
<div className="mx-auto max-w-2xl text-center">
  <h2 className="font-['Fraunces',serif] text-[clamp(2.2rem,5vw,3.6rem)] font-semibold leading-none tracking-tight text-[#183D43]">
    Popular <em className="italic text-[#269079]">Courses</em>
  </h2>
  <p className="mt-4 text-lg text-[#52666A]">
    Pick a course, check the details and apply online.
  </p>
</div>

        </div>

        {/* Cards */}
        <div ref={ref} className="mt-11 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {courses.slice(0, visible).map((c, i) => {
            const Icon = c.icon
            return (
              <article
                key={c.id}
                style={{ animationDelay: `${(i % 4) * 90}ms` }}
                className={`group flex flex-col overflow-hidden rounded-[20px] border border-[#183D43]/10 bg-white shadow-lg shadow-[#183D43]/5 transition duration-300 hover:-translate-y-1.5 hover:border-[#269079]/50 hover:shadow-2xl hover:shadow-[#183D43]/20 ${
                  seen ? 'card-in' : 'opacity-0'
                }`}
              >
                {/* Tasveer ya gradient */}
                <div className="relative grid h-[150px] place-items-center overflow-hidden bg-gradient-to-br from-[#183D43] to-[#269079]">
                  {c.image ? (
                    <img src={c.image} alt={c.title} className="h-full w-full object-cover" />
                  ) : (
                    <>
                      <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(101,217,181,0.35),transparent_55%)]"></div>
                      <Icon className="relative text-5xl text-white drop-shadow-lg transition-transform duration-500 group-hover:-rotate-3 group-hover:scale-110" />
                    </>
                  )}

                  {c.isNew && (
                    <span className="absolute left-3 top-3 rounded-full bg-[#F2C14E] px-2.5 py-0.5 text-xs font-extrabold tracking-wider text-[#183D43]">
                      NEW
                    </span>
                  )}
                </div>

                {/* Naam aur level */}
                <div className="flex-1 px-5 pb-1.5 pt-4">
                  <h3 className="min-h-[47px] text-lg font-bold leading-snug text-[#183D43]">{c.title}</h3>
                  <p className="mt-2 text-sm text-[#647B7D]">{c.level}</p>
                </div>

                {/* Neeche ki patti: View Details aur muddat */}
                <div className="mt-3 flex items-center justify-between border-t border-[#183D43]/10 px-5 py-3.5 text-sm">
                  <Link
                    to="/courses"
                    className="font-bold text-[#269079] transition-colors hover:text-[#183D43]"
                  >
                    View Details →
                  </Link>
                  <span className="flex items-center gap-1.5 font-semibold text-[#647B7D]">
                    <FaClock size={12} /> {c.duration}
                  </span>
                </div>
              </article>
            )
          })}
        </div>

        {/* Load More: sab dikh jayen to ghayab */}
        {visible < courses.length && (
          <div className="mt-11 text-center flex flex-wrap items-center justify-center gap-4.5">
            <button
              onClick={() => setVisible((v) => v + STEP)}
              className="rounded-full border-2 border-[#183D43] px-9 py-3 font-bold text-[#183D43] transition duration-300 hover:bg-[#183D43] hover:text-white"
            >
              Load More
            </button>
             <Link
    to="/courses"
    className="rounded-full bg-[#183D43] px-8 py-3.5  font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#269079]"
  >
    View All Courses →
  </Link>
          </div>
        )}

      </div>
    </section>
  )
}

export default PopularCourses