import React from 'react'
import { Link } from 'react-router-dom'


const card =
  "flex flex-col overflow-hidden rounded-2xl border border-deep/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
const img = "h-48 w-full bg-mint object-cover"
const enroll =
  "flex-1 rounded-xl bg-[#269079] px-4 py-3 text-center font-bold text-white transition-colors hover:bg-deep"
const detail =
  "flex-1 rounded-xl border-2 border-deep/15 px-4 py-3 text-center font-semibold text-deep transition-colors hover:border-brand hover:text-brand"

const PopularCourses = () => {
  return (
    <section className="bg-cloud">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-extrabold text-deep text-[#183D43] md:text-5xl">Popular Courses</h1>
          <p className="mt-4 text-lg text-deep/70">
            Choose from our wide range of industry-leading courses designed to boost your IT career.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          <div className={card}>
            <img src="/images/web-development.webp" alt="Web Development course" className={img} />
            <div className="flex-1 p-6">
              <h3 className="text-xl font-bold text-deep">Web Development</h3>
              <p className="mt-2 text-deep/70">
                Learn HTML, CSS, JavaScript, React and Node.js by building real projects.
              </p>
            </div>
            <div className="flex gap-3 px-6 pb-6">
              <Link to="/admission" className={enroll}>Enroll Now</Link>
              <Link to="/courses" className={detail}>Detail</Link>
            </div>
          </div>

          <div className={card}>
            <img src="/images/graphic-designing.webp" alt="Graphic Designing course" className={img} />
            <div className="flex-1 p-6">
              <h3 className="text-xl font-bold text-deep">Graphic Designing</h3>
              <p className="mt-2 text-deep/70">
                Master Photoshop, Illustrator and Figma to create logos, posts and brand designs.
              </p>
            </div>
            <div className="flex gap-3 px-6 pb-6">
              <Link to="/admission" className={enroll}>Enroll Now</Link>
              <Link to="/courses" className={detail}>Detail</Link>
            </div>
          </div>

          <div className={card}>
            <img src="/images/digital-marketing.webp" alt="Digital Marketing course" className={img} />
            <div className="flex-1 p-6">
              <h3 className="text-xl font-bold text-deep">Digital Marketing</h3>
              <p className="mt-2 text-deep/70">
                Understand SEO, social media ads and analytics to grow any business online.
              </p>
            </div>
            <div className="flex gap-3 px-6 pb-6">
              <Link to="/admission" className={enroll}>Enroll Now</Link>
              <Link to="/courses" className={detail}>Detail</Link>
            </div>
          </div>

        </div>

        {/* link */}
        <div className="mt-10 text-center">
          <Link to="/courses" className="font-semibold text-brand hover:underline">
            View all courses →
          </Link>
        </div>
      </div>
    </section>
  )
}

export default PopularCourses