import {
  Activity,
  AlertTriangle,
  CheckCircle2,
  Database,
  Globe2,
  RadioTower,
  ShieldCheck,
} from "lucide-react";

import DashboardLayout from "../../components/dashboard/DashboardLayout";

import AnimatedContainer from "../../components/ui/AnimatedContainer";

export default function ActivityPage() {

  const activities = [

    {
      icon: <Database size={22} />,
      title: "PostGIS Database Updated",
      description:
        "Spatial infrastructure layers synchronized successfully.",
      time: "2 mins ago",
      status: "success",
    },

    {
      icon: <RadioTower size={22} />,
      title: "IoT Sensor Cluster Online",
      description:
        "Traffic monitoring sensors reconnected to enterprise network.",
      time: "10 mins ago",
      status: "success",
    },

    {
      icon: <AlertTriangle size={22} />,
      title: "Flood Alert Triggered",
      description:
        "Heavy rainfall detected within flood-risk corridor.",
      time: "25 mins ago",
      status: "warning",
    },

    {
      icon: <Globe2 size={22} />,
      title: "GIS Layer Imported",
      description:
        "Transportation infrastructure dataset added successfully.",
      time: "40 mins ago",
      status: "success",
    },

    {
      icon: <ShieldCheck size={22} />,
      title: "Security Scan Completed",
      description:
        "Enterprise systems verified with no vulnerabilities detected.",
      time: "1 hour ago",
      status: "success",
    },

  ];

  const getStatusColor = (status) => {

    switch (status) {

      case "warning":
        return `
          border-yellow-500/30
          bg-yellow-500/10
          text-yellow-400
        `;

      case "success":
        return `
          border-cyan-500/20
          bg-cyan-500/10
          text-cyan-400
        `;

      default:
        return `
          border-slate-700
          bg-slate-800
          text-slate-400
        `;

    }

  };

  return (

    <DashboardLayout>

      {/* HEADER */}
      <AnimatedContainer>

        <div className="mb-14">

          <p className="uppercase tracking-[0.3em] text-cyan-400">

            Enterprise Operational Monitoring

          </p>

          <h1 className="text-6xl font-extrabold mt-6">

            System Activity Center

          </h1>

          <p className="text-slate-400 text-xl mt-6 max-w-4xl">

            Real-time enterprise logs,
            GIS synchronization updates,
            IoT operational monitoring,
            security events,
            and infrastructure activity streams.

          </p>

        </div>

      </AnimatedContainer>

      {/* SUMMARY */}
      <div className="grid md:grid-cols-3 gap-8 mb-12">

        {/* ACTIVE EVENTS */}
        <div
          className="
            bg-slate-900/70
            border
            border-slate-800
            rounded-3xl
            p-8
          "
        >

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

              <Activity size={28} />

            </div>

            <div>

              <p className="text-slate-400">

                Active Events

              </p>

              <h2 className="text-4xl font-bold mt-2">

                128

              </h2>

            </div>

          </div>

        </div>

        {/* SUCCESSFUL TASKS */}
        <div
          className="
            bg-slate-900/70
            border
            border-slate-800
            rounded-3xl
            p-8
          "
        >

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

              <CheckCircle2 size={28} />

            </div>

            <div>

              <p className="text-slate-400">

                Successful Operations

              </p>

              <h2 className="text-4xl font-bold mt-2">

                96%

              </h2>

            </div>

          </div>

        </div>

        {/* ALERTS */}
        <div
          className="
            bg-slate-900/70
            border
            border-slate-800
            rounded-3xl
            p-8
          "
        >

          <div className="flex items-center gap-4">

            <div
              className="
                w-14
                h-14
                rounded-2xl
                bg-yellow-500/10
                border
                border-yellow-500/20
                flex
                items-center
                justify-center
                text-yellow-400
              "
            >

              <AlertTriangle size={28} />

            </div>

            <div>

              <p className="text-slate-400">

                Critical Alerts

              </p>

              <h2 className="text-4xl font-bold mt-2">

                4

              </h2>

            </div>

          </div>

        </div>

      </div>

      {/* ACTIVITY FEED */}
      <AnimatedContainer delay={0.2}>

        <div
          className="
            bg-slate-900/70
            border
            border-slate-800
            rounded-3xl
            p-10
          "
        >

          {/* HEADER */}
          <div className="flex items-center justify-between">

            <div>

              <h2 className="text-3xl font-bold">

                Live Activity Feed

              </h2>

              <p className="text-slate-500 mt-2">

                Enterprise operational event stream

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

          {/* FEED ITEMS */}
          <div className="space-y-6 mt-12">

            {activities.map((item, index) => (

              <div
                key={index}
                className="
                  flex
                  items-start
                  gap-6
                  border-b
                  border-slate-800
                  pb-6
                "
              >

                {/* ICON */}
                <div
                  className={`
                    w-14
                    h-14
                    rounded-2xl
                    border
                    flex
                    items-center
                    justify-center
                    ${getStatusColor(item.status)}
                  `}
                >

                  {item.icon}

                </div>

                {/* CONTENT */}
                <div className="flex-1">

                  <div className="flex justify-between items-start">

                    <div>

                      <h3 className="text-xl font-bold">

                        {item.title}

                      </h3>

                      <p className="text-slate-400 mt-2">

                        {item.description}

                      </p>

                    </div>

                    <span className="text-slate-500 text-sm">

                      {item.time}

                    </span>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </AnimatedContainer>

    </DashboardLayout>

  );

}