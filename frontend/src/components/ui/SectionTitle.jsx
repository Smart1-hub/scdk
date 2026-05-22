export default function SectionTitle({
  eyebrow,
  title,
  description,
  center = false,
}) {

  return (

    <div className={center ? "text-center" : ""}>

      <p className="text-cyan-400 uppercase tracking-widest">

        {eyebrow}

      </p>

      <h2 className="text-5xl font-extrabold mt-4">

        {title}

      </h2>

      {description && (

        <p className="text-slate-400 text-xl mt-6 max-w-3xl leading-relaxed">

          {description}

        </p>

      )}

    </div>

  );

}