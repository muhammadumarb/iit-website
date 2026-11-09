import React from 'react'
import { Link } from 'react-router-dom'

const image = '' 

const item =
  "flex items-start gap-3 rounded-xl border border-deep/10  bg-white p-4 font-semibold text-deep shadow-sm"
const tick =
  "mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-green-500 text-sm text-white"

const About = () => {
  return (
    <div className="bg-cloud">
      {/* Header */}
      <div className="bg-deep text-white">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h1 className="text-4xl font-extrabold text-[#183D43] md:text-5xl">About Us</h1>
          <p className="mt-3 max-w-xl text-lg  text-gray-600">Who we are and what we stand for.</p>
        </div>
      </div>

      
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2">
        <div className="space-y-5 text-lg leading-relaxed text-deep/80">
          <p>
            Welcome to the Institute of Information Technology (IIT), where we empower the next
            generation of IT professionals. With over a decade of excellence, we have trained
            thousands of students who are now working in leading companies worldwide.
          </p>
          <p>
            Our institution is committed to providing industry-relevant education combined with
            hands-on practical experience. Our expert instructors bring real-world knowledge and
            experience to every classroom.
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl border border-deep/10 bg-mint shadow-lg">
          {image ? (
            <img src={image} alt="IIT campus and students" className="h-full w-full object-cover" />
          ) : (
            <div className="grid aspect-[4/3] place-items-center p-6 text-center font-semibold text-deep/50">
             
            </div>
          )}
        </div>
      </div>

      {/* Why choose IIT */}
      <div className="bg-mint/60">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h3 className="text-3xl font-bold text-deep md:text-4xl">Why Choose IIT?</h3>
          <p className="mt-2 max-w-xl text-deep/70">Five reasons students pick us.</p>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <li className={item}><span className={tick}>✓</span>Comprehensive IT Courses</li>
            <li className={item}><span className={tick}>✓</span>Experienced Instructors</li>
            <li className={item}><span className={tick}>✓</span>Hands-on Practical Learning</li>
            <li className={item}><span className={tick}>✓</span>Industry-Recognized Certifications</li>
            <li className={item}><span className={tick}>✓</span>Career Support and Guidance</li>
          </ul>
        </div>
      </div>

    
     {/* Call to action */}
<div className="mx-auto max-w-6xl px-4 py-16">
  <div className="flex flex-col items-start justify-between gap-6 rounded-3xl bg-[#183D43] p-8 text-white md:flex-row md:items-center md:p-12">
    <div>
      <h3 className="text-2xl font-bold text-white md:text-3xl">Ready to start your IT career?</h3>
      <p className="mt-2 text-[#DDF3EC]">Apply online or explore our courses first.</p>
    </div>
    <div className="flex flex-wrap gap-3">
      <Link
        to="/admission"
        className="rounded-xl bg-[#269079] px-7 py-3.5 font-bold text-white transition-colors hover:bg-white hover:text-[#183D43]"
      >
        Apply Now
      </Link>
      <Link
        to="/courses"
        className="rounded-xl border border-white/30 px-7 py-3.5 font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
      >
        View Courses
      </Link>
    </div>
  </div>
</div>
    </div>
  )
}

export default About