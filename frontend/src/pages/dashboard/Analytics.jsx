import {
  Activity,
  BarChart3,
  Database,
  Globe2,
  TrendingUp,
  Waves,
} from "lucide-react";

import DashboardLayout from "../../components/dashboard/DashboardLayout";

import DashboardCard from "../../components/dashboard/DashboardCard";

import AnimatedContainer from "../../components/ui/AnimatedContainer";

import NotificationPanel from "../../components/dashboard/NotificationPanel";

import ActivityFeed from "../../components/dashboard/ActivityFeed";

export default function Analytics() {

  return (

    <DashboardLayout>

      {/* HEADER */}
      <AnimatedContainer>

        <div className="mb-14">

          <p className="uppercase tracking-[0.3em] text-cyan-400">

            Enterprise Urban Intelligence

          </p>

          <h1 className="text-6xl font-extrabold mt-6">

            Analytics & Intelligence Center

          </h1>

          <p className="text-slate-400 text-xl mt-6 max-w-4xl">

            Real-time smart-city analytics,
            GIS intelligence,
            transportation monitoring,
            environmental metrics,
            and enterprise operational insights.

          </p>

        </div>

      </AnimatedContainer>

      {/* KPI CARDS */}
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

        <DashboardCard
          title="Urban Data Streams"
          value="8.4K"
          subtitle="Real-time intelligence feeds"
          icon={<Database size={30} />}
        />

        <DashboardCard
          title="GIS Analytics"
          value="1,284"
          subtitle="Processed spatial analyses"
          icon={<Globe2 size={30} />}
        />

        <DashboardCard
          title="Infrastructure Health"
          value="96%"
          subtitle="Operational efficiency score"
          icon={<Activity size={30} />}
        />

        <DashboardCard
          title="Growth Trend"
          value="+18%"
          subtitle="Urban intelligence increase"
          icon={<TrendingUp size={30} />}
        />

      </div>

      {/* CHARTS SECTION */}
      <div className="grid xl:grid-cols-2 gap-8 mt-12">

        {/* CHART 1 */}
        <AnimatedContainer>

          <div
            className="
              relative
              overflow-hidden
              bg-slate-900/70
              border
              border-slate-800
              rounded-3xl
              p-8
              h-[420px]
            "
          >

            {/* GLOW */}
            <div
              className="
                absolute
                top-0
                right-0
                w-56
                h-56
                bg-cyan-500/10
                blur-3xl
                rounded-full
              "
            ></div>

            <div className="relative z-10">

              <div className="flex items-center gap-4">

                <div
                  className="
                    w-14
                    h-14
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

                  <BarChart3 size={28} />

                </div>

                <div>

                  <h2 className="text-3xl font-bold">

                    Urban Analytics

                  </h2>

                  <p className="text-slate-500 mt-1">

                    Smart-city operational metrics

                  </p>

                </div>

              </div>

              {/* FAKE CHART */}
              <div
                className="
                  flex
                  items-end
                  justify-between
                  gap-4
                  h-56
                  mt-16
                "
              >

                {[45, 70, 55, 90, 65, 85, 100].map(
                  (height, index) => (

                    <div
                      key={index}
                      className="flex-1"
                    >

                      <div
                        className="
                          bg-gradient-to-t
                          from-cyan-500
                          to-cyan-300
                          rounded-t-2xl
                          transition-all
                          duration-500
                          hover:scale-105
                        "
                        style={{
                          height: `${height}%`,
                        }}
                      ></div>

                    </div>

                  )
                )}

              </div>

            </div>

          </div>

        </AnimatedContainer>

        {/* CHART 2 */}
        <AnimatedContainer delay={0.2}>

          <div
            className="
              relative
              overflow-hidden
              bg-slate-900/70
              border
              border-slate-800
              rounded-3xl
              p-8
              h-[420px]
            "
          >

            <div
              className="
                absolute
                bottom-0
                left-0
                w-56
                h-56
                bg-cyan-500/10
                blur-3xl
                rounded-full
              "
            ></div>

            <div className="relative z-10">

              <div className="flex items-center gap-4">

                <div
                  className="
                    w-14
                    h-14
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

                  <Waves size={28} />

                </div>

                <div>

                  <h2 className="text-3xl font-bold">

                    Environmental Metrics

                  </h2>

                  <p className="text-slate-500 mt-1">

                    Flood & climate intelligence

                  </p>

                </div>

              </div>

              {/* METRIC BLOCKS */}
              <div className="space-y-8 mt-14">

                <div>

                  <div className="flex justify-between">

                    <span className="text-slate-400">

                      Flood Monitoring

                    </span>

                    <span className="text-cyan-400">

                      92%

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
                        w-[92%]
                      "
                    ></div>

                  </div>

                </div>

                <div>

                  <div className="flex justify-between">

                    <span className="text-slate-400">

                      Air Quality

                    </span>

                    <span className="text-cyan-400">

                      84%

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
                        w-[84%]
                      "
                    ></div>

                  </div>

                </div>

                <div>

                  <div className="flex justify-between">

                    <span className="text-slate-400">

                      Infrastructure Resilience

                    </span>

                    <span className="text-cyan-400">

                      96%

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
                        w-[96%]
                      "
                    ></div>

                  </div>

                </div>

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