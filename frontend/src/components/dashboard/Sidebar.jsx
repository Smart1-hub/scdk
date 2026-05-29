import {
  Activity,
  BarChart3,
  Building2,
  LayoutDashboard,
  Map,
  RadioTower,
  Route,
  Settings,
  Users,
} from "lucide-react";

import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {

  const location = useLocation();

  const menus = [

    {
      name: "Dashboard",
      icon: <LayoutDashboard size={20} />,
      path: "/dashboard",
    },

    {
      name: "GIS Intelligence",
      icon: <Map size={20} />,
      path: "/dashboard/gis",
    },

    {
      name: "IoT Monitoring",
      icon: <RadioTower size={20} />,
      path: "/dashboard/iot",
    },

    {
      name: "Urban Analytics",
      icon: <BarChart3 size={20} />,
      path: "/dashboard/analytics",
    },

    {
      name: "Transportation",
      icon: <Route size={20} />,
      path: "/dashboard/transport",
    },

    {
      name: "Projects",
      icon: <Building2 size={20} />,
      path: "/admin/projects",
    },

    {
      name: "Users",
      icon: <Users size={20} />,
      path: "/admin/users",
    },

    {
      name: "Activity",
      icon: <Activity size={20} />,
      path: "/dashboard/activity",
    },

    {
      name: "Settings",
      icon: <Settings size={20} />,
      path: "/admin/settings",
    },

  ];

  return (

    <aside
      className="
        fixed
        left-0
        top-0
        h-screen
        w-72
        bg-slate-950/95
        backdrop-blur-xl
        border-r
        border-slate-800
        z-50
        px-6
        py-10
      "
    >

      {/* LOGO */}
      <div>

        <h1 className="text-3xl font-extrabold">

          <span className="text-cyan-400">
            SCD
          </span>{" "}

          Enterprise

        </h1>

        <p className="text-slate-500 mt-2">

          Smart City Operating System

        </p>

      </div>

      {/* MENU */}
      <nav className="mt-14 space-y-3">

        {menus.map((menu, index) => {

          const active =
            location.pathname === menu.path;

          return (

            <Link
              key={index}
              to={menu.path}
            >

              <div
                className={`
                  flex
                  items-center
                  gap-4
                  px-5
                  py-4
                  rounded-2xl
                  transition-all
                  duration-300

                  ${
                    active
                      ? `
                        bg-cyan-500/20
                        border
                        border-cyan-500/40
                        text-cyan-400
                      `
                      : `
                        hover:bg-slate-900
                        text-slate-300
                      `
                  }
                `}
              >

                {menu.icon}

                <span className="font-medium">

                  {menu.name}

                </span>

              </div>

            </Link>

          );

        })}

      </nav>

    </aside>

  );

}