// ServiceModal.jsx
import React from "react";
import { motion } from "framer-motion";
import { FiX } from "react-icons/fi";

// PREMIUM GOLD ICONS (OPTION B)
const goldIcons = {
  car: (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none"
      stroke="#FFD54A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 13l2-5h14l2 5" />
      <rect x="5" y="13" width="14" height="6" rx="2" />
      <circle cx="7.5" cy="18.5" r="1.5" />
      <circle cx="16.5" cy="18.5" r="1.5" />
    </svg>
  ),

  shield: (
    <svg width="36" height="36" fill="none" stroke="#FFD54A" strokeWidth="1.6"
      strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M12 3l7 4v5c0 5-3.5 9-7 9s-7-4-7-9V7l7-4z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),

  hotel: (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none"
      stroke="#FFD54A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21h18" />
      <path d="M4 21V8l8-5 8 5v13" />
      <rect x="9" y="13" width="6" height="8" />
      <path d="M9 10h6" />
    </svg>
  ),

  backend: (
    <svg width="36" height="36" fill="none" stroke="#FFD54A" strokeWidth="1.6"
      strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a8 8 0 0 1-14.8 0" />
      <path d="M4.6 9a8 8 0 0 1 14.8 0" />
    </svg>
  ),

  map: (
    <svg width="36" height="36" fill="none" stroke="#FFD54A" strokeWidth="1.6"
      strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M3 6l6-2 6 2 6-2v14l-6 2-6-2-6 2z" />
      <circle cx="9" cy="10" r="2" />
      <circle cx="15" cy="14" r="2" />
      <path d="M11 12l2 2" />
    </svg>
  ),

  star: (
    <svg width="36" height="36" fill="#FFD54A" stroke="#FFD54A"
      strokeWidth="1.5" viewBox="0 0 24 24">
      <path d="M12 2l3 6 7 .9-5 4.8 1.2 7.3L12 17l-6.2 3.9L7 13.7 2 8.9 9 8z" />
    </svg>
  ),

  support: (
    <svg width="36" height="36" fill="none" stroke="#FFD54A" strokeWidth="1.6"
      strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <circle cx="12" cy="11" r="3" />
      <path d="M17 16v1a4 4 0 0 1-4 4h-2a4 4 0 0 1-4-4v-1" />
      <path d="M19 10v2a7 7 0 0 1-1 3" />
      <path d="M5 10v2a7 7 0 0 0 1 3" />
    </svg>
  ),

  globe: (
    <svg width="36" height="36" fill="none" stroke="#FFD54A" strokeWidth="1.6"
      strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15 15 0 0 1 5 10 15 15 0 0 1-5 10 15 15 0 0 1-5-10 15 15 0 0 1 5-10z" />
    </svg>
  ),
};

// ICON MAPPER BASED ON SERVICE TITLE
const matchIcon = (title) => {
  if (title.includes("Car")) return goldIcons.car;
  if (title.includes("Security")) return goldIcons.shield;
  if (title.includes("Hotel")) return goldIcons.hotel;
  if (title.includes("Backend")) return goldIcons.backend;
  if (title.includes("Movement")) return goldIcons.map;
  if (title.includes("Red-Carpet")) return goldIcons.star;
  if (title.includes("Support")) return goldIcons.support;
  if (title.includes("International")) return goldIcons.globe;
  return goldIcons.star;
};

export default function ServiceModal({ service, onClose }) {
  if (!service) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 p-4">

      {/* GOLD SPARKLE BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {[...Array(60)].map((_, i) => (
          <motion.span
            key={i}
            initial={{
              opacity: 0,
              scale: 0.3,
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              opacity: [0, 1, 0],
              y: Math.random() * window.innerHeight,
              x: Math.random() * window.innerWidth,
            }}
            transition={{
              duration: 5 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute w-1 h-1 bg-yellow-400 rounded-full shadow-[0_0_6px_rgba(255,215,0,0.8)]"
          ></motion.span>
        ))}
      </div>

      {/* MODAL BOX */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.35 }}
        className="relative bg-[#111] text-white rounded-3xl shadow-2xl max-w-3xl w-full overflow-hidden border border-[#2a2a2a]"
      >

        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 z-50 w-10 h-10 flex items-center justify-center rounded-full
            bg-white/10 border border-white/20 text-gray-200 hover:text-yellow-300 
            hover:bg-white/20 transition text-2xl shadow-lg"
        >
          <FiX />
        </button>

        {/* HEADER */}
        <div className="relative bg-gradient-to-b from-black via-[#1b1b1b] to-[#3b2c1c] p-12 pb-16 text-center">

          {/* GOLD GLOW */}
          <div className="absolute left-1/2 top-1/3 -translate-x-1/2 w-40 h-40 bg-yellow-500/20 blur-3xl rounded-full"></div>

          {/* GOLD ICON BOX */}
          <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg shadow-yellow-500/30">
            {matchIcon(service.title)}
          </div>

          {/* TITLE */}
          <h2 className="text-3xl font-extrabold text-yellow-300">
            {service.title}
          </h2>

          <p className="text-gray-300 text-sm mt-2 max-w-xl mx-auto">
            Premium service tailored for celebrities and high-profile clients.
          </p>
        </div>

        {/* BODY */}
        <div className="p-10 text-gray-300">

          {/* DESCRIPTION */}
          <p className="leading-relaxed">{service.fullDesc}</p>

          <div className="my-6 border-t border-[#333]"></div>

          {/* FEATURES LIST */}
          <h3 className="text-lg font-semibold text-yellow-300 mb-4">
            What This Service Includes:
          </h3>

          <ul className="space-y-3 text-gray-300 text-sm">
            {service.features?.map((item, idx) => (
              <li key={idx} className="flex items-center gap-3">
                <span className="text-yellow-400">✔</span>
                {item}
              </li>
            ))}
          </ul>

          {(!service.features || service.features.length === 0) && (
            <p className="text-gray-500 text-sm">No additional features listed.</p>
          )}
        </div>
      </motion.div>
    </div>
  );
}
