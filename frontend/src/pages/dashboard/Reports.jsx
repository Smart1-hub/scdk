import {
  Download,
  FileText,
  Printer,
  Share2,
} from "lucide-react";

import DashboardLayout from "../../components/dashboard/DashboardLayout";

import AnimatedContainer from "../../components/ui/AnimatedContainer";

export default function Reports() {

  const reports = [

    "Urban Infrastructure Report",
    "Transportation Analytics Report",
    "Environmental Risk Assessment",
    "GIS Spatial Intelligence Report",
    "Smart City Operations Summary",

  ];

  return (

    <DashboardLayout>

      <AnimatedContainer>

        <div className="mb-14">

          <p className="uppercase tracking-[0.3em] text-cyan-400">

            Enterprise Reporting System

          </p>

          <h1 className="text-6xl font-extrabold mt-6">

            Reports & Documentation

          </h1>

        </div>

      </AnimatedContainer>

      <div className="grid xl:grid-cols-2 gap-8">

        {reports.map((report, index) => (

          <div
            key={index}
            className="
              bg-slate-900/70
              border
              border-slate-800
              rounded-3xl
              p-8
            "
          >

            <div className="flex items-center gap-4">

              <FileText className="text-cyan-400" />

              <h2 className="text-2xl font-bold">

                {report}

              </h2>

            </div>

            <div className="flex gap-4 mt-10">

              <button
                className="
                  flex
                  items-center
                  gap-3
                  px-5
                  py-3
                  rounded-2xl
                  bg-cyan-500/10
                  border
                  border-cyan-500/20
                "
              >

                <Download size={18} />

                Export

              </button>

              <button
                className="
                  flex
                  items-center
                  gap-3
                  px-5
                  py-3
                  rounded-2xl
                  bg-slate-950
                  border
                  border-slate-800
                "
              >

                <Printer size={18} />

                Print

              </button>

              <button
                className="
                  flex
                  items-center
                  gap-3
                  px-5
                  py-3
                  rounded-2xl
                  bg-slate-950
                  border
                  border-slate-800
                "
              >

                <Share2 size={18} />

                Share

              </button>

            </div>

          </div>

        ))}

      </div>

    </DashboardLayout>

  );

}