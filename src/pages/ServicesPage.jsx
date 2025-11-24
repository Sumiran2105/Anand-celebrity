import React, { useState } from "react";
import { motion } from "framer-motion";

import {
  FiShield,
  FiTruck,
  FiHome,
  FiUsers,
  FiMap,
  FiStar,
  FiPhoneCall,
  FiGlobe,
  FiEye,
  FiCheckCircle,
} from "react-icons/fi";

import ServiceModal from "../components/ServiceModal";

// -----------------------------------------------
// ANIMATION VARIANTS (STAGGERED ICON ENTRY)
// -----------------------------------------------
const iconVariant = {
  hidden: { opacity: 0, scale: 0.4, y: 30 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

// -----------------------------------------------
// ICON BOX COMPONENT (Pulse + Shine)
// -----------------------------------------------
function IconBox({ children, colorClass }) {
  return (
    <div
      className={`
        w-16 h-16 rounded-2xl flex items-center justify-center
        bg-gradient-to-br ${colorClass}
        shadow-lg border border-white/50
        transition-all duration-300
        hover:scale-110 hover:shadow-2xl
        icon-pulse icon-shine
      `}
    >
      {children}
    </div>
  );
}

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  // -----------------------------------------------
  // PREMIUM COLOR PALETTES FOR ICONS
  // -----------------------------------------------
  const iconStyles = [
    "from-blue-100 to-blue-300 text-blue-700 shadow-blue-300",
    "from-purple-100 to-purple-300 text-purple-700 shadow-purple-300",
    "from-amber-100 to-amber-300 text-amber-700 shadow-amber-300",
    "from-emerald-100 to-emerald-300 text-emerald-700 shadow-emerald-300",
    "from-red-100 to-red-300 text-red-700 shadow-red-300",
    "from-indigo-100 to-indigo-300 text-indigo-700 shadow-indigo-300",
    "from-rose-100 to-rose-300 text-rose-700 shadow-rose-300",
    "from-cyan-100 to-cyan-300 text-cyan-700 shadow-cyan-300",
  ];

  // -----------------------------------------------
  // SERVICE CARDS (FULL UPDATED WITH FEATURES)
  // -----------------------------------------------
  const services = [
    {
      icon: <FiTruck size={30} />,
      title: "Luxury Cars & Chauffeurs",
      desc: "Premium sedans, SUVs, and luxury vans.",
      fullDesc:
        "We provide premium luxury vehicles such as Mercedes, BMW, Audi, Range Rover, and Vellfire with trained VIP chauffeurs who maintain full discretion and protocol discipline.",
      features: [
        "Mercedes, BMW, Audi & Range Rover fleet",
        "Protocol-trained chauffeurs",
        "Discreet pickup & drop handling",
        "Shock-free smooth driving style",
        "Real-time backend movement monitoring",
      ],
    },
    {
      icon: <FiShield size={30} />,
      title: "Elite Security Personnel",
      desc: "Gunmen, bouncers, and PSOs.",
      fullDesc:
        "Our close-protection officers include licensed gunmen, bouncers, PSOs, and high-level security experts trained for VIP escorting and crisis handling.",
      features: [
        "Licensed gunmen & elite bouncers",
        "Threat-level risk assessment",
        "VIP escorting & crowd control",
        "Media-zone protection",
        "24/7 protective intelligence support",
      ],
    },
    {
      icon: <FiHome size={30} />,
      title: "Private Hotel Arrangements",
      desc: "VIP rooms with total discretion.",
      fullDesc:
        "We arrange private entry, secure floors, pre-screened staff, and high confidentiality check-in for celebrity clients.",
      features: [
        "Silent check-ins without registration counters",
        "Dedicated floor access for increased privacy",
        "Pre-screened housekeeping team",
        "VIP concierge & secure passage",
      ],
    },
    {
      icon: <FiUsers size={30} />,
      title: "Backend Coordination",
      desc: "Movement + event logistics.",
      fullDesc:
        "Our backstage coordination includes vehicle timing, route clearance, stage/entry planning, and emergency handling.",
      features: [
        "Chauffeur & security sync-up",
        "Event backstage control",
        "Live route monitoring",
        "Emergency re-routing",
      ],
    },
    {
      icon: <FiMap size={30} />,
      title: "Pan-India VIP Movement",
      desc: "Nationwide travel management.",
      fullDesc:
        "Seamless statewide and interstate movement with optimized, risk-free routing and scheduling.",
      features: [
        "Airport-Floor to venue-Floor movements",
        "Statewide protocol-based transfers",
        "Secure route blueprinting",
        "Priority traffic management",
      ],
    },
    {
      icon: <FiStar size={30} />,
      title: "Red-Carpet Assistance",
      desc: "Media & backstage control.",
      fullDesc:
        "We ensure a smooth red-carpet appearance with media spacing, crowd control, and camera pathway management.",
      features: [
        "Camera & media lane formation",
        "Zero-crowd contact strategy",
        "On-stage & backstage escorting",
        "Fan/crowd pressure management",
      ],
    },
    {
      icon: <FiPhoneCall size={30} />,
      title: "24/7 Dedicated Support",
      desc: "Instant priority help.",
      fullDesc:
        "A priority hotline for celebrity managers ensuring immediate support for all urgent situations.",
      features: [
        "Instant issue resolution",
        "Night-shift VIP handlers",
        "Emergency movement planning",
        "Last-minute booking support",
      ],
    },
    {
      icon: <FiGlobe size={30} />,
      title: "International Coordination",
      desc: "Worldwide movement.",
      fullDesc:
        "Global VIP support including airport arrivals, immigration handling, hotel booking, and international chauffeur/security.",
      features: [
        "Immigration arrival assistance",
        "VIP hotel & travel bookings",
        "International chauffeur support",
        "Worldwide movement coordination",
      ],
    },
  ];

  // -----------------------------------------------
  // PROCESS STEPS
  // -----------------------------------------------
  const process = [
    {
      icon: <FiEye size={28} />,
      title: "Confidential Profile Assessment",
      desc: "We understand your requirement & privacy sensitivity.",
    },
    {
      icon: <FiShield size={28} />,
      title: "Risk & Requirement Analysis",
      desc: "Hotspots & alternate routes are planned.",
    },
    {
      icon: <FiUsers size={28} />,
      title: "Specialized Team Allocation",
      desc: "Chauffeurs, PSOs, bouncers, handlers selected.",
    },
    {
      icon: <FiMap size={28} />,
      title: "Multi-Route Blueprinting",
      desc: "Primary, backup & emergency routes planned.",
    },
    {
      icon: <FiCheckCircle size={28} />,
      title: "On-Ground Execution",
      desc: "Smooth, secure, and coordinated VIP movement.",
    },
    {
      icon: <FiPhoneCall size={28} />,
      title: "End-of-Day Review",
      desc: "Daily summary + next-day plan update.",
    },
  ];

  return (
    <section className="bg-white py-20 md:py-24">
      <div className="container mx-auto px-4">

        {/* TITLE */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900">
            Our Premium Services
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto text-lg">
            Trusted VIP support crafted for celebrities & high-profile clients.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => setSelectedService(service)}
              className="p-7 rounded-2xl bg-white border border-gray-200 shadow-md
              hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
            >
              <motion.div
                custom={index}
                variants={iconVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <IconBox colorClass={iconStyles[index]}>
                  {service.icon}
                </IconBox>
              </motion.div>

              <h3 className="text-xl font-bold text-blue-900 mt-5">
                {service.title}
              </h3>
              <p className="text-gray-600 mt-3 text-sm">{service.desc}</p>
            </div>
          ))}
        </div>

        {/* PROCESS SECTION */}
        <div className="mt-24">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-blue-900">
            Our Premium Process
          </h2>

          <p className="text-center text-gray-600 max-w-2xl mx-auto mt-3 text-lg">
            Ultra-secure, confidential & precision-driven workflow for VIP movement.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
            {process.map((step, index) => (
              <div
                key={index}
                className="p-8 bg-white border rounded-2xl shadow-md 
                hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <motion.div
                  custom={index}
                  variants={iconVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <IconBox
                    colorClass="
                      from-yellow-100 to-yellow-300
                      text-yellow-700 shadow-yellow-400
                      border-yellow-200
                    "
                  >
                    {step.icon}
                  </IconBox>
                </motion.div>

                <h3 className="text-xl font-bold text-blue-900 mt-4">
                  {step.title}
                </h3>

                <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                  {step.desc}
                </p>

                <div className="mt-6">
                  <span className="text-sm font-semibold text-orange-600">
                    Step {index + 1}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* MODAL */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />
    </section>
  );
}
