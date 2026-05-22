import { useState } from "react";
import { motion } from "framer-motion";

export default function ProjectsManagement() {

  const [projects, setProjects] = useState([]);
  const [form, setForm] = useState({
    name: "",
    description: "",
  });

  const addProject = () => {
    setProjects([...projects, form]);
    setForm({ name: "", description: "" });
  };

  return (
    <div className="p-10 text-white">

      <h1 className="text-4xl font-bold mb-8">Project Management</h1>

      {/* FORM */}
      <div className="bg-slate-900 p-6 rounded-2xl mb-10">
        <input
          placeholder="Project Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full p-3 bg-slate-950 mb-4 rounded"
        />

        <textarea
          placeholder="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          className="w-full p-3 bg-slate-950 rounded"
        />

        <button
          onClick={addProject}
          className="mt-4 bg-cyan-500 px-6 py-3 rounded-xl font-bold"
        >
          Add Project
        </button>
      </div>

      {/* LIST */}
      <div className="grid gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.02 }}
            className="p-6 bg-slate-900 rounded-xl"
          >
            <h2 className="text-xl font-bold">{p.name}</h2>
            <p className="text-slate-400">{p.description}</p>
          </motion.div>
        ))}
      </div>

    </div>
  );
}