
import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <section className="relative overflow-hidden bg-[#F4F8F6] text-[#183D43]">

      <div className="mx-auto grid min-h-[650px] max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:px-10">

        {/* Left Side */}
        <div className="z-10">

          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#269079]/30 bg-[#DDF3EC] px-4 py-2 text-sm font-medium text-[#207C68]">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#269079]"></span>
            Admissions Open · New Batch Starting Soon
          </div>

          <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Welcome to
            <span className="block text-[#269079]">
              Institute of Information
            </span>
            Technology
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-[#52666A] sm:text-lg">
            Practical IT courses, experienced trainers and certificates
            that employers can verify online. Start with the skill you
            want and build a career you can be proud of.
          </p>

        
          <div className="mt-9 flex flex-wrap items-center gap-4">

            <button className="rounded-xl bg-[#269079] px-7 py-4 font-semibold text-white shadow-lg shadow-[#269079]/25 transition duration-300 hover:-translate-y-1 hover:bg-[#207C68]">
              <Link to="/courses" className="text-inherit no-underline">
                Explore Courses →
              </Link>
            </button>

            <button className="rounded-xl border border-[#183D43]/30 px-7 py-4 font-semibold text-[#183D43] transition duration-300 hover:border-[#269079] hover:bg-[#DDF3EC] hover:text-[#207C68]">
              <Link to="/contact" className="text-inherit no-underline">
                Contact Us
              </Link>
            </button>

          </div>

          {/* Stats */}
          <div className="mt-14 flex flex-wrap gap-10 border-t border-[#183D43]/15 pt-8">

            <div>
              <h3 className="text-3xl font-bold text-[#183D43]">10+</h3>
              <p className="mt-1 text-sm text-[#647B7D]">IT Courses</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-[#183D43]">Expert</h3>
              <p className="mt-1 text-sm text-[#647B7D]">Instructors</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-[#183D43]">100%</h3>
              <p className="mt-1 text-sm text-[#647B7D]">Practical Learning</p>
            </div>

          </div>

        </div>

        {/* Right Side */}
        <div className="relative">

          <div className="absolute -inset-5 rounded-3xl bg-[#269079]/20 blur-3xl"></div>

          <div className="relative overflow-hidden rounded-3xl border border-[#269079]/20 shadow-2xl">

            <video
              className="h-[350px] w-full object-cover sm:h-[450px] lg:h-[520px]"
              loop
              autoPlay
              muted
              playsInline
            >
              <source src="/videos/video1.mp4" type="video/mp4" />
            </video>

            <div className="absolute inset-0 bg-gradient-to-t from-[#183D43]/50 via-transparent to-transparent"></div>

          </div>

         
          <div className="absolute -bottom-6 -left-5 rounded-2xl border border-[#269079]/20 bg-white p-5 shadow-xl sm:-left-10">

            <p className="text-sm text-[#647B7D]">
              Your Future Starts Here
            </p>

            <h3 className="mt-1 text-lg font-bold text-[#183D43]">
              Learn. Build. Succeed.
            </h3>

          </div>

        </div>

      </div>

      <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-[#269079]/10 blur-3xl"></div>
   
    </section>
  )
}

export default Home
