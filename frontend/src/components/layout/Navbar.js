import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/blog", label: "Blog" },
  { to: "/team", label: "Team" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-slate-950/90 backdrop-blur-xl border-b border-slate-800 shadow-lg" : "bg-transparent"}`}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-bold text-white text-lg">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center text-white font-bold text-sm">M</div>
          MERN<span className="text-blue-400">Stack</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map(({ to, label }) => (
            <Link key={to} to={to}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all
                ${pathname === to ? "text-white bg-white/10" : "text-slate-400 hover:text-white hover:bg-white/5"}`}>
              {label}
            </Link>
          ))}
          <Link to="/admin/login"
            className="ml-3 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl transition-all shadow-lg shadow-blue-500/20">
            Admin →
          </Link>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-slate-400 hover:text-white">
          {open ? <HiOutlineX className="w-6 h-6" /> : <HiOutlineMenu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-slate-950 border-b border-slate-800 px-6 pb-4 space-y-1">
          {navLinks.map(({ to, label }) => (
            <Link key={to} to={to}
              className="block px-4 py-3 rounded-xl text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800 transition-all">
              {label}
            </Link>
          ))}
          <Link to="/admin/login" className="block px-4 py-3 text-blue-400 text-sm font-medium hover:text-blue-300 transition-all">
            Admin Panel →
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
