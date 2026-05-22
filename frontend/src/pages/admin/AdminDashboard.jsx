import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";

export default function AdminDashboard() {

  const cards = [
    { title: "Projects", link: "/admin/projects" },
    { title: "IoT Devices", link: "/admin/iot" },
    { title: "Users", link: "/admin/users" },
    { title: "Analytics", link: "/admin/analytics" },
    { title: "Settings", link: "/admin/settings" },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      <Navbar />

      <div className="px-10 py-24">

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold"
        >
          Admin Control Center
        </motion.h1>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {cards.map((c, i) => (
            <Link key={i} to={c.link}>
              <motion.div
                whileHover={{ scale: 1.05, y: -8 }}
                className="p-8 bg-slate-900 border border-slate-800 rounded-2xl"
              >
                <h2 className="text-2xl font-bold">{c.title}</h2>
              </motion.div>
            </Link>
          ))}

        </div>

      </div>

    </div>
  );
}