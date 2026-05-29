import {
  Database,
  Globe2,
  Layers3,
  MapPinned,
  Radar,
  Route,
} from "lucide-react";

import DashboardLayout from "../../components/dashboard/DashboardLayout";

import DashboardCard from "../../components/dashboard/DashboardCard";

import NotificationPanel from "../../components/dashboard/NotificationPanel";

import ActivityFeed from "../../components/dashboard/ActivityFeed";

import AnimatedContainer from "../../components/ui/AnimatedContainer";

import MapView from "../../components/MapView";

export default function GISDashboard() {

  return (

    <DashboardLayout>

      {/* HEADER */}
      <AnimatedContainer>

        <div className="mb-12">

          <p className="uppercase tracking-[0.3em] text-cyan-400">

            Enterprise GIS Intelligence System

          </p>

          <h1 className="text-6xl font-extrabold mt-6">

            GIS Operations Center

          </h1>

          <p className="text-slate-400 text-xl mt-6 max-w-4xl">

            Real-time spatial intelligence,
            infrastructure monitoring,
            geospatial analytics,
            environmental systems,
            and smart-city GIS operations.

          </p>

        </div>

      </AnimatedContainer>

      {/* KPI CARDS */}
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

        <DashboardCard
          title="GIS Layers"
          value="248"
          subtitle="Enterprise spatial datasets"
          icon={<Layers3 size={32} />}
        />

        <DashboardCard
          title="Mapped Assets"
          value="5,824"
          subtitle="Infrastructure assets tracked"
          icon={<MapPinned size={32} />}
        />

        <DashboardCard
          title="Spatial Queries"
          value="1,284"
          subtitle="Processed geospatial requests"
          icon={<Database size={32} />}
        />

        <DashboardCard
          title="Monitoring Zones"
          value="64"
          subtitle="Active operational zones"
          icon={<Radar size={32} />}
        />

      </div>

      {/* MAP + SIDE PANEL */}
      <div className="grid xl:grid-cols-3 gap-8 mt-12">

        {/* MAP */}
        <AnimatedContainer className="xl:col-span-2">

          <div
            className="
              bg-slate-900/70
              border
              border-slate-800
              backdrop-blur-xl
              rounded-3xl
              p-8
            "
          >

            {/* HEADER */}
            <div className="flex items-center justify-between mb-8">

              <div>

                <h2 className="text-3xl font-bold">

                  Enterprise GIS Map

                </h2>

                <p className="text-slate-400 mt-2">

                  Live geospatial intelligence platform

                </p>

              </div>

              <div
                className="
                  px-5
                  py-3
                  rounded-2xl
                  bg-cyan-500/10
                  border
                  border-cyan-500/20
                  text-cyan-400
                  font-semibold
                "
              >

                Live Monitoring

              </div>

            </div>

            {/* MAP */}
            <div className="rounded-3xl overflow-hidden">

              <MapView />

            </div>

          </div>

        </AnimatedContainer>

        {/* SIDE PANEL */}
        <AnimatedContainer delay={0.2}>

          <div className="space-y-8">

            {/* GIS STATUS */}
            <div
              className="
                bg-slate-900/70
                border
                border-slate-800
                backdrop-blur-xl
                rounded-3xl
                p-8
              "
            >

              <div className="flex items-center gap-4">

                <div
                  className="
                    w-16
                    h-16
                    rounded-2xl
                    bg-cyan-500/10
                    border
                    border-cyan-500/20
                    flex
                    items-center
                    justify-center
                    text-cyan-400
                  "
                >

                  <Globe2 size={30} />

                </div>

                <div>

                  <h2 className="text-2xl font-bold">

                    GIS Status

                  </h2>

                  <p className="text-slate-500 mt-1">

                    Spatial systems operational

                  </p>

                </div>

              </div>

              {/* STATUS ITEMS */}
              <div className="space-y-6 mt-10">

                <div>

                  <div className="flex justify-between">

                    <span className="text-slate-400">

                      Spatial Database

                    </span>

                    <span className="text-cyan-400">

                      Online

                    </span>

                  </div>

                  <div
                    className="
                      mt-3
                      h-2
                      rounded-full
                      bg-slate-800
                    "
                  >

                    <div
                      className="
                        h-2
                        rounded-full
                        bg-cyan-400
                        w-[94%]
                      "
                    ></div>

                  </div>

                </div>

                <div>

                  <div className="flex justify-between">

                    <span className="text-slate-400">

                      Layer Synchronization

                    </span>

                    <span className="text-cyan-400">

                      88%

                    </span>

                  </div>

                  <div
                    className="
                      mt-3
                      h-2
                      rounded-full
                      bg-slate-800
                    "
                  >

                    <div
                      className="
                        h-2
                        rounded-full
                        bg-cyan-400
                        w-[88%]
                      "
                    ></div>

                  </div>

                </div>

                <div>

                  <div className="flex justify-between">

                    <span className="text-slate-400">

                      Infrastructure Monitoring

                    </span>

                    <span className="text-cyan-400">

                      Active

                    </span>

                  </div>

                  <div
                    className="
                      mt-3
                      h-2
                      rounded-full
                      bg-slate-800
                    "
                  >

                    <div
                      className="
                        h-2
                        rounded-full
                        bg-cyan-400
                        w-[97%]
                      "
                    ></div>

                  </div>

                </div>

              </div>

            </div>

            {/* QUICK GIS ACTIONS */}
            <div
              className="
                bg-slate-900/70
                border
                border-slate-800
                backdrop-blur-xl
                rounded-3xl
                p-8
              "
            >

              <h2 className="text-2xl font-bold">

                GIS Operations

              </h2>

              <div className="space-y-4 mt-8">

                <button
                  className="
                    w-full
                    flex
                    items-center
                    gap-4
                    bg-slate-950
                    hover:bg-cyan-500/10
                    border
                    border-slate-800
                    hover:border-cyan-500/30
                    transition-all
                    rounded-2xl
                    p-5
                  "
                >

                  <Layers3 className="text-cyan-400" />

                  <span>

                    Manage GIS Layers

                  </span>

                </button>

                <button
                  className="
                    w-full
                    flex
                    items-center
                    gap-4
                    bg-slate-950
                    hover:bg-cyan-500/10
                    border
                    border-slate-800
                    hover:border-cyan-500/30
                    transition-all
                    rounded-2xl
                    p-5
                  "
                >

                  <Route className="text-cyan-400" />

                  <span>

                    Transportation Networks

                  </span>

                </button>

                <button
                  className="
                    w-full
                    flex
                    items-center
                    gap-4
                    bg-slate-950
                    hover:bg-cyan-500/10
                    border
                    border-slate-800
                    hover:border-cyan-500/30
                    transition-all
                    rounded-2xl
                    p-5
                  "
                >

                  <Database className="text-cyan-400" />

                  <span>

                    Spatial Database Tools

                  </span>

                </button>

              </div>

            </div>

          </div>

        </AnimatedContainer>

      </div>

      {/* LOWER PANELS */}
      <div className="grid xl:grid-cols-2 gap-8 mt-12">

        <NotificationPanel />

        <ActivityFeed />

      </div>

    </DashboardLayout>

  );

}