import { motion } from "framer-motion";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

/* PROJECT IMAGES */
/*import project1 from "../assets/images/project1.jpg";
import project2 from "../assets/images/project2.jpg";
import project3 from "../assets/images/project3.jpg";
import project4 from "../assets/images/project4.jpg";
import project5 from "../assets/images/project5.jpg";
import project6 from "../assets/images/project6.jpg";*/

export default function Portfolio() {

  const projects = [

    {
      title: "Smart Urban GIS Dashboard",
      category: "GIS & Smart City",
      image: project1,
      description:
        "Enterprise GIS dashboard for urban infrastructure monitoring and spatial intelligence.",
    },

    {
      title: "Regional Transport Master Plan",
      category: "Transportation Planning",
      image: project2,
      description:
        "Comprehensive transport planning and route optimization for metropolitan mobility systems.",
    },

    {
      title: "Environmental Impact Assessment",
      category: "Environmental Planning",
      image: project3,
      description:
        "Environmental risk analysis and impact assessment for urban development projects.",
    },

    {
      title: "Land Information System",
      category: "GIS & Land Administration",
      image: project4,
      description:
        "Spatial land management and cadastral mapping system with geospatial database integration.",
    },

    {
      title: "Urban Flood Risk Mapping",
      category: "Disaster Risk Management",
      image: project5,
      description:
        "Flood vulnerability assessment and hydrological spatial analysis for resilient urban planning.",
    },

    {
      title: "Smart Infrastructure Monitoring",
      category: "Infrastructure Management",
      image: project6,
      description:
        "Real-time infrastructure analytics and geospatial monitoring for smart-city operations.",
    },

  ];

  return (

    <div className="min-h-screen bg-slate-950 text-white relative overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full"></div>

      <Navbar />

      {/* HERO */}
      <section className="px-10 py-28 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-7xl mx-auto text-center"
        >

          <p className="text-cyan-400 uppercase tracking-widest">
            Our Portfolio
          </p>

          <h1 className="text-6xl font-extrabold mt-6">
            Transforming Cities Through Innovation
          </h1>

          <p className="text-slate-400 text-xl mt-8 max-w-4xl mx-auto leading-relaxed">

            Explore our portfolio of GIS projects,
            smart-city systems,
            transportation planning,
            environmental analysis,
            and urban development solutions.

          </p>

        </motion.div>

      </section>

      {/* PROJECT GRID */}
      <section className="px-10 pb-28 relative z-10">

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 xl:grid-cols-3 gap-10">

          {projects.map((project, index) => (

            <motion.div
              key={index}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              transition={{ duration: 0.3 }}
              className="bg-slate-900/80 backdrop-blur-lg border border-slate-800 rounded-3xl overflow-hidden hover:border-cyan-400 group"
            >

              {/* IMAGE */}
              <div className="overflow-hidden">

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition duration-700"
                />

              </div>

              {/* CONTENT */}
              <div className="p-8">

                <p className="text-cyan-400 uppercase tracking-widest text-sm">

                  {project.category}

                </p>

                <h2 className="text-2xl font-bold mt-4">

                  {project.title}

                </h2>

                <p className="text-slate-400 mt-5 leading-relaxed">

                  {project.description}

                </p>

                {/* BUTTON */}
                <button className="mt-8 border border-slate-700 hover:border-cyan-400 px-6 py-3 rounded-2xl font-semibold transition duration-300">

                  View Project

                </button>

              </div>

            </motion.div>

          ))}

        </div>

      </section>

      {/* CTA SECTION */}
      <section className="px-10 pb-24 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto bg-slate-900/80 backdrop-blur-lg border border-slate-800 rounded-3xl p-16 text-center"
        >

          <h2 className="text-5xl font-extrabold">

            Ready To Build Smarter Cities?

          </h2>

          <p className="text-slate-400 text-xl mt-6 max-w-3xl mx-auto">

            We deliver enterprise geospatial solutions,
            urban intelligence systems,
            infrastructure analytics,
            and sustainable development strategies.

          </p>

          <button className="mt-10 bg-cyan-500 hover:bg-cyan-600 px-8 py-4 rounded-2xl font-bold transition duration-300 shadow-lg hover:shadow-cyan-500/40">

            Start Your Project

          </button>

        </motion.div>

      </section>

      <Footer />

    </div>

  );

}