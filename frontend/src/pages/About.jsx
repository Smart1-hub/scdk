import {
  Building2,
  Globe2,
  RadioTower,
  Route,
} from "lucide-react";

import PageLayout from "../components/ui/PageLayout";
import GlassCard from "../components/ui/GlassCard";
import AnimatedContainer from "../components/ui/AnimatedContainer";
import SectionTitle from "../components/ui/SectionTitle";

export default function About() {

  const values = [

    {
      icon: <Globe2 size={40} />,
      title: "Enterprise GIS Intelligence",
      description:
        "Advanced geospatial systems, enterprise mapping, spatial analytics, and urban intelligence solutions.",
    },

    {
      icon: <Building2 size={40} />,
      title: "Urban Planning Innovation",
      description:
        "Sustainable urban development, smart growth strategies, transportation systems, and infrastructure planning.",
    },

    {
      icon: <RadioTower size={40} />,
      title: "Smart City Infrastructure",
      description:
        "IoT integration, real-time monitoring, digital twins, urban dashboards, and enterprise smart-city operations.",
    },

    {
      icon: <Route size={40} />,
      title: "Mobility & Transportation",
      description:
        "Transportation analytics, mobility intelligence, route optimization, and traffic systems planning.",
    },

  ];

  return (

    <PageLayout>

      {/* HERO */}
      <section className="px-10 py-28">

        <div className="max-w-7xl mx-auto">

          <AnimatedContainer delay={0.1}>

            <SectionTitle
              eyebrow="About SCD KONSULT"
              title="Transforming Cities Through Intelligence & Innovation"
              description="
              SCD KONSULT delivers enterprise smart-city systems,
              GIS intelligence,
              urban analytics,
              transportation planning,
              environmental management,
              and digital infrastructure solutions.
              "
            />

          </AnimatedContainer>

        </div>

      </section>

      {/* STORY */}
      <section className="px-10 pb-24">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <AnimatedContainer delay={0.2}>

            <GlassCard className="h-full">

              <h2 className="text-4xl font-extrabold leading-tight">

                Building the Future of Smart Urban Systems

              </h2>

              <p className="text-slate-400 leading-relaxed text-lg mt-8">

                We combine GIS,
                spatial intelligence,
                transportation systems,
                urban planning,
                enterprise analytics,
                and smart infrastructure technologies
                to support sustainable urban development.

              </p>

              <p className="text-slate-400 leading-relaxed text-lg mt-6">

                Our solutions empower governments,
                organizations,
                and enterprises with real-time decision-making,
                geospatial intelligence,
                infrastructure monitoring,
                and smart-city innovation systems.

              </p>

            </GlassCard>

          </AnimatedContainer>

          {/* RIGHT */}
          <AnimatedContainer delay={0.4}>

            <GlassCard className="relative overflow-hidden h-full">

              {/* GLOW */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/20 blur-3xl rounded-full"></div>

              <div className="relative z-10">

                <h2 className="text-3xl font-bold">

                  Core Capabilities

                </h2>

                <div className="space-y-8 mt-10">

                  <div>

                    <h3 className="text-cyan-400 font-bold text-xl">

                      GIS & Spatial Analytics

                    </h3>

                    <p className="text-slate-400 mt-3">

                      Enterprise geospatial systems,
                      mapping,
                      and spatial intelligence platforms.

                    </p>

                  </div>

                  <div>

                    <h3 className="text-cyan-400 font-bold text-xl">

                      Smart Infrastructure

                    </h3>

                    <p className="text-slate-400 mt-3">

                      IoT-enabled urban systems,
                      monitoring networks,
                      and digital infrastructure.

                    </p>

                  </div>

                  <div>

                    <h3 className="text-cyan-400 font-bold text-xl">

                      Urban Intelligence

                    </h3>

                    <p className="text-slate-400 mt-3">

                      Data-driven planning,
                      mobility systems,
                      and enterprise analytics solutions.

                    </p>

                  </div>

                </div>

              </div>

            </GlassCard>

          </AnimatedContainer>

        </div>

      </section>

      {/* VALUES */}
      <section className="px-10 pb-32">

        <div className="max-w-7xl mx-auto">

          <AnimatedContainer delay={0.2}>

            <SectionTitle
              eyebrow="What We Deliver"
              title="Enterprise Smart City Capabilities"
              description="
              Delivering scalable solutions
              for urban intelligence,
              GIS systems,
              smart infrastructure,
              and sustainable development.
              "
              center
            />

          </AnimatedContainer>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-20">

            {values.map((item, index) => (

              <AnimatedContainer
                key={index}
                delay={0.2 + index * 0.2}
              >

                <GlassCard className="h-full">

                  <div className="text-cyan-400">

                    {item.icon}

                  </div>

                  <h3 className="text-2xl font-bold mt-6">

                    {item.title}

                  </h3>

                  <p className="text-slate-400 mt-5 leading-relaxed">

                    {item.description}

                  </p>

                </GlassCard>

              </AnimatedContainer>

            ))}

          </div>

        </div>

      </section>

    </PageLayout>

  );

}