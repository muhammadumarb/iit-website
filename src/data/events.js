import {
  FaCode, FaPython, FaNetworkWired, FaRobot, FaShieldAlt, FaMobileAlt,
  FaFileExcel, FaPaintBrush, FaMicrochip, FaDatabase,
} from 'react-icons/fa'

export const events = [
  // Ongoing
  { id: 1,  title: "Full Stack Web Development Bootcamp", start: "2026-11-03", end: "2026-11-28", time: "9:00 AM - 12:00 PM",  place: "Lab 2, Hyderabad Campus", seats: 30, filled: 15, icon: FaCode,        image: "" },
  { id: 2,  title: "Python for Data Science",             start: "2026-11-10", end: "2026-12-05", time: "2:00 PM - 5:00 PM",   place: "Online (Zoom)",           seats: 25, filled: 22, icon: FaPython,      image: "" },
  { id: 3,  title: "Networking & CCNA Training",          start: "2026-11-02", end: "2026-11-27", time: "10:00 AM - 1:00 PM",  place: "Lab 4, Hyderabad Campus", seats: 20, filled: 10, icon: FaNetworkWired, image: "" },

  // Upcoming
  { id: 4,  title: "AI & Machine Learning Workshop",         start: "2026-12-10", time: "10:00 AM - 4:00 PM", place: "Auditorium, Hyderabad Campus",   seats: 50, filled: 0, tag: "Early Bird", icon: FaRobot,     image: "" },
  { id: 5,  title: "Cyber Security Hands-on Training",       start: "2026-12-18", time: "9:00 AM - 3:00 PM",  place: "Online (Microsoft Teams)",       seats: 35, filled: 0, tag: "Free Entry", icon: FaShieldAlt, image: "" },
  { id: 6,  title: "Mobile App Development with React Native", start: "2027-01-05", time: "11:00 AM - 5:00 PM", place: "Lab 1, Hyderabad Campus",     seats: 20, filled: 0, tag: "New",        icon: FaMobileAlt, image: "" },
  { id: 7,  title: "Office Automation & Advanced Excel",     start: "2027-01-20", time: "2:00 PM - 6:00 PM",  place: "Lab 3, Hyderabad Campus",        seats: 40, filled: 0, tag: "Popular",    icon: FaFileExcel, image: "" },

  // Past
  { id: 8,  title: "Graphic Designing Masterclass",  start: "2026-05-05", time: "10:00 AM - 2:00 PM", place: "Hyderabad Campus",        participants: 45,  rating: 4.8, icon: FaPaintBrush, image: "" },
  { id: 9,  title: "Ethical Hacking Seminar",        start: "2026-04-15", time: "11:00 AM - 3:00 PM", place: "Online",                  participants: 120, rating: 4.9, icon: FaShieldAlt,  image: "" },
  { id: 10, title: "IoT & Smart Devices Workshop",   start: "2026-03-28", time: "10:00 AM - 2:00 PM", place: "Lab 2, Hyderabad Campus", participants: 30,  rating: 4.7, icon: FaMicrochip,  image: "" },
  { id: 11, title: "Database Management with SQL",   start: "2026-03-10", time: "2:00 PM - 5:00 PM",  place: "Online (Zoom)",           participants: 60,  rating: 4.6, icon: FaDatabase,   image: "" },
]

const toDate = (s) => new Date(s + 'T00:00:00')

export const getStatus = (event) => {
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const start = toDate(event.start)
  const end = toDate(event.end || event.start)

  if (today < start) return 'upcoming'
  if (today > end) return 'past'
  return 'ongoing'
}

export const dayOf = (s) => toDate(s).getDate()
export const monthOf = (s) => toDate(s).toLocaleDateString('en-GB', { month: 'short' })


export const formatRange = (start, end) => {
  const a = toDate(start)
  const b = toDate(end || start)
  const short = { day: 'numeric', month: 'short' }

  if (!end || end === start) {
    return a.toLocaleDateString('en-GB', { ...short, year: 'numeric' })
  }
  return `${a.toLocaleDateString('en-GB', short)} – ${b.toLocaleDateString('en-GB', { ...short, year: 'numeric' })}`
}