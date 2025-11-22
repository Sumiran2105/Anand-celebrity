import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="bg-white text-blue-900 py-16 md:py-24 lg:py-28">
      <div className="container mx-auto px-4">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT TEXT */}
          <div className="space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight"
            >
              Seamless, Secure & Private  
              <span className="text-orange-500"> Celebrity Movement</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-lg md:text-xl text-gray-600 max-w-xl"
            >
              Premium luxury cars, trained chauffeurs, elite security teams and private hotel arrangements — 
              all coordinated with discretion for celebrity and VIP travel.
            </motion.p>

            {/* CTA BUTTONS */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 mt-8"
            >
              {/* Book VIP */}
              <Link
                to="/book-vip"
                className="px-7 py-3 rounded-xl bg-orange-500 text-white font-semibold 
                shadow-md hover:shadow-lg transition-all hover:bg-orange-600 hover:scale-105"
              >
                Book VIP Movement
              </Link>

              {/* Services */}
              <Link
                to="/services"
                className="px-7 py-3 rounded-xl border border-blue-200 text-blue-800 
                font-semibold bg-blue-50 hover:bg-blue-100 transition-all"
              >
                Our Services
              </Link>
            </motion.div>
          </div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="w-full"
          >
            <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-200">
              <img
                src="data/assets/celebrity.jpeg"
                alt="Luxury VIP Cars"
                className="object-cover w-full h-64 md:h-96 lg:h-[28rem]"
              />
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
