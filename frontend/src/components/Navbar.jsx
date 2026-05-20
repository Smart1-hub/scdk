import { Link } from "react-router-dom";

export default function Navbar() {

  return (

    <nav className="w-full bg-slate-950 border-b border-slate-800 sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">

        <Link
          to="/"
          className="text-2xl font-extrabold text-cyan-400"
        >
          SCD KONSULT
        </Link>

        <div className="flex gap-6 text-sm font-medium">

          <Link to="/" className="hover:text-cyan-400">
            Home
          </Link>

          <Link to="/about" className="hover:text-cyan-400">
            About
          </Link>

          <Link to="/services" className="hover:text-cyan-400">
            Services
          </Link>

          <Link to="/portfolio" className="hover:text-cyan-400">
            Portfolio
          </Link>

          <Link to="/contact" className="hover:text-cyan-400">
            Contact
          </Link>

          <Link
            to="/dashboard"
            className="bg-cyan-500 hover:bg-cyan-600 px-4 py-2 rounded-xl"
          >
            Dashboard
          </Link>

        </div>

      </div>

    </nav>

  );

}