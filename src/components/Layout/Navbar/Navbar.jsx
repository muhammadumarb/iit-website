
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkStyle = ({ isActive }) =>
    `block rounded-lg px-4 py-3 text-sm lg:text-base font-semibold transition-all duration-300 ${
      isActive
        ? "bg-[#269079]/20 text-[#65D9B5]"
        : "text-slate-200 hover:bg-[#269079]/15 hover:text-[#65D9B5]"
    }`;

  return (
    <header className="sticky top-0 z-50 w-full bg-[#183D43] shadow-lg">

      <nav className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-4 px-5 py-4 lg:px-8">

        {/* Logo */}
        <NavLink
          to="/"
          className="flex items-center gap-3"
          onClick={() => setMenuOpen(false)}
        >
          <div className="flex h-11 w-12 items-center justify-center rounded-lg border-2 border-[#65D9B5] text-lg font-extrabold text-[#65D9B5]">
            <img src="/src/assets/logo.png" alt="" />
          </div>

          <div>
            <h3 className="text-base font-bold text-white">
              Institute Of
            </h3>
            <p className="text-sm font-semibold text-[#65D9B5]">
              Information Technology
            </p>
          </div>
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 xl:flex">

          <NavLink to="/" end className={linkStyle}>
            Home
          </NavLink>

          <NavLink to="/about" className={linkStyle}>
            About Us
          </NavLink>

          <NavLink to="/courses" className={linkStyle}>
            Courses
          </NavLink>

          <NavLink to="/admission" className={linkStyle}>
            Admission
          </NavLink>

          <NavLink to="/verify-certificate" className={linkStyle}>
            Verify Certificate
          </NavLink>

          <NavLink to="/stories" className={linkStyle}>
            Stories
          </NavLink>

          <NavLink to="/events" className={linkStyle}>
            Events
          </NavLink>

          <NavLink to="/donate" className={linkStyle}>
            Donate
          </NavLink>

          <NavLink to="/lms" className={linkStyle}>
            LMS
          </NavLink>

        </div>

        {/* Apply Now Desktop */}
        <NavLink
          to="/admission"
          className="hidden rounded-lg bg-[#269079] px-6 py-3 text-base font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#207C68] hover:shadow-lg hover:shadow-[#269079]/20 xl:inline-flex"
        >
          Apply Now
        </NavLink>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#65D9B5]/40 text-white transition hover:bg-[#269079]/20 xl:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <svg
              className="h-7 w-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-7 w-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="flex w-full flex-col gap-2 rounded-xl border border-[#65D9B5]/20 bg-[#183D43] p-3 xl:hidden">

            <NavLink to="/" end className={linkStyle} onClick={() => setMenuOpen(false)}>
              Home
            </NavLink>

            <NavLink to="/about" className={linkStyle} onClick={() => setMenuOpen(false)}>
              About Us
            </NavLink>

            <NavLink to="/courses" className={linkStyle} onClick={() => setMenuOpen(false)}>
              Courses
            </NavLink>

            <NavLink to="/admission" className={linkStyle} onClick={() => setMenuOpen(false)}>
              Admission
            </NavLink>

            <NavLink to="/verify-certificate" className={linkStyle} onClick={() => setMenuOpen(false)}>
              Verify Certificate
            </NavLink>

            <NavLink to="/stories" className={linkStyle} onClick={() => setMenuOpen(false)}>
              Stories
            </NavLink>

            <NavLink to="/events" className={linkStyle} onClick={() => setMenuOpen(false)}>
              Events
            </NavLink>

            <NavLink to="/donate" className={linkStyle} onClick={() => setMenuOpen(false)}>
              Donate
            </NavLink>

            <NavLink to="/lms" className={linkStyle} onClick={() => setMenuOpen(false)}>
              LMS
            </NavLink>

            <NavLink
              to="/admission"
              onClick={() => setMenuOpen(false)}
              className="mt-2 rounded-lg bg-[#269079] px-4 py-3 text-center text-base font-bold text-white hover:bg-[#207C68]"
            >
              Apply Now
            </NavLink>

          </div>
        )}

      </nav>
    </header>
  );
};

export default Navbar;
