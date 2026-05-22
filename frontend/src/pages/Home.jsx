import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  ArrowRight,
  Building2,
  Globe2,
  Map,
  RadioTower,
  Route,
} from "lucide-react";

import PageLayout from "../components/ui/PageLayout";
import GlassCard from "../components/ui/GlassCard";
import AnimatedContainer from "../components/ui/AnimatedContainer";
import SectionTitle from "../components/ui/SectionTitle";
import PrimaryButton from "../components/ui/PrimaryButton";

export default function Home() {

  const services = [
    {
      icon: <Map size={35} />,
      title: "GIS & Spatial Intelligence",
    },

    {
      icon: <Building2 size={35} />,
      title: "Urban Planning",
    },

    {
      icon: <Route size={35} />,
      title: "Transportation Systems",
    },

    {
      icon: <RadioTower size={35} />,
      title: "Smart City & IoT",
    },
  ];

  return (

    <PageLayout>

      {/* HERO */}
      <section className="px-10 py-32">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}
          <AnimatedContainer>

            <p className="uppercase tracking-[0.3em] text-cyan-400">

              Enterprise Smart City Platform

            </p>

            <h1 className="text-7xl font-extrabold leading-tight mt-8">

              Building
              <span className="text-cyan-400">
                {" "}Intelligent Cities{" "}
              </span>

              Through GIS,
              Analytics &
              Smart Infrastructure

            </h1>

            <p className="text-slate-400 text-xl leading-relaxed mt-10 max-w-2xl">

              SCD KONSULT delivers enterprise GIS,
              transportation intelligence,
              environmental systems,
              urban analytics,
              IoT infrastructure,
              and smart-city innovation.

            </p>

            <div className="flex flex-wrap gap-6 mt-12">

              <Link to="/services">

                <PrimaryButton>

                  Explore Services

                </PrimaryButton>

              </Link>

              <Link to="/portfolio">

                <button
                  className="
                    border
                    border-slate-700
                    px-8
                    py-4
                    rounded-2xl
                    font-bold
                    hover:border-cyan-400
                    transition
                    duration-300
                  "
                >

                  View Portfolio

                </button>

              </Link>

            </div>

          </AnimatedContainer>

          {/* RIGHT */}
          <AnimatedContainer>

            <GlassCard className="relative overflow-hidden">

              <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/20 blur-3xl rounded-full"></div>

              <div className="relative z-10">

                <div className="flex items-center gap-4">

                  <Globe2
                    size={50}
                    className="text-cyan-400"
                  />

                  <div>

                    <h2 className="text-3xl font-bold">

                      Smart City OS

                    </h2>

                    <p className="text-slate-400 mt-2">

                      Enterprise Urban Intelligence

                    </p>

                  </div>

                </div>

                <div className="grid grid-cols-2 gap-6 mt-12">

                  {services.map((service, index) => (

                    <motion.div
                      key={index}
                      whileHover={{
                        scale: 1.05,
                      }}
                      className="
                        bg-slate-950/80
                        border
                        border-slate-800
                        rounded-2xl
                        p-6
                      "
                    >

                      <div className="text-cyan-400">

                        {service.icon}

                      </div>

                      <h3 className="font-bold mt-5">

                        {service.title}

                      </h3>

                    </motion.div>

                  ))}

                </div>

              </div>

            </GlassCard>

          </AnimatedContainer>

        </div>

      </section>

      {/* FEATURE SECTION */}
      <section className="px-10 pb-28">

        <div className="max-w-7xl mx-auto">

          <AnimatedContainer>

            <SectionTitle
              eyebrow="Capabilities"
              title="Enterprise Smart City Solutions"
              description="
              Delivering next-generation geospatial,
              urban,
              environmental,
              and smart infrastructure systems.
              "
              center
            />

          </AnimatedContainer>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-20">

            {[

              {
                title: "Urban Intelligence",
                desc:
                  "Real-time urban analytics and decision-support systems.",
              },

              {
                title: "GIS Infrastructure",
                desc:
                  "Enterprise geospatial platforms and spatial databases.",
              },

              {
                title: "Smart Mobility",
                desc:
                  "Transportation analytics and route optimization systems.",
              },

              {
                title: "IoT Monitoring",
                desc:
                  "Connected sensors and smart infrastructure management.",
              },

              {
                title: "Environmental Systems",
                desc:
                  "Flood-risk analysis and environmental resilience planning.",
              },

              {
                title: "Enterprise Analytics",
                desc:
                  "Urban dashboards and infrastructure intelligence systems.",
              },

            ].map((item, index) => (

              <AnimatedContainer key={index}>

                <GlassCard className="h-full">

                  <h3 className="text-2xl font-bold">

                    {item.title}

                  </h3>

                  <p className="text-slate-400 mt-5 leading-relaxed">

                    {item.desc}

                  </p>

                </GlassCard>

              </AnimatedContainer>

            ))}

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="px-10 pb-32">

        <div className="max-w-7xl mx-auto">

          <AnimatedContainer>

            <GlassCard className="text-center">

              <h2 className="text-5xl font-extrabold">

                Ready to Build Smarter Cities?

              </h2>

              <p className="text-slate-400 text-xl mt-8 max-w-3xl mx-auto">

                Let’s create intelligent urban systems
                powered by GIS,
                analytics,
                enterprise infrastructure,
                and smart-city innovation.

              </p>

              <Link to="/contact">

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="mt-12 inline-block"
                >

                  <PrimaryButton>

                    Contact Us
                    <ArrowRight className="inline ml-3" />

                  </PrimaryButton>

                </motion.div>

              </Link>

            </GlassCard>

          </AnimatedContainer>

        </div>

      </section>

    </PageLayout>

  );

}