import React from "react";
import { FiCheckCircle, FiShield, FiHome, FiTruck, FiUsers } from "react-icons/fi";

export default function Timeline() {
  const steps = [
    {
      icon: <FiUsers />,
      title: "Booking Request",
      desc: "Client submits VIP movement requirements.",
    },
    {
      icon: <FiTruck />,
      title: "Luxury Car Allocation",
      desc: "Mercedes, BMW, Vellfire assigned with protocol chauffeurs.",
    },
    {
      icon: <FiShield />,
      title: "Security Deployment",
      desc: "PSOs, gunmen, bouncers deployed with confidential briefing.",
    },
    {
      icon: <FiHome />,
      title: "Hotel & Itinerary Setup",
      desc: "VIP suites, private check-in, and route planning handled.",
    },
    {
      icon: <FiCheckCircle />,
      title: "Execution & Monitoring",
      desc: "Full movement managed with live backend support.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r 
          from-blue-700 via-indigo-500 to-orange-500 bg-clip-text text-transparent 
          drop-shadow-lg text-center w-full">
        
          VIP Service Timeline
        </h2>

        <p className="text-center text-gray-600 mt-3 max-w-2xl mx-auto">
          A futuristic glassmorphic workflow designed for high-profile clients.
        </p>

        {/* TIMELINE */}
        <div className="relative mt-24">

          {/* SHINY LINE */}
          <div className="absolute top-16 left-0 w-full h-[2px]
            bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 
            opacity-50 blur-[1px] shadow-sm">
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-12 relative z-10">

            {steps.map((step, i) => (
              <div
                key={i}
                className="
                  flex flex-col items-center text-center 
                  backdrop-blur-xl bg-white/30 rounded-3xl px-6 py-10 
                  shadow-[0_8px_30px_rgba(0,0,0,0.1)]
                  border border-white/60
                  hover:border-cyan-400
                  hover:shadow-[0_0_40px_rgba(0,200,255,0.3)]
                  transition-all duration-300
                "
              >
                {/* ICON */}
                <div
                  className="
                    w-20 h-20 flex items-center justify-center rounded-2xl 
                    bg-gradient-to-br from-blue-100 to-cyan-100
                    shadow-[0_0_25px_rgba(0,150,255,0.3)]
                    text-blue-700 text-4xl
                    border border-blue-200 
                    hover:scale-110 hover:shadow-[0_0_35px_rgba(0,200,255,0.5)]
                    transition-all duration-300
                  "
                >
                  {step.icon}
                </div>

                {/* Title */}
                <h4 className="mt-5 font-bold text-xl text-blue-800 drop-shadow-sm">
                  {step.title}
                </h4>

                {/* Description */}
                <p className="text-gray-600 text-sm mt-3 max-w-xs">
                  {step.desc}
                </p>

                {/* Shine Overlay */}
                <div className="absolute inset-0 rounded-3xl pointer-events-none">
                  <div className="
                    absolute inset-0 bg-gradient-to-br 
                    from-transparent via-white/40 to-transparent 
                    opacity-40 animate-pulse
                  "></div>
                </div>

              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}
