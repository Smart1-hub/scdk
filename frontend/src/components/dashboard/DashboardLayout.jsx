import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function DashboardLayout({
  children,
}) {

  return (

    <div
      className="
        min-h-screen
        bg-gradient-to-br
        from-slate-950
        via-slate-900
        to-black
        text-white
      "
    >

      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN */}
      <div className="ml-72">

        <Topbar />

        <main className="p-10">

          {children}

        </main>

      </div>

    </div>

  );

}