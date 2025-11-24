import React from "react";
import { FiShield, FiTruck, FiHome, FiUsers } from "react-icons/fi";

// SERVICES DATA WITH LUXURY GRADIENT COLORS
const services = [
  {
    icon: <FiTruck />,
    title: "Luxury Cars & Chauffeurs",
    desc: "Mercedes, BMW, Lexus with vetted and protocol-trained chauffeurs.",
    colorLight: "#dbeafe", // Light Blue
    colorDark: "#93c5fd",
  },
  {
    icon: <FiShield />,
    title: "Professional Security",
    desc: "Elite PSOs, gunmen, bouncers, and high-alert protection officers.",
    colorLight: "#ffe4e6", // Light Pink
    colorDark: "#fda4af",
  },
  {
    icon: <FiHome />,
    title: "Private Hotel Stays",
    desc: "5-star suites, VIP check-in, and fully discreet arrangements.",
    colorLight: "#dcfce7", // Light Green
    colorDark: "#86efac",
  },
  {
    icon: <FiUsers />,
    title: "Backend Coordination",
    desc: "Dedicated handlers for logistics, routing, and on-ground execution.",
    colorLight: "#ede9fe", // Light Purple
    colorDark: "#c4b5fd",
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">

        {/* Title */}
        <h3 className="text-3xl md:text-4xl font-extrabold text-center text-blue-800 drop-shadow-lg">
          Our Premium Services
        </h3>

        <p className="text-center text-gray-600 mt-3 max-w-2xl mx-auto text-lg">
          Exclusive end-to-end service crafted for celebrities and elite clients.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-14">
          {services.map((s, idx) => (
            <div
              key={idx}
              className="
                group p-8 rounded-3xl bg-white
                border border-gray-200 shadow-md
                transition-all duration-300
                hover:-translate-y-2 hover:shadow-2xl
              "
            >
              {/* Luxury Gradient Icon */}
              <div
                className="
                  w-20 h-20 rounded-2xl flex items-center justify-center
                  shadow-[0_4px_12px_rgba(0,0,0,0.08)]
                  mb-6 transition-transform duration-300 
                  group-hover:scale-110
                "
                style={{
                  background: `linear-gradient(135deg, ${s.colorLight}, ${s.colorDark})`,
                }}
              >
                <div className="text-4xl text-blue-900 opacity-80">
                  {s.icon}
                </div>
              </div>

              {/* Title */}
              <h4 className="mt-4 font-bold text-xl text-blue-900">
                {s.title}
              </h4>

              {/* Description */}
              <p className="mt-3 text-gray-600 leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
