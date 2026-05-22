import { useState } from "react";

export default function IoTManagement() {

  const [devices, setDevices] = useState([
    { name: "Traffic Sensor A", status: "Active" },
    { name: "Flood Sensor B", status: "Inactive" },
  ]);

  return (
    <div className="p-10 text-white">

      <h1 className="text-4xl font-bold mb-8">IoT Management</h1>

      <div className="grid gap-6">

        {devices.map((d, i) => (
          <div
            key={i}
            className="p-6 bg-slate-900 rounded-xl border border-slate-800"
          >

            <h2 className="text-xl font-bold">{d.name}</h2>

            <p className={d.status === "Active" ? "text-green-400" : "text-red-400"}>
              {d.status}
            </p>

          </div>
        ))}

      </div>

    </div>
  );
}