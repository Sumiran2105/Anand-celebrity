import React, { useState } from "react";
import { motion } from "framer-motion";
import ServiceModal from "../components/ServiceModal";

// ICONS FOR PROCESS SECTION
import {
  FiEye,
  FiShield,
  FiUsers,
  FiMap,
  FiCheckCircle,
  FiPhoneCall,
} from "react-icons/fi";

// --------------------------------------------------
// ANIMATION VARIANTS
// --------------------------------------------------
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

// --------------------------------------------------
// ICON BOX (for PROCESS steps)
// --------------------------------------------------
function IconBox({ children }) {
  return (
    <div
      className="
        w-16 h-16 rounded-2xl flex items-center justify-center 
        bg-gradient-to-br from-yellow-100 to-yellow-300
        text-yellow-700 shadow-yellow-400 border border-yellow-200
        shadow-lg
      "
    >
      {children}
    </div>
  );
}

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  // --------------------------------------------------
  // 8 PREMIUM SERVICES (WITH IMAGE PATHS)
  // --------------------------------------------------
  const services = [
    {
      img: "/src/assets/luxury.jpg",
      title: "Luxury Cars & Chauffeurs",
      desc: "Premium sedans, SUVs, and luxury vans.",
      fullDesc:
        "We provide premium luxury vehicles such as Mercedes, BMW, Audi, Range Rover, and Vellfire with trained VIP chauffeurs.",
        features: [
      "Mercedes, BMW, Audi & Range Rover fleet",
      "Protocol-trained chauffeurs",
      "Discreet pickup & drop handling",
      "Smooth, shock-free driving",
      "Backend movement monitoring"
    ]
    },
    {
      img: "/src/assets/security.jpg",
      title: "Elite Security Personnel",
      desc: "Gunmen, bouncers, and PSOs.",
      fullDesc:
        "Our close-protection officers include licensed gunmen, bouncers, and PSOs trained for high-profile client safety.",
        features: [
      "Licensed gunmen & bouncers",
      "Threat-level risk assessment",
      "VIP escorting & crowd control",
      "Media-zone protection",
      "24/7 protective intelligence support"
    ]
    },
    {
      img: "/src/assets/hotel.jpg",
      title: "Private Hotel Arrangements",
      desc: "VIP rooms with total discretion.",
      fullDesc:
        "We arrange private entry, secure floors, pre-screened staff, and confidential check-ins for celebrities.",
        features: [
      "Silent check-ins without lobby exposure",
      "Dedicated secure floors",
      "Pre-screened housekeeping staff",
      "VIP concierge service"
    ]
        
    },
    {
      img: "/src/assets/backend.jpg",
      title: "Backend Coordination",
      desc: "Movement + event logistics.",
      fullDesc:
        "Includes chauffeur coordination, emergency re-routing, backstage handling, and live route monitoring.",
        features: [
      "Coordination between chauffeurs & PSOs",
      "Backstage media handling",
      "Live route monitoring",
      "Emergency route switching"
    ]
    },
    {
      img: "/src/assets/map.jpg",
      title: "Pan-India VIP Movement",
      desc: "Nationwide travel management.",
      fullDesc:
        "Seamless interstate VIP movement with high-level routing, scheduling, and crowd-avoidance planning.",
        features: [
      "Airport–hotel–venue movement",
      "Protocol-based interstate transfers",
      "Route blueprint with backups",
      "Traffic and crowd avoidance planning"
    ]
    },
    {
      img: "/src/assets/redcarpet.jpeg",
      title: "Red-Carpet Assistance",
      desc: "Media & backstage control.",
      fullDesc:
        "We handle media spacing, camera pathways, backstage escorting, and fan/crowd pressure control.",
        features: [
      "Press & media lane setup",
      "Fan/crowd pressure handling",
      "Backstage escorting",
      "Stage entry coordination"
    ]
        
    },
    {
      img: "/src/assets/support.jpg",
      title: "24/7 Dedicated Support",
      desc: "Instant priority help.",
      fullDesc:
        "Immediate assistance for urgent requests — including night-shift handlers, emergency planning, and last-minute routing.",
       features: [
      "Night-shift VIP handlers",
      "Instant emergency response",
      "Priority hotline",
      "Last-minute route planning"
    ]
    },
    {
      img: "/src/assets/international.jpg",
      title: "International Coordination",
      desc: "Worldwide movement.",
      fullDesc:
        "Worldwide VIP support: immigration coordination, hotel booking, international chauffeurs & itinerary planning.",
        features: [
      "Airport immigration support",
      "VIP travel bookings",
      "International chauffeurs",
      "Global itinerary handling"
    ]
    },
  ];

  // --------------------------------------------------
  // PREMIUM PROCESS STEPS
  // --------------------------------------------------
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
      desc: "Smooth, secure VIP movement.",
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

        {/* --------------------------------------------------
             SERVICE CARDS (8 CARDS)
        -------------------------------------------------- */}
        {/* SERVICES GRID */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
  {services.map((service, index) => (
    <div
      key={index}
      onClick={() => setSelectedService(service)}
      className="
        rounded-3xl overflow-hidden bg-white shadow-lg 
        hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer
      "
    >
      {/* IMAGE FILLING THE TOP */}
      <div className="h-52 w-full overflow-hidden">
        <img
          src={service.img}
          alt={service.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* CONTENT BLOCK */}
      <div className="p-6 text-center">
        <h3 className="text-xl font-bold text-blue-600 tracking-wide">
          {service.title}
        </h3>

        <p className="text-gray-600 mt-3 text-sm leading-relaxed">
          {service.desc}
        </p>
      </div>
    </div>
  ))}
</div>


        {/* --------------------------------------------------
              PROCESS STEPS
        -------------------------------------------------- */}
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
                  <IconBox>{step.icon}</IconBox>
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
