import React from 'react'
import { Link } from 'react-router-dom'
import { FaRegCalendarAlt, FaRegClock, FaMapMarkerAlt, FaUsers, FaStar } from 'react-icons/fa'
import { getStatus, dayOf, monthOf, formatRange } from '../../data/events'

// Status ke hisaab se nishan ka rang aur likha hua naam
const badgeColor = {
  ongoing: 'bg-[#269079] text-white',
  upcoming: 'bg-[#F2C14E] text-[#183D43]',
  past: 'bg-white/90 text-[#183D43]',
}
const badgeName = { ongoing: 'Ongoing', upcoming: 'Upcoming', past: 'Completed' }

const metaRow = "flex items-center gap-2.5"
const metaIcon = "shrink-0 text-[#269079]"

// show: cards screen par aa chuke hon to animation chalaye
const EventCard = ({ event, show, delay = 0 }) => {
  const status = getStatus(event)
  const isPast = status === 'past'
  const Icon = event.icon

  const full = event.seats ? event.filled >= event.seats : false
  const percent = event.seats ? Math.min(100, Math.round((event.filled / event.seats) * 100)) : 0

  return (
    <article
      style={{ animationDelay: `${delay}ms` }}
      className={`group flex flex-col overflow-hidden rounded-[20px] border border-[#183D43]/10 bg-white shadow-lg shadow-[#183D43]/5 transition duration-300 hover:-translate-y-1.5 hover:border-[#269079]/50 hover:shadow-2xl hover:shadow-[#183D43]/20 ${
        show ? 'card-in' : 'opacity-0'
      }`}
    >
      {/* Tasveer ya gradient */}
      <div className="relative grid h-44 place-items-center overflow-hidden bg-gradient-to-br from-[#183D43] to-[#269079]">
        {event.image ? (
          <img
            src={event.image}
            alt={event.title}
            className={`h-full w-full object-cover transition duration-500 group-hover:scale-105 ${
              isPast ? 'grayscale-[.55] group-hover:grayscale-0' : ''
            }`}
          />
        ) : (
          <>
            <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(101,217,181,0.35),transparent_55%)]"></div>
            <Icon className="relative text-5xl text-white drop-shadow-lg transition-transform duration-500 group-hover:-rotate-3 group-hover:scale-110" />
          </>
        )}

        {/* Status ka nishan */}
        <span className={`absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-extrabold tracking-wide ${badgeColor[status]}`}>
          {status === 'ongoing' && <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white"></span>}
          {event.tag || badgeName[status]}
        </span>

        {/* Past events par rating */}
        {isPast && event.rating && (
          <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-[#F2C14E] px-2.5 py-1 text-xs font-extrabold text-[#183D43]">
            <FaStar size={10} /> {event.rating}
          </span>
        )}

        {/* Bari tareekh */}
        <div className="absolute bottom-3 left-3 min-w-[54px] rounded-xl bg-white px-3 py-1.5 text-center shadow-lg">
          <p className="font-['Fraunces',serif] text-2xl font-semibold leading-none text-[#183D43]">{dayOf(event.start)}</p>
          <p className="mt-0.5 text-[11px] font-bold uppercase tracking-wider text-[#269079]">{monthOf(event.start)}</p>
        </div>
      </div>

      {/* Naam aur tafseel */}
      <div className="flex flex-1 flex-col px-5 pb-5 pt-4">
        <h3 className="line-clamp-2 min-h-[3.25rem] text-lg font-bold leading-snug text-[#183D43]">
          {event.title}
        </h3>

        <ul className="mt-3 space-y-1.5 text-sm text-[#52666A]">
          <li className={metaRow}><FaRegCalendarAlt className={metaIcon} />{formatRange(event.start, event.end)}</li>
          <li className={metaRow}><FaRegClock className={metaIcon} />{event.time}</li>
          <li className={metaRow}><FaMapMarkerAlt className={metaIcon} /><span className="truncate">{event.place}</span></li>
        </ul>

        {/* Chal rahe events: seats ki patti */}
        {status === 'ongoing' && (
          <div className="mt-4">
            <div className="mb-1.5 flex justify-between text-xs font-semibold text-[#647B7D]">
              <span>{event.filled}/{event.seats} seats filled</span>
              <span>{percent}%</span>
            </div>
            <div className="h-1.5 overflow-hidden rounded-full bg-[#183D43]/10">
              <div className="h-full rounded-full bg-[#269079] transition-all duration-700" style={{ width: show ? `${percent}%` : '0%' }}></div>
            </div>
          </div>
        )}

        {/* Neeche ki patti */}
        <div className="mt-auto flex items-center justify-between gap-3 border-t border-[#183D43]/10 pt-4 mt-5">
          {isPast ? (
            <span className="flex items-center gap-2 text-sm font-semibold text-[#647B7D]">
              <FaUsers className="text-[#269079]" /> {event.participants} participants
            </span>
          ) : (
            <>
              <span className="flex items-center gap-2 text-sm font-semibold text-[#647B7D]">
                <FaUsers className="text-[#269079]" />
                {status === 'ongoing' ? `${event.seats - event.filled} left` : `${event.seats - event.filled} seats available`}
              </span>

              {full ? (
                <span className="rounded-xl bg-[#183D43]/10 px-5 py-2.5 text-sm font-bold text-[#647B7D]">Seats Full</span>
              ) : (
                <Link
                  to="/admission"
                  className={`rounded-xl px-5 py-2.5 text-sm font-bold text-white transition duration-300 hover:-translate-y-0.5 ${
                    status === 'ongoing' ? 'bg-[#269079] hover:bg-[#207C68]' : 'bg-[#183D43] hover:bg-[#269079]'
                  }`}
                >
                  {status === 'ongoing' ? 'Join Now' : 'Register'}
                </Link>
              )}
            </>
          )}
        </div>
      </div>
    </article>
  )
}

export default EventCard