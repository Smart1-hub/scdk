import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import MapView from "../components/MapView";
import DashboardStats from "../components/DashboardStats";
import ProjectForm from "../components/ProjectForm";

export default function Dashboard() {

  return (

    <div className="min-h-screen bg-slate-950 text-white">

      <Navbar />

      {/* HEADER */}
      <section className="px-10 py-20">

        <div className="max-w-7xl mx-auto">

          <h1 className="text-6xl font-extrabold">
            Smart City Dashboard
          </h1>

          <p className="text-slate-400 text-xl mt-6 max-w-3xl">
            Enterprise GIS management system for projects,
            infrastructure, urban planning,
            environmental analytics,
            and smart-city operations.
          </p>

        </div>

      </section>

      {/* DASHBOARD STATS */}
      <section className="px-10 pb-20">

        <div className="max-w-7xl mx-auto">

          <DashboardStats />

        </div>

      </section>

      {/* PROJECT FORM */}
      <section className="px-10 pb-20">

        <div className="max-w-4xl mx-auto">

          <ProjectForm />

        </div>

      </section>

      {/* MAP */}
      <section className="px-10 pb-20">

        <div className="max-w-7xl mx-auto">

          <div className="mb-8">

            <h2 className="text-4xl font-bold">
              Live GIS Project Map
            </h2>

            <p className="text-slate-400 mt-2">
              Real-time geospatial visualization powered by PostGIS.
            </p>

          </div>

          <div className="overflow-hidden rounded-3xl border border-slate-800 shadow-2xl">

            <MapView />

          </div>

        </div>

      </section>

      <Footer />

    </div>

  );

}