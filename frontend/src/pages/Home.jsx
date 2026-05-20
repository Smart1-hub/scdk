import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {

  return (

    <div className="min-h-screen bg-slate-950 text-white">

      <Navbar />

      {/* HERO */}
      <section className="px-10 py-32">

        <div className="max-w-7xl mx-auto">

          <p className="text-cyan-400 uppercase tracking-widest">
            Smart City Development Konsult Ltd
          </p>

          <h1 className="text-7xl font-extrabold leading-tight mt-6 max-w-5xl">
            GIS, Urban Planning &
            Smart City Solutions
          </h1>

          <p className="text-slate-300 text-xl mt-8 max-w-3xl leading-relaxed">
            Enterprise geospatial solutions for urban development,
            infrastructure management, planning intelligence,
            environmental systems, and smart-city transformation.
          </p>

          <div className="flex gap-5 mt-10">

            <Link
              to="/services"
              className="bg-cyan-500 hover:bg-cyan-600 px-8 py-4 rounded-2xl font-bold transition"
            >
              Explore Services
            </Link>

            <Link
              to="/portfolio"
              className="border border-slate-700 hover:border-cyan-400 px-8 py-4 rounded-2xl font-bold transition"
            >
              View Portfolio
           </Link>

          </div>
        
        </div>
      </section>
  
      {/* SERVICES PREVIEW */}
      <section className="px-10 pb-20">

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">

          <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl">
            <h2 className="text-2xl font-bold mb-4">
              GIS & Mapping
            </h2>

            <p className="text-slate-400">
              Spatial analysis, geodatabases,
              web mapping, remote sensing,
              and enterprise GIS systems.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl">
            <h2 className="text-2xl font-bold mb-4">
              Urban Planning
            </h2>

            <p className="text-slate-400">
              Master plans, regional planning,
              transport systems,
              land use planning,
              and development control.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl">
            <h2 className="text-2xl font-bold mb-4">
              Smart City Systems
            </h2>

            <p className="text-slate-400">
              Intelligent infrastructure,
              urban analytics,
              planning dashboards,
              and spatial decision systems.
            </p>
          </div>

        </div>

      </section>

      <Footer />

    </div>

  );

}