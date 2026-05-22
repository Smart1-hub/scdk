import Navbar from "../Navbar";
import Footer from "../Footer";

export default function PageLayout({
  children,
}) {

  return (

    <div className="min-h-screen bg-slate-950 text-white relative overflow-hidden">

      {/* GLOWS */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full"></div>

      <Navbar />

      <main className="relative z-10">

        {children}

      </main>

      <Footer />

    </div>

  );

}