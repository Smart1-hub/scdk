import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Portfolio() {

  const projects = [
    {
      title: "Smart Urban GIS Dashboard",
      category: "GIS & Smart City",
    },
    {
      title: "Regional Transport Master Plan",
      category: "Transportation Planning",
    },
    {
      title: "Environmental Impact Assessment",
      category: "Environmental Planning",
    },
    {
      title: "Infrastructure Mapping System",
      category: "Engineering & GIS",
    },
    {
      title: "Urban Growth Analysis",
      category: "Urban Planning",
    },
    {
      title: "Land Information System",
      category: "Spatial Database",
    },
  ];

  return (

    <div className="min-h-screen bg-slate-950 text-white">

      <Navbar />

      {/* HERO */}
      <section className="px-10 py-24">

        <div className="max-w-6xl mx-auto">

          <p className="text-cyan-400 uppercase tracking-widest">
            Portfolio
          </p>

          <h1 className="text-6xl font-extrabold mt-6">
            Selected Projects &
            Professional Experience
          </h1>

        </div>

      </section>

      {/* PROJECT GRID */}
      <section className="px-10 pb-20">

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">

          {projects.map((project, index) => (

            <div
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden"
            >

              <div className="h-52 bg-slate-800"></div>

              <div className="p-8">

                <p className="text-cyan-400 text-sm uppercase tracking-widest">
                  {project.category}
                </p>

                <h2 className="text-2xl font-bold mt-4">
                  {project.title}
                </h2>

              </div>

            </div>

          ))}

        </div>

      </section>

      <Footer />

    </div>

  );

}