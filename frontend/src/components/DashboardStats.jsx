import { useEffect, useState } from "react";
import API from "../services/api";

export default function DashboardStats() {

  const [stats, setStats] = useState({});

  useEffect(() => {

    API.get("/dashboard/stats")
      .then((res) => {
        setStats(res.data);
      })
      .catch((err) => {
        console.error(err);
      });

  }, []);

  return (

    <div className="grid md:grid-cols-4 gap-6">

      {/* PROJECTS */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl">

        <p className="text-slate-400 text-sm">
          Total Projects
        </p>

        <h2 className="text-4xl font-bold mt-3 text-cyan-400">
          {stats.totalProjects}
        </h2>

      </div>

      {/* SURVEYS */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl">

        <p className="text-slate-400 text-sm">
          Active Surveys
        </p>

        <h2 className="text-4xl font-bold mt-3 text-green-400">
          {stats.activeSurveys}
        </h2>

      </div>

      {/* INFRASTRUCTURE */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl">

        <p className="text-slate-400 text-sm">
          Infrastructure Assets
        </p>

        <h2 className="text-4xl font-bold mt-3 text-yellow-400">
          {stats.infrastructureAssets}
        </h2>

      </div>

      {/* ZONES */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl">

        <p className="text-slate-400 text-sm">
          Planning Zones
        </p>

        <h2 className="text-4xl font-bold mt-3 text-pink-400">
          {stats.planningZones}
        </h2>

      </div>

    </div>

  );

}