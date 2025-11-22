import React from "react";
import { motion } from "framer-motion";
import { FiX } from "react-icons/fi";

export default function ServiceModal({ service, onClose }) {
  if (!service) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 p-4">

      {/* ✨ Hollywood Dust Particles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {[...Array(60)].map((_, i) => (
          <motion.span
            key={i}
            initial={{
              opacity: 0,
              scale: 0.4,
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              opacity: [0, 1, 0],
              y: Math.random() * window.innerHeight,
              x: Math.random() * window.innerWidth,
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute w-1 h-1 bg-yellow-300 rounded-full shadow-[0_0_6px_rgba(255,215,0,0.8)]"
          ></motion.span>
        ))}
      </div>

      {/* MODAL CONTAINER */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.35 }}
        className="relative bg-[#111] text-white rounded-3xl shadow-2xl max-w-2xl w-full overflow-hidden border border-[#2a2a2a]"
      >

        {/* ❌ Close Button (always visible) */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 z-50 w-10 h-10 flex items-center justify-center rounded-full
            bg-white/10 border border-white/20 text-gray-200 hover:text-yellow-300 
            hover:bg-white/20 transition text-2xl shadow-lg"
        >
          <FiX />
        </button>

        {/* HEADER */}
        <div className="relative bg-gradient-to-br from-black via-[#1a1a1a] to-[#4a3823] p-10 pb-14 text-center overflow-hidden">

          {/* Gold Glow Behind Icon */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-yellow-500/20 blur-3xl rounded-full"></div>

          {/* Icon Box */}
          <div className="w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 flex items-center justify-center mx-auto text-yellow-400 text-4xl shadow-lg shadow-yellow-600/30 relative z-20">
            {service.icon}
          </div>

          {/* GOLD SHINE TITLE */}
          <h2 className="mt-6 text-3xl font-extrabold relative z-20 text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-400 inline-block px-2">
            {service.title}

            {/* Animated Shine */}
            <motion.span
              initial={{ x: "-150%" }}
              animate={{ x: "150%" }}
              transition={{
                repeat: Infinity,
                duration: 5.2,
                ease: "easeInOut",
              }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-50 blur-sm skew-x-12"
            ></motion.span>
          </h2>

          {/* Subtitle */}
          <p className="text-gray-300 text-sm mt-2 max-w-md mx-auto relative z-20">
            Premium service tailored for celebrities and high-profile clients.
          </p>
        </div>

        {/* BODY */}
        <div className="p-8 text-gray-200 relative z-20">

          {/* Description */}
          <p className="leading-relaxed text-gray-300">
            {service.fullDesc}
          </p>

          <div className="my-6 border-t border-[#333]"></div>

          {/* Highlights */}
          <h3 className="text-lg font-semibold text-yellow-300 mb-3 tracking-wide">
            What This Service Includes:
          </h3>

          <ul className="space-y-2 text-gray-300 text-sm">
            <li>✔ VIP coordination support</li>
            <li>✔ Highly trained and verified staff</li>
            <li>✔ Secure movement planning</li>
            <li>✔ Discreet arrangements</li>
            <li>✔ Multi-city flexible scheduling</li>
            <li>✔ Rapid emergency response</li>
          </ul>

          {/* Optional Image */}
          {service.image && (
            <div className="mt-6">
              <img
                src={service.image}
                alt={service.title}
                className="rounded-xl shadow-lg border border-[#333]"
              />
            </div>
          )}
        </div>

      </motion.div>
    </div>
  );
}
