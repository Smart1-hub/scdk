import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Services() {

  const services = [
    {
      title: "GIS & Spatial Analysis",
      description:
        "Enterprise GIS, spatial databases, web mapping, remote sensing, and geospatial analytics.",
    },
    {
      title: "Urban & Regional Planning",
      description:
        "Master planning, regional development, transport planning, land use analysis, and policy systems.",
    },
    {
      title: "Survey & Geomatics",
      description:
        "Topographic surveys, cadastral systems, GPS surveys, and geospatial data acquisition.",
    },
    {
      title: "Engineering Consultancy",
      description:
        "Infrastructure planning, civil engineering support, utility systems, and project supervision.",
    },
    {
      title: "Architecture & Design",
      description:
        "Architectural concepts, urban design, visualization, and development planning.",
    },
    {
      title: "Smart City Systems",
      description:
        "Urban dashboards, infrastructure intelligence, IoT integration, and digital city platforms.",
    },
  ];

  return (

    <div className="min-h-screen bg-slate-950 text-white">

      <Navbar />

      {/* HERO */}
      <section className="px-10 py-24">

        <div className="max-w-6xl mx-auto">

          <p className="text-cyan-400 uppercase tracking-widest">
            Our Services
          </p>

          <h1 className="text-6xl font-extrabold mt-6">
            Enterprise Solutions For
            Urban Transformation
          </h1>

        </div>

      </section>

      {/* SERVICES GRID */}
      <section className="px-10 pb-20">

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">

          {services.map((service, index) => (

            <div
              key={index}
              className="bg-slate-900 border border-slate-800 p-8 rounded-3xl"
            >

              <h2 className="text-2xl font-bold mb-4">
                {service.title}
              </h2>

              <p className="text-slate-400 leading-relaxed">
                {service.description}
              </p>

            </div>

          ))}

        </div>

      </section>

      <Footer />

    </div>

  );

}