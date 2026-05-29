import {
  AlertTriangle,
  Bell,
  CheckCircle2,
  Info,
} from "lucide-react";

import AnimatedContainer from "../ui/AnimatedContainer";

export default function NotificationPanel() {

  const notifications = [

    {
      type: "alert",
      title: "Flood Risk Warning",
      message:
        "High rainfall intensity detected in Zone B4.",
    },

    {
      type: "success",
      title: "GIS Sync Completed",
      message:
        "Spatial database successfully updated.",
    },

    {
      type: "info",
      title: "IoT Sensor Active",
      message:
        "Traffic sensor cluster is now online.",
    },

  ];

  const getIcon = (type) => {

    switch (type) {

      case "alert":
        return (
          <AlertTriangle
            className="text-red-400"
            size={22}
          />
        );

      case "success":
        return (
          <CheckCircle2
            className="text-green-400"
            size={22}
          />
        );

      default:
        return (
          <Info
            className="text-cyan-400"
            size={22}
          />
        );

    }

  };

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

            <Bell className="text-cyan-400" />

          </div>

          <div>

            <h2 className="text-2xl font-bold">

              Notifications

            </h2>

            <p className="text-slate-500 mt-1">

              Real-time enterprise alerts

            </p>

          </div>

        </div>

        {/* LIST */}
        <div className="mt-10 space-y-5">

          {notifications.map((item, index) => (

            <div
              key={index}
              className="
                bg-slate-950/70
                border
                border-slate-800
                rounded-2xl
                p-5
                flex
                items-start
                gap-4
                hover:border-cyan-500/30
                transition-all
              "
            >

              {getIcon(item.type)}

              <div>

                <h3 className="font-bold">

                  {item.title}

                </h3>

                <p className="text-slate-400 mt-2">

                  {item.message}

                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </AnimatedContainer>

  );

}