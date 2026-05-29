import { motion } from "framer-motion";

export default function DashboardCard({
  title,
  value,
  icon,
  subtitle,
}) {

  return (

    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}

      transition={{
        duration: 0.3,
      }}

      className="
        relative
        overflow-hidden
        bg-slate-900/70
        border
        border-slate-800
        backdrop-blur-xl
        rounded-3xl
        p-8
        hover:border-cyan-500/40
        transition-all
        duration-500
      "
    >

      {/* GLOW */}
      <div
        className="
          absolute
          top-0
          right-0
          w-40
          h-40
          bg-cyan-500/10
          blur-3xl
          rounded-full
        "
      ></div>

      {/* CONTENT */}
      <div className="relative z-10">

        <div className="flex items-center justify-between">

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

            {icon}

          </div>

        </div>

        <h3 className="text-slate-400 mt-8">

          {title}

        </h3>

        <h1 className="text-5xl font-extrabold mt-3">

          {value}

        </h1>

        <p className="text-slate-500 mt-4">

          {subtitle}

        </p>

      </div>

    </motion.div>

  );

}