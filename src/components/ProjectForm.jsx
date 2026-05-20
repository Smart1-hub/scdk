import { useState } from "react";
import API from "../services/api";

export default function ProjectForm() {

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    latitude: "",
    longitude: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      await API.post("/projects", {
        ...formData,
        latitude: parseFloat(formData.latitude),
        longitude: parseFloat(formData.longitude),
      });

      alert("Project added successfully!");

      window.location.reload();

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">

      <h2 className="text-3xl font-bold mb-6">
        Add GIS Project
      </h2>

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >

        <input
          type="text"
          name="name"
          placeholder="Project Name"
          onChange={handleChange}
          className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700"
          required
        />

        <textarea
          name="description"
          placeholder="Project Description"
          onChange={handleChange}
          className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700"
          required
        />

        <input
          type="number"
          step="any"
          name="latitude"
          placeholder="Latitude"
          onChange={handleChange}
          className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700"
          required
        />

        <input
          type="number"
          step="any"
          name="longitude"
          placeholder="Longitude"
          onChange={handleChange}
          className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700"
          required
        />

        <button
          type="submit"
          className="w-full bg-cyan-500 hover:bg-cyan-600 py-4 rounded-xl font-bold"
        >
          Save Project
        </button>

      </form>

    </div>
  );
}