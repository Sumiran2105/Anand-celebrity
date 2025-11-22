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
} from "react-icons/fi";

import ServiceModal from "../components/ServiceModal";

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

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

  return (
    <section className="bg-white py-20 md:py-24">
      <div className="container mx-auto px-4">

        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r 
          from-blue-700 via-indigo-500 to-orange-500 bg-clip-text text-transparent 
          drop-shadow-lg text-center w-full">
            Our Premium Services
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto text-lg">
            Trusted VIP support specially designed for celebrities and high-profile clients.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => setSelectedService(service)}
              className="
                group 
                p-7 
                rounded-2xl
                border 
                border-gray-200
                bg-white
                shadow-md 
                hover:shadow-2xl
                transition-all 
                duration-500
                hover:-translate-y-2
                hover:bg-gradient-to-br
                hover:from-[#0A1A3A]
                hover:via-[#153E75]
                hover:to-[#F4A300]
                cursor-pointer
              "
            >
              <div className="w-14 h-14 rounded-xl bg-blue-50 group-hover:bg-white/20 flex items-center justify-center">
                {service.icon}
              </div>

              <h3 className="text-xl font-bold text-blue-900 mt-5 group-hover:text-white">
                {service.title}
              </h3>

              <p className="text-gray-600 group-hover:text-blue-100 mt-3 text-sm">
                {service.desc}
              </p>

              <div className="mt-5 h-[3px] w-0 group-hover:w-full bg-orange-400 transition-all duration-700"></div>
            </div>
          ))}
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
