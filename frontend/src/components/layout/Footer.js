import React from "react";
import { Link } from "react-router-dom";
import { FiGithub, FiTwitter, FiLinkedin } from "react-icons/fi";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center text-white font-bold text-sm">M</div>
              <span className="text-white font-bold">MERN<span className="text-blue-400">Stack</span></span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              A production-ready MERN stack starter template with admin dashboard, JWT auth, and Firebase.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Navigation</h4>
            <ul className="space-y-2">
              {[
                { to: "/", label: "Home" },
                { to: "/blog", label: "Blog" },
                { to: "/team", label: "Team" },
                { to: "/admin/login", label: "Admin Panel" },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="text-sm text-slate-500 hover:text-white transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Stack */}
          <div>
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Built With</h4>
            <ul className="space-y-2">
              {["React 18", "Node.js + Express", "MongoDB + Mongoose", "Firebase Auth & Storage", "Tailwind CSS v3", "JWT Authentication"].map((t) => (
                <li key={t} className="text-sm text-slate-500">{t}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-800">
          <p className="text-xs text-slate-600">© {year} MERN Starter. All rights reserved.</p>
          <div className="flex items-center gap-4">
            {[
              { href: "https://github.com", Icon: FiGithub },
              { href: "https://twitter.com", Icon: FiTwitter },
              { href: "https://linkedin.com", Icon: FiLinkedin },
            ].map(({ href, Icon }) => (
              <a key={href} href={href} target="_blank" rel="noreferrer"
                className="text-slate-600 hover:text-white transition-colors">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
