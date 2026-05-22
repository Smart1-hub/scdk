import { motion } from "framer-motion";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Services() {

  const services = [
    "GIS & Mapping",
    "Urban Planning",
    "Transportation Planning",
    "Environmental Assessment",
    "Smart City Systems",
    "Infrastructure Analytics",
  ];

  return (

    <div className="min-h-screen bg-slate-950 text-white relative overflow-hidden">

      {/* GLOW */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/20 blur-[120px] rounded-full"></div>

      <Navbar />

      {/* HERO */}
      <section className="px-10 py-28 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-6xl mx-auto text-center"
        >

          <p className="text-cyan-400 uppercase tracking-widest">
            Our Services
          </p>

          <h1 className="text-6xl font-extrabold mt-6">
            Enterprise Geospatial Solutions
          </h1>

        </motion.div>

      </section>

      {/* SERVICES GRID */}
      <section className="px-10 pb-24 relative z-10">

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">

          {services.map((service, index) => (

            <motion.div
              key={index}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              transition={{ duration: 0.3 }}
              className="bg-slate-900/80 backdrop-blur-lg border border-slate-800 rounded-3xl p-8 hover:border-cyan-400"
            >

              <h2 className="text-2xl font-bold">

                {service}

              </h2>

            </motion.div>

          ))}

        </div>

      </section>

      <Footer />

    </div>

  );

}