export default function Analytics() {

  return (
    <div className="p-10 text-white">

      <h1 className="text-4xl font-bold mb-8">
        Urban Analytics
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="p-6 bg-slate-900 rounded-xl">
          <h2 className="text-2xl font-bold">Transport Index</h2>
        </div>

        <div className="p-6 bg-slate-900 rounded-xl">
          <h2 className="text-2xl font-bold">Flood Risk Score</h2>
        </div>

        <div className="p-6 bg-slate-900 rounded-xl">
          <h2 className="text-2xl font-bold">Urban Growth Rate</h2>
        </div>

      </div>

    </div>
  );
}