import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const KEY = 'iit-welcome-seen'

const WelcomePopup = () => {
  const [open, setOpen] = useState(false)

  const close = () => {
    setOpen(false)
    try { sessionStorage.setItem(KEY, '1') } catch{}
  }

 
  useEffect(() => {
    let seen = false
    try { seen = sessionStorage.getItem(KEY) === '1' } catch { /* ignore */ }
    if (seen) return
    const t = setTimeout(() => setOpen(true), 1200)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && close()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  if (!open) return null

  return (
    <aside
      role="status"
      aria-live="polite"
      className="popup-in fixed bottom-3 right-3 z-50 w-[calc(100vw-1.5rem)] max-w-[360px] overflow-hidden rounded-2xl border border-[#183D43]/10 bg-white p-5 shadow-2xl shadow-[#183D43]/30 sm:bottom-6 sm:right-6"
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#183D43] via-[#269079] to-[#65D9B5]"></div>

      <button
        onClick={close}
        aria-label="Close"
        className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full text-xl text-[#647B7D] transition hover:bg-[#DDF3EC]"
      >
        ×
      </button>

      <span className="inline-flex items-center gap-2 rounded-full bg-[#DDF3EC] px-3 py-1 text-[13px] font-bold text-[#207C68]">
        <span className="h-[7px] w-[7px] rounded-full bg-[#F2C14E]"></span>
        Welcome to IIT
      </span>

      <h3 className="mt-3 font-['Fraunces',serif] text-[22px] font-semibold leading-tight text-[#183D43]">
        Admissions are open
      </h3>
      <p className="mt-1.5 text-[15px] text-[#52666A]">
        A new batch is starting soon. Apply online in two minutes.
      </p>

      <div className="mt-4 flex items-center gap-2.5">
        <Link
          to="/admission"
          onClick={close}
          className="rounded-[10px] bg-[#269079] px-5 py-2.5 text-[15px] font-bold text-white transition-colors hover:bg-[#207C68]"
        >
          Apply Now
        </Link>
        <button onClick={close} className="px-2 py-2 font-semibold text-[#647B7D] transition-colors hover:text-[#183D43]">
          Maybe later
        </button>
      </div>
    </aside>
  )
}

export default WelcomePopup