import React from "react";
import {
  FiCheckCircle,
  FiShield,
  FiHome,
  FiTruck,
  FiUsers,
} from "react-icons/fi";

export default function Timeline() {
  const steps = [
    {
      icon: <FiUsers />,
      number: "01",
      title: "Booking Request",
      desc: "Client submits VIP movement requirements.",
    },
    {
      icon: <FiTruck />,
      number: "02",
      title: "Luxury Car Allocation",
      desc: "Mercedes, BMW, Vellfire assigned with protocol chauffeurs.",
    },
    {
      icon: <FiShield />,
      number: "03",
      title: "Security Deployment",
      desc: "PSOs, gunmen, bouncers deployed with confidential briefing.",
    },
    {
      icon: <FiHome />,
      number: "04",
      title: "Hotel & Itinerary Setup",
      desc: "VIP suites, private check-in, and route planning handled.",
    },
    {
      icon: <FiCheckCircle />,
      number: "05",
      title: "Execution & Monitoring",
      desc: "Full movement managed with live backend support.",
    },
  ];

  return (
    <section className="py-19 bg-white">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <h3 className="text-3xl md:text-4xl font-extrabold text-center text-blue-800 drop-shadow-lg">
          VIP Service Timeline
        </h3>

        <p className="text-center text-gray-600 mt-3 max-w-2xl mx-auto text-lg">
          A premium, step-by-step execution model designed for elite clients.
        </p>

        {/* Timeline Wrapper */}
        <div className="relative mt-20">

          {/* Curved Connecting Line */}
          <svg
            className="absolute top-24 left-0 w-full h-40 hidden lg:block"
            viewBox="0 0 1000 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M50 150 C 300 20, 700 20, 950 150"
              stroke="#d4af37"
              strokeWidth="3"
              strokeLinecap="round"
              className="opacity-60"
            />
          </svg>

          {/* Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-12 relative z-10">

            {steps.map((step, i) => (
              <div
                key={i}
                className="
                  flex flex-col items-center text-center
                  bg-white rounded-3xl px-7 py-12
                  border border-gray-200
                  shadow-[0_6px_22px_rgba(0,0,0,0.09)]
                  hover:shadow-[0_12px_28px_rgba(0,0,0,0.15)]
                  hover:-translate-y-2
                  transition-all duration-300
                "
              >
                {/* Number Badge */}
                <div
                  className="
                    mb-6 px-4 py-1 text-sm font-bold tracking-wider 
                    bg-black text-white rounded-full shadow-md
                  "
                >
                  {step.number}
                </div>

                {/* Icon Box (Gold Gradient) */}
                <div
                  className="
                    w-20 h-20 flex items-center justify-center rounded-2xl
                    bg-gradient-to-br from-[#f9e3a1] to-[#d4af37]
                    shadow-[0_5px_18px_rgba(212,175,55,0.45)]
                    border border-yellow-300
                    text-[#2c2c2c] text-4xl
                    hover:scale-110 hover:shadow-[0_8px_25px_rgba(212,175,55,0.55)]
                    transition-all duration-300
                  "
                >
                  {step.icon}
                </div>

                {/* Title */}
                <h4 className="mt-5 font-bold text-xl text-[#1e2a55]">
                  {step.title}
                </h4>

                {/* Description */}
                <p className="text-gray-600 text-sm mt-3 max-w-xs">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
