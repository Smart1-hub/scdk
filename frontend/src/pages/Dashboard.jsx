import {
  Activity,
  BarChart3,
  Globe2,
  RadioTower,
} from "lucide-react";

import DashboardLayout from "../components/dashboard/DashboardLayout";

import DashboardCard from "../components/dashboard/DashboardCard";

import NotificationPanel from "../components/dashboard/NotificationPanel";

import ActivityFeed from "../components/dashboard/ActivityFeed";

import AnimatedContainer from "../components/ui/AnimatedContainer";

export default function Dashboard() {

  return (

    <DashboardLayout>

      {/* PAGE HEADER */}
      <AnimatedContainer>

        <div className="mb-12">

          <p className="uppercase tracking-[0.3em] text-cyan-400">

            Enterprise Smart City Platform

          </p>

          <h1 className="text-6xl font-extrabold mt-6">

            Urban Intelligence Dashboard

          </h1>

          <p className="text-slate-400 text-xl mt-6 max-w-3xl">

            Real-time enterprise monitoring,
            GIS intelligence,
            infrastructure analytics,
            transportation systems,
            and smart-city operations.

          </p>

        </div>

      </AnimatedContainer>

      {/* METRICS */}
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

        <DashboardCard
          title="Connected Sensors"
          value="128"
          subtitle="Active IoT infrastructure"
          icon={<RadioTower size={32} />}
        />

        <DashboardCard
          title="Urban Projects"
          value="42"
          subtitle="Running enterprise projects"
          icon={<Globe2 size={32} />}
        />

        <DashboardCard
          title="Analytics Streams"
          value="67"
          subtitle="Live urban intelligence feeds"
          icon={<BarChart3 size={32} />}
        />

        <DashboardCard
          title="System Activity"
          value="94%"
          subtitle="Operational efficiency"
          icon={<Activity size={32} />}
        />

      </div>

      {/* PANELS */}
      <div className="grid xl:grid-cols-2 gap-8 mt-12">

        <NotificationPanel />

        <ActivityFeed />

      </div>

      {/* ANALYTICS SECTION */}
      <div className="grid xl:grid-cols-2 gap-8 mt-12">

        {/* LEFT */}
        <AnimatedContainer>

          <div
            className="
              bg-slate-900/70
              border
              border-slate-800
              backdrop-blur-xl
              rounded-3xl
              p-10
              h-[350px]
            "
          >

            <h2 className="text-3xl font-bold">

              Urban Intelligence Analytics

            </h2>

            <p className="text-slate-400 mt-6">

              Real-time enterprise urban metrics,
              infrastructure intelligence,
              GIS analytics,
              and smart-city operational monitoring.

            </p>

            {/* PLACEHOLDER */}
            <div
              className="
                mt-12
                h-40
                rounded-2xl
                border
                border-dashed
                border-cyan-500/30
                flex
                items-center
                justify-center
                text-slate-500
              "
            >

              Analytics Visualization Area

            </div>

          </div>

        </AnimatedContainer>

        {/* RIGHT */}
        <AnimatedContainer delay={0.2}>

          <div
            className="
              bg-slate-900/70
              border
              border-slate-800
              backdrop-blur-xl
              rounded-3xl
              p-10
              h-[350px]
            "
          >

            <h2 className="text-3xl font-bold">

              GIS Infrastructure Monitoring

            </h2>

            <p className="text-slate-400 mt-6">

              Spatial infrastructure systems,
              geospatial intelligence,
              transportation networks,
              and environmental monitoring.

            </p>

            {/* PLACEHOLDER */}
            <div
              className="
                mt-12
                h-40
                rounded-2xl
                border
                border-dashed
                border-cyan-500/30
                flex
                items-center
                justify-center
                text-slate-500
              "
            >

              GIS Visualization Area

            </div>

          </div>

        </AnimatedContainer>

      </div>

    </DashboardLayout>

  );

}