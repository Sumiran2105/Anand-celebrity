import React from "react";
import { motion } from "framer-motion";

// Preview data (you can later fetch from your fleetData.json)
const previewData = [
  {
    type: "Luxury Car",
    image: "data/assets/benz-7series.jpg",
    desc: "Elite luxury sedan for VIP movement.",
  },
  {
    type: "5-Star Hotel",
    image: "data/assets/Falaknuma-Palace.jpeg",
    desc: "Royal accommodation with private entry.",
  },
  {
    type: "Security Team",
    image: "data/assets/security.jpeg",
    desc: "Trained personal security officer for protection.",
  },
  {
    type: "Chauffeur",
    image: "data/assets/driver.jpeg",
    desc: "Experienced VIP chauffeur with etiquette expertise.",
  },
];

export default function FleetPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">

        {/* Title */}
        <h2 className="text-center text-3xl md:text-4xl font-extrabold 
          bg-gradient-to-r from-blue-700 via-indigo-500 to-orange-500
          bg-clip-text text-transparent">
          Premium Fleet & Services Preview
        </h2>

        <p className="text-center text-gray-600 mt-3 max-w-2xl mx-auto text-lg">
          A glimpse into our luxury cars, premium hotels, security staff, and elite chauffeurs.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
          {previewData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="
                group rounded-2xl overflow-hidden bg-white 
                border border-gray-200 shadow-md hover:shadow-xl 
                transition-all
              "
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="
                    w-full h-full object-cover 
                    transition-transform duration-500 
                    group-hover:scale-110
                  "
                />
              </div>

              <div className="p-5 text-center">
                <span className="text-sm text-orange-600 font-semibold uppercase tracking-wide">
                  {item.type}
                </span>
                <h3 className="text-lg font-bold text-blue-800 mt-2">{item.name}</h3>
                <p className="text-gray-600 text-sm mt-1">{item.desc}</p>

                <div className="mt-3 h-[3px] w-0 group-hover:w-full bg-orange-500 transition-all mx-auto"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Button */}
        <div className="text-center mt-12">
          <a
            href="/fleet"
            className="
              inline-block px-8 py-3 rounded-full font-semibold
              bg-gradient-to-r from-blue-600 to-blue-800 text-white
              hover:from-blue-700 hover:to-blue-900 shadow-lg hover:shadow-xl 
              transition-all duration-300
            "
          >
            View Full Fleet & Services
          </a>
        </div>

      </div>
    </section>
  );
}
