export default function PrimaryButton({
  children,
  className = "",
}) {

  return (

    <button
      className={`
        bg-cyan-500
        hover:bg-cyan-600
        text-slate-950
        px-8
        py-4
        rounded-2xl
        font-bold
        transition
        duration-300
        shadow-lg
        hover:shadow-cyan-500/40
        ${className}
      `}
    >

      {children}

    </button>

  );

}