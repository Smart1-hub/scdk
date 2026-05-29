import {
  CloudRain,
  Leaf,
  Thermometer,
  Waves,
} from "lucide-react";

import DashboardLayout from "../../components/dashboard/DashboardLayout";

import DashboardCard from "../../components/dashboard/DashboardCard";

import AnimatedContainer from "../../components/ui/AnimatedContainer";

import NotificationPanel from "../../components/dashboard/NotificationPanel";

export default function Environment() {

  return (

    <DashboardLayout>

      <AnimatedContainer>

        <div className="mb-12">

          <p className="uppercase tracking-[0.3em] text-cyan-400">

            Environmental Intelligence Platform

          </p>

          <h1 className="text-6xl font-extrabold mt-6">

            Environmental Monitoring Center

          </h1>

          <p className="text-slate-400 text-xl mt-6 max-w-4xl">

            Climate monitoring,
            flood intelligence,
            environmental analytics,
            sustainability systems,
            and smart ecological management.

          </p>

        </div>

      </AnimatedContainer>

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

        <DashboardCard
          title="Flood Zones"
          value="18"
          subtitle="Active flood monitoring areas"
          icon={<Waves size={30} />}
        />

        <DashboardCard
          title="Climate Stations"
          value="84"
          subtitle="Environmental sensor points"
          icon={<CloudRain size={30} />}
        />

        <DashboardCard
          title="Air Quality"
          value="92%"
          subtitle="Urban air quality efficiency"
          icon={<Leaf size={30} />}
        />

        <DashboardCard
          title="Temperature"
          value="29°C"
          subtitle="Average urban temperature"
          icon={<Thermometer size={30} />}
        />

      </div>

      <div className="mt-12">

        <NotificationPanel />

      </div>

    </DashboardLayout>

  );

}