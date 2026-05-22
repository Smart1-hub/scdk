import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar() {

  return (

    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/70 border-b border-slate-800"
    >

      <div className="max-w-7xl mx-auto px-10 py-5 flex items-center justify-between">

        {/* LOGO */}
        <Link
          to="/"
          className="flex items-center gap-3"
        >

          <div className="w-12 h-12 rounded-2xl bg-cyan-500 flex items-center justify-center font-extrabold text-slate-950 text-xl shadow-lg shadow-cyan-500/30">
            SCD
          </div>

          <div>

            <h1 className="text-2xl font-extrabold tracking-wide">
              SCD KONSULT
            </h1>

            <p className="text-xs text-slate-400 uppercase tracking-[0.3em]">
              Smart City Systems
            </p>

          </div>

        </Link>

        {/* NAV LINKS */}
        <div className="hidden md:flex items-center gap-8">

          <Link
            to="/"
            className="text-slate-300 hover:text-cyan-400 transition duration-300 font-medium"
          >
            Home
          </Link>

          <Link
            to="/about"
            className="text-slate-300 hover:text-cyan-400 transition duration-300 font-medium"
          >
            About
          </Link>

          <Link
            to="/services"
            className="text-slate-300 hover:text-cyan-400 transition duration-300 font-medium"
          >
            Services
          </Link>

          <Link
            to="/portfolio"
            className="text-slate-300 hover:text-cyan-400 transition duration-300 font-medium"
          >
            Portfolio
          </Link>

          <Link
            to="/dashboard"
            className="text-slate-300 hover:text-cyan-400 transition duration-300 font-medium"
          >
            Dashboard
          </Link>

          <Link
            to="/contact"
            className="text-slate-300 hover:text-cyan-400 transition duration-300 font-medium"
          >
            Contact
          </Link>

        </div>

        {/* CTA BUTTON */}
        <Link
          to="/contact"
          className="hidden md:flex bg-cyan-500 hover:bg-cyan-600 text-slate-950 px-6 py-3 rounded-2xl font-bold transition duration-300 shadow-lg hover:shadow-cyan-500/40"
        >
          Get Started
        </Link>

      </div>

    </motion.nav>

  );

}