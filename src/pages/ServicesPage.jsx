import React, { useState } from "react";
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

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  // ================================
  // SERVICES LIST
  // ================================
  const services = [
    {
      icon: <FiTruck size={30} />,
      title: "Luxury Cars & Chauffeurs",
      desc: "Premium sedans, SUVs, and luxury vans.",
      fullDesc:
        "We offer premium luxury cars including Mercedes, BMW, Audi, Range Rover, and Vellfire with experienced chauffeurs trained in VIP movement, privacy handling, secure routing, and high-standard hospitality etiquette.",
    },
    {
      icon: <FiShield size={30} />,
      title: "Elite Security Personnel",
      desc: "Gunmen, bouncers, and protection officers.",
      fullDesc:
        "Our elite security division consists of licensed gunmen, bouncers, and seasoned close-protection officers trained in crowd management, event security, route sanitization, and high-profile client protection protocols.",
    },
    {
      icon: <FiHome size={30} />,
      title: "Private Hotel Arrangements",
      desc: "VIP rooms with total discretion.",
      fullDesc:
        "We arrange premium hotel stays with discreet check-ins, secure floors, pre-screened staff, dedicated concierge, and carefully selected rooms for maximum privacy and comfort during celebrity movement.",
    },
    {
      icon: <FiUsers size={30} />,
      title: "Backend Coordination",
      desc: "Travel + event movement management.",
      fullDesc:
        "Our coordination team manages all movement logistics including vehicle timing, hotel liaison, security placement, crowd planning, alternate routing, and emergency repositioning.",
    },
    {
      icon: <FiMap size={30} />,
      title: "Pan-India VIP Movement",
      desc: "Statewide secure travel plans.",
      fullDesc:
        "Whether it's back-to-back shows, media appearances, airport transfers, or intercity movement, our pan-India network ensures seamless, secure VIP travel anywhere in the country.",
    },
    {
      icon: <FiStar size={30} />,
      title: "Red-Carpet / Event Assistance",
      desc: "Backstage & crowd coordination.",
      fullDesc:
        "From red-carpet escorting to backstage management, media handling, lighting movement, and crowd spacing — we ensure smooth appearances without interruption.",
    },
    {
      icon: <FiPhoneCall size={30} />,
      title: "24/7 Dedicated Support",
      desc: "Instant priority assistance.",
      fullDesc:
        "Our 24/7 celebrity hotline ensures you get immediate assistance for urgent requests, emergencies, last-minute movement changes, and unplanned routing support.",
    },
    {
      icon: <FiGlobe size={30} />,
      title: "International Coordination",
      desc: "Worldwide VIP movement.",
      fullDesc:
        "We provide premium assistance for overseas travel including airport pickup, immigration guidance, VIP hotel booking, onboard security, and global movement support.",
    },
  ];

  // ================================
  // PROCESS STEPS
  // ================================
  const process = [
    {
      icon: <FiEye size={28} />,
      title: "Confidential Profile Assessment",
      desc: "We study your movement purpose, privacy sensitivity, and required protocol levels to plan a tailored VIP strategy.",
    },
    {
      icon: <FiShield size={28} />,
      title: "Risk & Requirement Analysis",
      desc: "Our protection team identifies media zones, public hotspots, alternate routes, and risk points.",
    },
    {
      icon: <FiUsers size={28} />,
      title: "Specialized Team Allocation",
      desc: "We assign chauffeurs, PSOs, bouncers, handlers, and coordinators based on your requirement.",
    },
    {
      icon: <FiMap size={28} />,
      title: "Multi-Route Blueprinting",
      desc: "Primary, secondary, diversion, and emergency extraction routes are prepared and briefed.",
    },
    {
      icon: <FiCheckCircle size={28} />,
      title: "On-Ground Execution",
      desc: "Coordination between cars, handlers, and security ensures precision movement without interruption.",
    },
    {
      icon: <FiPhoneCall size={28} />,
      title: "End-of-Day Review",
      desc: "A complete movement summary and next-day plan are shared with PA/manager.",
    },
  ];

  return (
    <section className="bg-white py-20 md:py-24">
      <div className="container mx-auto px-4">

        {/* ============================ */}
        {/* SECTION TITLE */}
        {/* ============================ */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-blue-900">
            Our Premium Services
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto text-lg">
            Trusted VIP support specially designed for celebrities and high-profile clients.
          </p>
        </div>

        {/* ============================ */}
        {/* SERVICES GRID */}
        {/* ============================ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => setSelectedService(service)}
              className="
                p-7 
                rounded-2xl
                border 
                border-gray-200
                bg-white
                shadow-md 
                hover:shadow-xl
                transition-all 
                duration-300
                hover:-translate-y-2
                cursor-pointer
              "
            >
              <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center">
                {service.icon}
              </div>

              <h3 className="text-xl font-bold text-blue-900 mt-5">
                {service.title}
              </h3>

              <p className="text-gray-600 mt-3 text-sm">
                {service.desc}
              </p>

              <div className="mt-5 h-[3px] w-0 group-hover:w-full bg-orange-400 transition-all duration-700"></div>
            </div>
          ))}
        </div>

        {/* ======================================= */}
        {/*      NEW PREMIUM PROCESS SECTION        */}
        {/* ======================================= */}

        <div className="mt-24">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-blue-900">
            Our Premium Process
          </h2>

          <p className="text-center text-gray-600 max-w-2xl mx-auto mt-3 text-lg">
            Ultra-secure, confidential, and precision-driven workflow for VIP movement.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">

            {process.map((step, index) => (
              <div
                key={index}
                className="p-8 border bg-white rounded-2xl shadow-md hover:shadow-xl 
                transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center">
                  {step.icon}
                </div>

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
