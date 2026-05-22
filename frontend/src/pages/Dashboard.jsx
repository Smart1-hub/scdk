import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MapView from "../components/MapView";

export default function Dashboard() {

  const [stats, setStats] = useState({
    projects: 0,
    clients: 0,
    surveys: 0,
    smartCities: 0,
  });

  const [projects, setProjects] = useState([]);

  /* =====================================
     FETCH DASHBOARD STATS
  ===================================== */

  useEffect(() => {

    fetch("http://localhost:5000/dashboard/stats")

      .then((res) => res.json())

      .then((data) => {

        setStats(data);

      })

      .catch((error) => {

        console.error(error);

      });

  }, []);

  /* =====================================
     FETCH PROJECTS
  ===================================== */

  useEffect(() => {

    fetch("http://localhost:5000/projects")

      .then((res) => res.json())

      .then((data) => {

        setProjects(data);

      })

      .catch((error) => {

        console.error(error);

      });

  }, []);

  return (

    <div className="min-h-screen bg-slate-950 text-white relative overflow-hidden">

      {/* BACKGROUND GLOWS */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full"></div>

      <Navbar />

      {/* HERO */}
      <section className="px-10 py-24 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-7xl mx-auto"
        >

          <p className="text-cyan-400 uppercase tracking-widest">
            Enterprise Dashboard
          </p>

          <h1 className="text-6xl font-extrabold mt-6">

            Smart City Intelligence Platform

          </h1>

          <p className="text-slate-400 text-xl mt-8 max-w-4xl leading-relaxed">

            Real-time geospatial analytics,
            infrastructure intelligence,
            planning systems,
            urban monitoring,
            and enterprise GIS operations.

          </p>

        </motion.div>

      </section>

      {/* STATS */}
      <section className="px-10 pb-20 relative z-10">

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 xl:grid-cols-4 gap-8">

          {/* CARD 1 */}
          <motion.div
            whileHover={{
              scale: 1.04,
              y: -8,
            }}
            className="bg-slate-900/80 backdrop-blur-lg border border-slate-800 rounded-3xl p-8"
          >

            <h2 className="text-5xl font-extrabold text-cyan-400">
              {stats.projects}
            </h2>

            <p className="text-slate-400 mt-4">
              GIS Projects
            </p>

          </motion.div>

          {/* CARD 2 */}
          <motion.div
            whileHover={{
              scale: 1.04,
              y: -8,
            }}
            className="bg-slate-900/80 backdrop-blur-lg border border-slate-800 rounded-3xl p-8"
          >

            <h2 className="text-5xl font-extrabold text-cyan-400">
              {stats.clients}
            </h2>

            <p className="text-slate-400 mt-4">
              Enterprise Clients
            </p>

          </motion.div>

          {/* CARD 3 */}
          <motion.div
            whileHover={{
              scale: 1.04,
              y: -8,
            }}
            className="bg-slate-900/80 backdrop-blur-lg border border-slate-800 rounded-3xl p-8"
          >

            <h2 className="text-5xl font-extrabold text-cyan-400">
              {stats.surveys}
            </h2>

            <p className="text-slate-400 mt-4">
              Urban Surveys
            </p>

          </motion.div>

          {/* CARD 4 */}
          <motion.div
            whileHover={{
              scale: 1.04,
              y: -8,
            }}
            className="bg-slate-900/80 backdrop-blur-lg border border-slate-800 rounded-3xl p-8"
          >

            <h2 className="text-5xl font-extrabold text-cyan-400">
              {stats.smartCities}
            </h2>

            <p className="text-slate-400 mt-4">
              Smart City Systems
            </p>

          </motion.div>

        </div>

      </section>

      {/* MAP SECTION */}
      <section className="px-10 pb-24 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto bg-slate-900/80 backdrop-blur-lg border border-slate-800 rounded-3xl p-8"
        >

          <div className="flex items-center justify-between mb-8">

            <div>

              <p className="text-cyan-400 uppercase tracking-widest">
                Spatial Intelligence
              </p>

              <h2 className="text-4xl font-extrabold mt-3">
                Interactive GIS Map
              </h2>

            </div>

          </div>

          {/* MAP */}
          <div className="overflow-hidden rounded-3xl border border-slate-800">

            <MapView />

          </div>

        </motion.div>

      </section>

      {/* PROJECTS TABLE */}
      <section className="px-10 pb-28 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto bg-slate-900/80 backdrop-blur-lg border border-slate-800 rounded-3xl p-10"
        >

          <div className="flex items-center justify-between mb-10">

            <div>

              <p className="text-cyan-400 uppercase tracking-widest">
                Enterprise Projects
              </p>

              <h2 className="text-4xl font-extrabold mt-3">
                Active GIS Projects
              </h2>

            </div>

          </div>

          {/* TABLE */}
          <div className="overflow-x-auto">

            <table className="w-full">

              <thead>

                <tr className="border-b border-slate-800">

                  <th className="text-left py-5 text-slate-400">
                    Project Name
                  </th>

                  <th className="text-left py-5 text-slate-400">
                    Description
                  </th>

                  <th className="text-left py-5 text-slate-400">
                    Coordinates
                  </th>

                </tr>

              </thead>

              <tbody>

                {projects.map((project) => (

                  <motion.tr
                    key={project.id}
                    whileHover={{
                      backgroundColor: "rgba(15,23,42,0.8)",
                    }}
                    className="border-b border-slate-800"
                  >

                    <td className="py-6 font-semibold">
                      {project.name}
                    </td>

                    <td className="py-6 text-slate-400">
                      {project.description}
                    </td>

                    <td className="py-6 text-cyan-400">
                      {project.location?.coordinates?.join(", ")}
                    </td>

                  </motion.tr>

                ))}

              </tbody>

            </table>

          </div>

        </motion.div>

      </section>

      <Footer />

    </div>

  );

}