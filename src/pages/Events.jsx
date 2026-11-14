import React, { useEffect, useRef, useState } from 'react'
import PageBanner from './PageBanner'
import EventCard from '../components/events/EventsCard'
import { events, getStatus } from '../data/events'

const groups = [
  { key: 'ongoing',  title: 'Ongoing',  accent: 'Events', note: 'Happening right now', pulse: true },
  { key: 'upcoming', title: 'Upcoming', accent: 'Events', note: 'Reserve your seat early' },
  { key: 'past',     title: 'Past',     accent: 'Events', note: 'What you missed' },
]

// Ek group: heading aur uske cards. Screen par aate hi cards animate hon.
const Group = ({ group, items }) => {
  const ref = useRef(null)
  const [seen, setSeen] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSeen(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="mt-14 first:mt-0">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <h2 className="flex items-center gap-3 font-['Fraunces',serif] text-[clamp(1.8rem,3.4vw,2.6rem)] font-semibold leading-none tracking-tight text-[#183D43]">
          {group.pulse && <span className="h-3 w-3 animate-pulse rounded-full bg-[#269079]"></span>}
          <span>{group.title} <em className="italic text-[#269079]">{group.accent}</em></span>
        </h2>
        <p className="text-[15px] font-semibold text-[#647B7D]">{group.note}</p>
      </div>

      <div
        ref={ref}
        className={`mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 ${group.key === 'ongoing' ? '' : 'xl:grid-cols-4'}`}
      >
        {items.map((event, i) => (
          <EventCard key={event.id} event={event} show={seen} delay={(i % 4) * 90} />
        ))}
      </div>
    </div>
  )
}

const Events = () => {
  const [tab, setTab] = useState('all')

  // Har status ke events alag karo
  const byStatus = {
    ongoing: events.filter((e) => getStatus(e) === 'ongoing'),
    upcoming: events.filter((e) => getStatus(e) === 'upcoming'),
    past: events.filter((e) => getStatus(e) === 'past'),
  }

  const tabs = [
    { key: 'all', label: 'All', count: events.length },
    { key: 'ongoing', label: 'Ongoing', count: byStatus.ongoing.length },
    { key: 'upcoming', label: 'Upcoming', count: byStatus.upcoming.length },
    { key: 'past', label: 'Past', count: byStatus.past.length },
  ]

  // Jo group dikhana hai (aur jis mein kuch hai)
  const shown = groups
    .filter((g) => tab === 'all' || tab === g.key)
    .filter((g) => byStatus[g.key].length > 0)

  return (
    <>
      <PageBanner
        title="Events &"
        accent="Workshops"
        text="Join our professional IT events and grow your career."
      />

      <section className="bg-[#F4F8F6]">
        <div className="mx-auto max-w-[1240px] px-4 py-14 sm:px-6 md:py-20 lg:px-10">

          {/* Tabs */}
          <div role="tablist" aria-label="Event type" className="mb-12 flex flex-wrap gap-2.5">
            {tabs.map((t) => (
              <button
                key={t.key}
                role="tab"
                aria-selected={tab === t.key}
                onClick={() => setTab(t.key)}
                className={`inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-[15px] font-bold transition duration-300 ${
                  tab === t.key
                    ? 'border-[#183D43] bg-[#183D43] text-white shadow-lg shadow-[#183D43]/25'
                    : 'border-[#183D43]/15 bg-white text-[#183D43] hover:border-[#269079]'
                }`}
              >
                {t.label}
                <span className={`grid min-w-[22px] place-items-center rounded-full px-1.5 text-xs ${
                  tab === t.key ? 'bg-white/20' : 'bg-[#DDF3EC] text-[#207C68]'
                }`}>
                  {t.count}
                </span>
              </button>
            ))}
          </div>

          {/* Groups */}
          {shown.map((g) => (
            // key mein tab bhi hai, taake tab badalne par animation dobara chale
            <Group key={`${tab}-${g.key}`} group={g} items={byStatus[g.key]} />
          ))}

          {/* Kuch na ho to */}
          {shown.length === 0 && (
            <div className="rounded-3xl border border-dashed border-[#183D43]/20 bg-white px-6 py-16 text-center">
              <p className="font-['Fraunces',serif] text-2xl font-semibold text-[#183D43]">No events here right now</p>
              <p className="mt-2 text-[#647B7D]">Check the other tabs or come back soon.</p>
            </div>
          )}

        </div>
      </section>
    </>
  )
}

export default Events