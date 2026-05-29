import {
  Car,
  MapPinned,
  Route,
  TrafficCone,
} from "lucide-react";

import DashboardLayout from "../../components/dashboard/DashboardLayout";

import DashboardCard from "../../components/dashboard/DashboardCard";

import AnimatedContainer from "../../components/ui/AnimatedContainer";

import ActivityFeed from "../../components/dashboard/ActivityFeed";

import NotificationPanel from "../../components/dashboard/NotificationPanel";

export default function Transportation() {

  return (

    <DashboardLayout>

      {/* HEADER */}
      <AnimatedContainer>

        <div className="mb-12">

          <p className="uppercase tracking-[0.3em] text-cyan-400">

            Smart Mobility Intelligence

          </p>

          <h1 className="text-6xl font-extrabold mt-6">

            Transportation Operations Center

          </h1>

          <p className="text-slate-400 text-xl mt-6 max-w-4xl">

            Enterprise transportation analytics,
            mobility intelligence,
            route optimization,
            traffic monitoring,
            and smart urban mobility systems.

          </p>

        </div>

      </AnimatedContainer>

      {/* KPI */}
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

        <DashboardCard
          title="Traffic Sensors"
          value="214"
          subtitle="Active monitoring devices"
          icon={<TrafficCone size={30} />}
        />

        <DashboardCard
          title="Connected Routes"
          value="128"
          subtitle="Mapped transport corridors"
          icon={<Route size={30} />}
        />

        <DashboardCard
          title="Vehicle Streams"
          value="5.2K"
          subtitle="Real-time vehicle tracking"
          icon={<Car size={30} />}
        />

        <DashboardCard
          title="Mobility Zones"
          value="32"
          subtitle="Operational transport sectors"
          icon={<MapPinned size={30} />}
        />

      </div>

      {/* CONTENT */}
      <div className="grid xl:grid-cols-2 gap-8 mt-12">

        <NotificationPanel />

        <ActivityFeed />

      </div>

    </DashboardLayout>

  );

}