import React, { useState } from 'react'
import { FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

// Styling ek jagah, taake badalna aasaan ho
const input =
  "w-full rounded-xl border bg-[#F4F8F6] px-4 py-3.5 text-[#183D43] placeholder:text-[#647B7D]/70 " +
  "transition focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#269079]/15"
const okBorder = "border-[#183D43]/15 focus:border-[#269079]"
const badBorder = "border-red-400 focus:border-red-500"
const label = "mb-2 block text-sm font-semibold text-[#183D43]"
const errorText = "mt-1.5 text-sm text-red-600"
const iconBox = "grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[#DDF3EC] text-[#269079]"

const ContactSection = () => {
  const [form, setForm] = useState({ name: '', subject: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | sent

  // Likhte hi us field ka error hat jaye
  const onChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
    if (errors[name]) setErrors({ ...errors, [name]: '' })
  }

  const validate = () => {
    const found = {}
    if (form.name.trim().length < 2) found.name = 'Please enter your name.'
    if (form.subject.trim().length < 3) found.subject = 'Please add a short subject.'
    if (form.message.trim().length < 10) found.message = 'Message should be at least 10 characters.'
    return found
  }

  const onSubmit = async (e) => {
    e.preventDefault()

    const found = validate()
    setErrors(found)
    if (Object.keys(found).length > 0) return

    setStatus('sending')

    // Backend ke baad yahan asli call lagegi: await submitContact(form)
    await new Promise((resolve) => setTimeout(resolve, 900))
    console.log(form)

    setStatus('sent')
    setForm({ name: '', subject: '', message: '' })
  }

  return (
    <section id="contact" className="bg-[#F4F8F6]">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:py-24 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">

        {/* Left: text aur contact ki maloomat */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-[#DDF3EC] px-4 py-1.5 text-sm font-semibold text-[#207C68]">
            <span className="h-2 w-2 rounded-full bg-[#269079]"></span>
            Contact
          </span>

          <h2 className="mt-5 text-4xl font-extrabold leading-[1.1] tracking-tight text-[#183D43] md:text-5xl">
            Get in Touch
          </h2>
          <div className="mt-5 h-1 w-14 rounded bg-[#269079]"></div>

          <p className="mt-5 max-w-md text-lg leading-8 text-[#52666A]">
            Have a question about a course, admission or fees? Send us a message and we will get back to you.
          </p>

          <ul className="mt-9 flex flex-col gap-5">
            <li className="flex items-center gap-4">
              <span className={iconBox}><FaPhoneAlt /></span>
              <div>
                <p className="text-xs font-semibold text-[#647B7D]">Phone</p>
                <p className="font-semibold text-[#183D43]">+92 123 4567890</p>
              </div>
            </li>
            <li className="flex items-center gap-4">
              <span className={iconBox}><MdEmail size={20} /></span>
              <div>
                <p className="text-xs font-semibold text-[#647B7D]">Email</p>
                <p className="font-semibold text-[#183D43]">info@iit.edu</p>
              </div>
            </li>
            <li className="flex items-center gap-4">
              <span className={iconBox}><FaMapMarkerAlt /></span>
              <div>
                <p className="text-xs font-semibold text-[#647B7D]">Address</p>
                <p className="font-semibold text-[#183D43]">123 Main Street, City, Country</p>
              </div>
            </li>
          </ul>
        </div>

        {/* Right: form ka card */}
        <div className="relative overflow-hidden rounded-3xl border border-[#183D43]/10 bg-white p-7 shadow-2xl shadow-[#183D43]/15 sm:p-10">

          {/* Upar ki rang-birangi patti */}
          <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#183D43] via-[#269079] to-[#65D9B5]"></div>

          {status === 'sent' ? (
            // Kamyabi ke baad ka hissa
            <div role="status" className="py-8 text-center">
              <div className="mx-auto grid h-[72px] w-[72px] place-items-center rounded-full bg-[#DDF3EC] text-3xl font-bold text-[#269079]">✓</div>
              <h3 className="mt-5 text-2xl font-bold text-[#183D43]">Message sent</h3>
              <p className="mx-auto mt-2 mb-6 max-w-xs text-[#647B7D]">
                Thank you for contacting IIT. We will reply soon.
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="rounded-xl border-2 border-[#269079] px-6 py-3 font-bold text-[#269079] transition-colors hover:bg-[#269079] hover:text-white"
              >
                Send another message
              </button>
            </div>
          ) : (
            <>
              <h3 className="text-2xl font-bold text-[#183D43]">Send us a message</h3>
              <p className="mb-7 mt-1.5 text-[15px] text-[#647B7D]">All fields are required.</p>

              <form onSubmit={onSubmit} noValidate className="flex flex-col gap-5">

                {/* Name */}
                <div>
                  <label htmlFor="name" className={label}>Name</label>
                  <input
                    id="name" name="name" type="text" autoComplete="name"
                    placeholder="Your full name"
                    value={form.name} onChange={onChange}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    className={`${input} ${errors.name ? badBorder : okBorder}`}
                  />
                  {errors.name && <p id="name-error" className={errorText}>{errors.name}</p>}
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className={label}>Subject</label>
                  <input
                    id="subject" name="subject" type="text"
                    placeholder="What is this about?"
                    value={form.subject} onChange={onChange}
                    aria-invalid={Boolean(errors.subject)}
                    aria-describedby={errors.subject ? 'subject-error' : undefined}
                    className={`${input} ${errors.subject ? badBorder : okBorder}`}
                  />
                  {errors.subject && <p id="subject-error" className={errorText}>{errors.subject}</p>}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className={label}>Message</label>
                  <textarea
                    id="message" name="message" rows={5} maxLength={500}
                    placeholder="Write your message here…"
                    value={form.message} onChange={onChange}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    className={`${input} resize-y ${errors.message ? badBorder : okBorder}`}
                  />
                  {errors.message && <p id="message-error" className={errorText}>{errors.message}</p>}
                  <p className="mt-1.5 text-right text-xs text-[#647B7D]">{form.message.length}/500</p>
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="flex w-full items-center justify-center gap-2.5 rounded-2xl bg-[#269079] py-4 text-lg font-bold text-white shadow-xl shadow-[#269079]/30 transition duration-300 hover:-translate-y-1 hover:bg-[#207C68] disabled:cursor-wait disabled:opacity-70 disabled:hover:translate-y-0"
                >
                  {status === 'sending' ? 'Sending…' : 'Send Message'}
                  <FaPaperPlane size={16} />
                </button>

              </form>
            </>
          )}
        </div>

      </div>
    </section>
  )
}

export default ContactSection