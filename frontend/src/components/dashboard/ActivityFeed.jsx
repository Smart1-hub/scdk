import {
  Activity,
  Database,
  Globe2,
  RadioTower,
} from "lucide-react";

import AnimatedContainer from "../ui/AnimatedContainer";

export default function ActivityFeed() {

  const activities = [

    {
      icon: <Globe2 size={20} />,
      title: "Urban Analytics Updated",
      time: "2 mins ago",
    },

    {
      icon: <RadioTower size={20} />,
      title: "IoT Sensor Cluster Synced",
      time: "10 mins ago",
    },

    {
      icon: <Database size={20} />,
      title: "PostGIS Layer Imported",
      time: "25 mins ago",
    },

    {
      icon: <Activity size={20} />,
      title: "Traffic Monitoring Active",
      time: "40 mins ago",
    },

  ];

  return (

    <AnimatedContainer>

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
        <div className="flex items-center gap-4">

          <div
            className="
              w-14
              h-14
              rounded-2xl
              bg-cyan-500/10
              flex
              items-center
              justify-center
            "
          >

            <Activity className="text-cyan-400" />

          </div>

          <div>

            <h2 className="text-2xl font-bold">

              Activity Feed

            </h2>

            <p className="text-slate-500 mt-1">

              Live enterprise activity stream

            </p>

          </div>

        </div>

        {/* FEED */}
        <div className="mt-10 space-y-6">

          {activities.map((item, index) => (

            <div
              key={index}
              className="
                flex
                items-start
                gap-4
                border-b
                border-slate-800
                pb-5
              "
            >

              <div
                className="
                  w-12
                  h-12
                  rounded-2xl
                  bg-slate-950
                  border
                  border-slate-800
                  flex
                  items-center
                  justify-center
                  text-cyan-400
                "
              >

                {item.icon}

              </div>

              <div className="flex-1">

                <h3 className="font-semibold">

                  {item.title}

                </h3>

                <p className="text-slate-500 text-sm mt-2">

                  {item.time}

                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </AnimatedContainer>

  );

}