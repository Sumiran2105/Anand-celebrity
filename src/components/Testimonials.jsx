import React from "react";
import { motion } from "framer-motion";
import { FiStar } from "react-icons/fi";

const testimonials = [
  {
    name: "Rohit Kumar",
    role: "Film Actor",
    text: "Anand Celebrity Service made my entire shoot schedule smooth and stress-free. The chauffeurs were professional, and the security team ensured complete privacy.",
    image: "https://randomuser.me/api/portraits/men/41.jpg",
  },
  {
    name: "Nisha Verma",
    role: "Influencer & Public Figure",
    text: "The service was top-notch! From luxury cars to hotel arrangements, everything was executed perfectly and with absolute discretion.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Arjun Mehta",
    role: "Business Executive",
    text: "Highly reliable team. Their backend coordination and on-ground support were impressive. Felt safe and taken care of at every moment.",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">

        {/* Title */}
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r 
          from-blue-700 via-indigo-500 to-orange-500 bg-clip-text text-transparent 
          drop-shadow-lg text-center w-full">
        
          What Our VIP Clients Say
        </h2>

        <p className="text-center text-gray-600 mt-3 max-w-2xl mx-auto">
          Trusted by celebrities, influencers, and high-profile individuals across India.
        </p>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="
                rounded-3xl bg-white backdrop-blur-xl
                border border-gray-200 shadow-lg
                hover:shadow-2xl hover:-translate-y-2 transition-all duration-300
                p-8 text-center relative
              "
            >
              {/* Profile Image */}
              <div className="flex justify-center">
                <img
                  src={item.image}
                  className="w-20 h-20 rounded-full object-cover border-2 border-blue-700 shadow-md"
                  alt={item.name}
                />
              </div>

              {/* Stars */}
              <div className="flex justify-center text-yellow-500 mt-4">
                {[...Array(5)].map((_, idx) => (
                  <FiStar key={idx} className="text-xl" />
                ))}
              </div>

              {/* Quote */}
              <p className="mt-4 text-gray-700 leading-relaxed text-base">
                “{item.text}”
              </p>

              {/* Name & Role */}
              <h4 className="mt-6 text-lg font-semibold text-blue-900">
                {item.name}
              </h4>
              <p className="text-sm text-gray-500">{item.role}</p>

              {/* Shine Effect */}
              <div className="absolute inset-0 pointer-events-none rounded-3xl overflow-hidden">
                <div
                  className="
                    absolute inset-0 bg-gradient-to-br
                    from-transparent via-white/40 to-transparent
                    opacity-30 animate-pulse
                  "
                ></div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
