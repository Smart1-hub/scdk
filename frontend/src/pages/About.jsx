import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {

  return (

    <div className="min-h-screen bg-slate-950 text-white">

      <Navbar />

      {/* HERO */}
      <section className="px-10 py-24">

        <div className="max-w-6xl mx-auto">

          <p className="text-cyan-400 uppercase tracking-widest">
            About SCDK
          </p>

          <h1 className="text-6xl font-extrabold mt-6 leading-tight">
            Building Smarter Cities Through
            Geospatial Innovation
          </h1>

          <p className="text-slate-300 text-xl mt-8 leading-relaxed max-w-4xl">
            Smart City Development Konsult Ltd is a multidisciplinary
            consulting and technology company specializing in GIS,
            urban planning, engineering, architecture, surveying,
            environmental systems, and smart-city technologies.
          </p>

        </div>

      </section>

      {/* COMPANY OVERVIEW */}
      <section className="px-10 pb-20">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

          <div className="bg-slate-900 border border-slate-800 p-10 rounded-3xl">

            <h2 className="text-3xl font-bold mb-6">
              Who We Are
            </h2>

            <p className="text-slate-400 leading-relaxed">
              We provide integrated solutions for urban development,
              infrastructure planning, geospatial intelligence,
              environmental management, transportation systems,
              and digital transformation.
            </p>

          </div>

          <div className="bg-slate-900 border border-slate-800 p-10 rounded-3xl">

            <h2 className="text-3xl font-bold mb-6">
              Our Vision
            </h2>

            <p className="text-slate-400 leading-relaxed">
              To become a leading African smart-city and geospatial
              consulting company delivering innovative solutions
              for sustainable urban futures.
            </p>

          </div>

        </div>

      </section>

      <Footer />

    </div>

  );

}