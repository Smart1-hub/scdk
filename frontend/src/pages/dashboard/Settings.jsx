import {
  Bell,
  Database,
  Shield,
  User,
} from "lucide-react";

import DashboardLayout from "../../components/dashboard/DashboardLayout";

import AnimatedContainer from "../../components/ui/AnimatedContainer";

export default function Settings() {

  const settings = [

    {
      icon: <User />,
      title: "User Preferences",
    },

    {
      icon: <Bell />,
      title: "Notifications",
    },

    {
      icon: <Database />,
      title: "Database Configuration",
    },

    {
      icon: <Shield />,
      title: "Security & Permissions",
    },

  ];

  return (

    <DashboardLayout>

      <AnimatedContainer>

        <div className="mb-14">

          <p className="uppercase tracking-[0.3em] text-cyan-400">

            Enterprise System Configuration

          </p>

          <h1 className="text-6xl font-extrabold mt-6">

            Platform Settings

          </h1>

        </div>

      </AnimatedContainer>

      <div className="grid md:grid-cols-2 gap-8">

        {settings.map((item, index) => (

          <div
            key={index}
            className="
              bg-slate-900/70
              border
              border-slate-800
              rounded-3xl
              p-8
              hover:border-cyan-500/30
              transition-all
            "
          >

            <div className="text-cyan-400">

              {item.icon}

            </div>

            <h2 className="text-2xl font-bold mt-6">

              {item.title}

            </h2>

          </div>

        ))}

      </div>

    </DashboardLayout>

  );

}