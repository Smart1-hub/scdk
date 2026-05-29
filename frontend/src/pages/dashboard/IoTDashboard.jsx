import {
  Activity,
  Cpu,
  RadioTower,
  ShieldCheck,
  Wifi,
  Zap,
} from "lucide-react";

import DashboardLayout from "../../components/dashboard/DashboardLayout";

import DashboardCard from "../../components/dashboard/DashboardCard";

import AnimatedContainer from "../../components/ui/AnimatedContainer";

import NotificationPanel from "../../components/dashboard/NotificationPanel";

import ActivityFeed from "../../components/dashboard/ActivityFeed";

export default function IoTDashboard() {

  return (

    <DashboardLayout>

      {/* HEADER */}
      <AnimatedContainer>

        <div className="mb-14">

          <p className="uppercase tracking-[0.3em] text-cyan-400">

            Enterprise IoT Infrastructure

          </p>

          <h1 className="text-6xl font-extrabold mt-6">

            IoT Monitoring Center

          </h1>

          <p className="text-slate-400 text-xl mt-6 max-w-4xl">

            Real-time sensor monitoring,
            connected infrastructure systems,
            smart-device intelligence,
            operational telemetry,
            and enterprise IoT analytics.

          </p>

        </div>

      </AnimatedContainer>

      {/* KPI CARDS */}
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

        <DashboardCard
          title="Connected Sensors"
          value="1,248"
          subtitle="Active IoT devices"
          icon={<RadioTower size={30} />}
        />

        <DashboardCard
          title="System Uptime"
          value="99.2%"
          subtitle="Enterprise network stability"
          icon={<ShieldCheck size={30} />}
        />

        <DashboardCard
          title="Data Streams"
          value="18.4K"
          subtitle="Live telemetry feeds"
          icon={<Activity size={30} />}
        />

        <DashboardCard
          title="Power Efficiency"
          value="94%"
          subtitle="Infrastructure optimization"
          icon={<Zap size={30} />}
        />

      </div>

      {/* SENSOR GRID + STATUS */}
      <div className="grid xl:grid-cols-3 gap-8 mt-12">

        {/* SENSOR STATUS */}
        <AnimatedContainer className="xl:col-span-2">

          <div
            className="
              relative
              overflow-hidden
              bg-slate-900/70
              border
              border-slate-800
              rounded-3xl
              p-8
              min-h-[450px]
            "
          >

            {/* GLOW */}
            <div
              className="
                absolute
                top-0
                right-0
                w-64
                h-64
                bg-cyan-500/10
                blur-3xl
                rounded-full
              "
            ></div>

            <div className="relative z-10">

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

                  <Cpu size={30} />

                </div>

                <div>

                  <h2 className="text-3xl font-bold">

                    Sensor Grid

                  </h2>

                  <p className="text-slate-500 mt-1">

                    Live infrastructure device monitoring

                  </p>

                </div>

              </div>

              {/* SENSOR GRID */}
              <div className="grid md:grid-cols-3 gap-6 mt-12">

                {[1, 2, 3, 4, 5, 6].map((sensor) => (

                  <div
                    key={sensor}
                    className="
                      bg-slate-950/80
                      border
                      border-slate-800
                      rounded-2xl
                      p-6
                      hover:border-cyan-500/30
                      transition-all
                    "
                  >

                    <div className="flex items-center justify-between">

                      <div
                        className="
                          w-12
                          h-12
                          rounded-xl
                          bg-cyan-500/10
                          flex
                          items-center
                          justify-center
                          text-cyan-400
                        "
                      >

                        <Wifi size={22} />

                      </div>

                      <div
                        className="
                          w-3
                          h-3
                          rounded-full
                          bg-green-400
                        "
                      ></div>

                    </div>

                    <h3 className="text-xl font-bold mt-6">

                      Sensor #{sensor}

                    </h3>

                    <p className="text-slate-500 mt-2">

                      Operational

                    </p>

                    <div className="mt-6">

                      <div className="flex justify-between text-sm">

                        <span className="text-slate-400">

                          Signal

                        </span>

                        <span className="text-cyan-400">

                          96%

                        </span>

                      </div>

                      <div
                        className="
                          mt-2
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
                            w-[96%]
                          "
                        ></div>

                      </div>

                    </div>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </AnimatedContainer>

        {/* SIDE STATUS */}
        <AnimatedContainer delay={0.2}>

          <div className="space-y-8">

            {/* NETWORK STATUS */}
            <div
              className="
                bg-slate-900/70
                border
                border-slate-800
                rounded-3xl
                p-8
              "
            >

              <h2 className="text-2xl font-bold">

                Network Status

              </h2>

              <div className="space-y-8 mt-10">

                <div>

                  <div className="flex justify-between">

                    <span className="text-slate-400">

                      Device Connectivity

                    </span>

                    <span className="text-cyan-400">

                      98%

                    </span>

                  </div>

                  <div
                    className="
                      mt-3
                      h-3
                      rounded-full
                      bg-slate-800
                    "
                  >

                    <div
                      className="
                        h-3
                        rounded-full
                        bg-cyan-400
                        w-[98%]
                      "
                    ></div>

                  </div>

                </div>

                <div>

                  <div className="flex justify-between">

                    <span className="text-slate-400">

                      Telemetry Sync

                    </span>

                    <span className="text-cyan-400">

                      94%

                    </span>

                  </div>

                  <div
                    className="
                      mt-3
                      h-3
                      rounded-full
                      bg-slate-800
                    "
                  >

                    <div
                      className="
                        h-3
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

                      Infrastructure Health

                    </span>

                    <span className="text-cyan-400">

                      Stable

                    </span>

                  </div>

                  <div
                    className="
                      mt-3
                      h-3
                      rounded-full
                      bg-slate-800
                    "
                  >

                    <div
                      className="
                        h-3
                        rounded-full
                        bg-cyan-400
                        w-[97%]
                      "
                    ></div>

                  </div>

                </div>

              </div>

            </div>

            <NotificationPanel />

          </div>

        </AnimatedContainer>

      </div>

      {/* LOWER SECTION */}
      <div className="mt-12">

        <ActivityFeed />

      </div>

    </DashboardLayout>

  );

}