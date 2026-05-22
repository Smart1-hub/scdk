export default function GlassCard({
  children,
  className = "",
}) {

  return (

    <div
      className={`
        bg-slate-900/80
        backdrop-blur-lg
        border
        border-slate-800
        rounded-3xl
        p-8
        transition-all
        duration-500
        hover:border-cyan-400
        hover:-translate-y-2
        hover:shadow-2xl
        hover:shadow-cyan-500/10
        ${className}
      `}
    >

      {children}

    </div>

  );

}