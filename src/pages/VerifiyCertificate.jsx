import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaSearch, FaCheckCircle, FaTimesCircle } from 'react-icons/fa'
import PageBanner from './PageBanner'

// Abhi mock data. Backend ke baad sirf ye function badlega, page nahi:
// const { data } = await axios.get(`/api/certificates/verify/${number}`)
const certificates = [
  { number: 'IIT-2026-001', name: 'Student Name', course: 'Web Development', issued: '30 June 2026' },
]

const verifyCertificate = async (number) => {
  await new Promise((resolve) => setTimeout(resolve, 900))
  return certificates.find((c) => c.number.toLowerCase() === number.toLowerCase()) || null
}

// Naya hissa halka sa neeche se upar aata hai
const FadeIn = ({ children }) => {
  const [on, setOn] = useState(false)

  useEffect(() => {
    const id = requestAnimationFrame(() => setOn(true))
    return () => cancelAnimationFrame(id)
  }, [])

  return (
    <div
      className={`transition-all duration-500 motion-reduce:transition-none ${
        on ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      }`}
    >
      {children}
    </div>
  )
}

const row = "flex items-center justify-between gap-4 px-5 py-3.5"
const rowLabel = "text-sm font-semibold text-[#647B7D]"
const rowValue = "text-right font-bold text-[#183D43]"

const VerifyCertificate = () => {
  const [number, setNumber] = useState('')
  const [error, setError] = useState('')
  const [status, setStatus] = useState('idle') // idle | checking | done
  const [result, setResult] = useState(null)   // certificate ya null (nahi mila)

  const onSubmit = async (e) => {
    e.preventDefault()
    const value = number.trim()

    if (value.length < 4) {
      setError('Please enter your certificate number.')
      return
    }

    setError('')
    setStatus('checking')
    setResult(await verifyCertificate(value))
    setStatus('done')
  }

  const reset = () => {
    setNumber('')
    setResult(null)
    setStatus('idle')
  }

  return (
    <>
      {/* <PageBanner
        title="Verify"
        accent="Certificate"
        text="Enter the certificate number to check that it is genuine."
        overlap
      /> */}

      <section className="bg-[#F4F8F6] mt-40 mb-23 pb-20 md:pb-28">
        <div className="relative z-10 mx-auto -mt-14 max-w-xl px-4 sm:px-6">

          <div className="relative overflow-hidden rounded-3xl border border-[#183D43]/10 bg-white p-7 shadow-2xl shadow-[#183D43]/15 sm:p-10">

            {/* Upar ki rang-birangi patti */}
            <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#183D43] via-[#269079] to-[#65D9B5]"></div>

            {/* 1. Form */}
            {status !== 'done' && (
              <FadeIn key="form">
                <h2 className="font-['Fraunces',serif] text-3xl font-semibold leading-tight tracking-tight text-[#183D43]">
                  Check a <em className="italic text-[#269079]">certificate</em>
                </h2>
                <p className="mt-2 text-[#52666A]">
                  Enter your certificate number to verify authenticity.
                </p>

                <form onSubmit={onSubmit} noValidate className="mt-7">
                  <label htmlFor="certNumber" className="mb-2 block text-sm font-semibold text-[#183D43]">
                    Certificate number
                  </label>

                  <div className="relative">
                    <FaSearch className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#647B7D]" />
                    <input
                      id="certNumber"
                      type="text"
                      value={number}
                      onChange={(e) => {
                        setNumber(e.target.value)
                        if (error) setError('')
                      }}
                      placeholder="e.g. IIT-2026-001"
                      autoComplete="off"
                      aria-invalid={Boolean(error)}
                      aria-describedby={error ? 'cert-error' : undefined}
                      className={`h-14 w-full rounded-xl border bg-[#F4F8F6] pl-12 pr-4 text-lg tracking-wide text-[#183D43] placeholder:text-[#647B7D]/70 transition focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#269079]/15 ${
                        error ? 'border-red-400 focus:border-red-500' : 'border-[#183D43]/15 focus:border-[#269079]'
                      }`}
                    />
                  </div>

                  {error && (
                    <p id="cert-error" className="mt-2 text-sm text-red-600">{error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'checking'}
                    className="mt-5 flex h-14 w-full items-center justify-center gap-3 rounded-2xl bg-[#269079] text-lg font-bold text-white shadow-xl shadow-[#269079]/30 transition duration-300 hover:-translate-y-1 hover:bg-[#207C68] disabled:cursor-wait disabled:opacity-70 disabled:hover:translate-y-0"
                  >
                    {status === 'checking' && (
                      <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/40 border-t-white"></span>
                    )}
                    {status === 'checking' ? 'Checking…' : 'Verify Certificate'}
                  </button>
                </form>
              </FadeIn>
            )}

            {/* 2. Certificate mil gaya */}
            {status === 'done' && result && (
              <FadeIn key="found">
                <div role="status" className="text-center">
                  <div className="mx-auto grid h-[72px] w-[72px] place-items-center rounded-full bg-[#DDF3EC] text-4xl text-[#269079]">
                    <FaCheckCircle />
                  </div>
                  <h2 className="mt-5 font-['Fraunces',serif] text-3xl font-semibold tracking-tight text-[#183D43]">
                    Valid <em className="italic text-[#269079]">certificate</em>
                  </h2>
                  <p className="mt-2 text-[#52666A]">This certificate was issued by IIT.</p>

                  <dl className="mt-7 divide-y divide-[#183D43]/10 rounded-2xl border border-[#183D43]/10 text-left">
                    <div className={row}><dt className={rowLabel}>Certificate number</dt><dd className={rowValue}>{result.number}</dd></div>
                    <div className={row}><dt className={rowLabel}>Student name</dt><dd className={rowValue}>{result.name}</dd></div>
                    <div className={row}><dt className={rowLabel}>Course</dt><dd className={rowValue}>{result.course}</dd></div>
                    <div className={row}><dt className={rowLabel}>Issued on</dt><dd className={rowValue}>{result.issued}</dd></div>
                  </dl>

                  <button
                    onClick={reset}
                    className="mt-7 rounded-xl border-2 border-[#269079] px-7 py-3 font-bold text-[#269079] transition-colors hover:bg-[#269079] hover:text-white"
                  >
                    Verify another certificate
                  </button>
                </div>
              </FadeIn>
            )}

            {/* 3. Certificate nahi mila */}
            {status === 'done' && !result && (
              <FadeIn key="missing">
                <div role="status" className="text-center">
                  <div className="mx-auto grid h-[72px] w-[72px] place-items-center rounded-full bg-red-50 text-4xl text-red-500">
                    <FaTimesCircle />
                  </div>
                  <h2 className="mt-5 font-['Fraunces',serif] text-3xl font-semibold tracking-tight text-[#183D43]">
                    Certificate <em className="italic text-red-500">not found</em>
                  </h2>
                  <p className="mx-auto mt-2 max-w-sm text-[#52666A]">
                    We could not find a certificate with the number <b className="text-[#183D43]">{number.trim()}</b>.
                    Please check the number and try again.
                  </p>

                  <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
                    <button
                      onClick={reset}
                      className="rounded-xl bg-[#269079] px-7 py-3 font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#207C68]"
                    >
                      Try again
                    </button>
                    <Link
                      to="/contact"
                      className="rounded-xl border-2 border-[#183D43]/20 px-7 py-3 font-bold text-[#183D43] transition-colors hover:border-[#183D43]"
                    >
                      Contact us
                    </Link>
                  </div>
                </div>
              </FadeIn>
            )}

          </div>

          <p className="mt-6 text-center text-sm text-[#647B7D]">
            The certificate number is printed on your certificate.
          </p>
        </div>
      </section>
    </>
  )
}

export default VerifyCertificate