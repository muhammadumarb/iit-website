import React from 'react'
import { Link } from 'react-router-dom'

const portals = [
  { id: 'admin-login', title: 'Admin Portal', subtitle: 'Manage courses, students and learning activities.', action: 'Admin Login', icon: '⌘', tone: 'from-[#183D43] to-[#245b5b]' },
  { id: 'student-login', title: 'Student Portal', subtitle: 'Access your classes, lessons and learning progress.', action: 'Student Login', icon: '♙', tone: 'from-[#207c68] to-[#269079]' },
]

const LMSPortalSection = () => (
  <section aria-labelledby="lms-heading" className="bg-white px-4 py-16 sm:px-6 md:py-24">
    <div className="mx-auto max-w-6xl">
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <span className="inline-flex rounded-full bg-[#DDF3EC] px-4 py-2 text-sm font-bold text-[#207C68]">Learning Management System</span>
        <h2 id="lms-heading" className="mt-4 text-[clamp(2rem,5vw,3.5rem)] font-extrabold leading-tight text-[#183D43]">Your learning, <span className="text-[#269079]">one portal away</span></h2>
        <p className="mt-4 text-base leading-7 text-[#52666A] sm:text-lg">Choose the portal that matches your role at the Institute of Information Technology.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {portals.map((portal) => (
          <article id={portal.id} key={portal.id} className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${portal.tone} p-7 text-white shadow-xl sm:p-10`}>
            <div aria-hidden="true" className="absolute -right-10 -top-10 h-48 w-48 rounded-full border-[24px] border-white/10" />
            <div className="relative">
              <span className="grid h-14 w-14 place-items-center rounded-2xl border border-white/20 bg-white/10 text-3xl">{portal.icon}</span>
              <h3 className="mt-6 text-2xl font-extrabold sm:text-3xl">{portal.title}</h3>
              <p className="mt-3 max-w-md leading-7 text-white/80">{portal.subtitle}</p>
              <Link to={`/lms#${portal.id}`} className="mt-7 inline-flex min-h-12 items-center justify-center rounded-xl bg-white px-6 py-3 font-bold text-[#183D43] transition hover:-translate-y-0.5 hover:bg-[#DDF3EC]">{portal.action} <span className="ml-2" aria-hidden="true">→</span></Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
)

export default LMSPortalSection
