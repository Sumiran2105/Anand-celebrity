import { motion } from "framer-motion";
import { Shield, UserX, KeyRound, EyeOff } from "lucide-react";

export default function PrivacyProtectionSection() {
  const points = [
    {
      icon: <EyeOff className="w-8 h-8" />,
      title: "No Public Exposure",
      desc: "Anonymous pickup points and silent routing for complete confidentiality.",
    },
    {
      icon: <UserX className="w-8 h-8" />,
      title: "Zero Social Disclosure",
      desc: "No photos, no tags, no mentions — a strict non-disclosure movement.",
    },
    {
      icon: <KeyRound className="w-8 h-8" />,
      title: "Encrypted Coordination",
      desc: "Every communication is secured with encrypted & private channels.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "High Confidential Handling",
      desc: "Identity, stay details & travel plans are shared strictly on a need-to-know basis.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-extrabold text-center text-blue-900"
        >
          How We Protect Privacy
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center text-gray-600 mt-3 max-w-2xl mx-auto"
        >
          Privacy is our core promise — protected with elite-level security protocols.
        </motion.p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-14">
          {points.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="
                p-8 bg-white border border-gray-200 rounded-2xl 
                shadow-[0_4px_15px_rgba(0,0,0,0.08)]
                hover:shadow-[0_8px_25px_rgba(0,0,0,0.12)]
                hover:-translate-y-2 transition-all duration-300
              "
            >

              {/* Icon Container – Matte Black + Gold */}
              <div
                className="
                  w-16 h-16 mx-auto mb-6 rounded-xl
                  bg-[#0e0e12]
                  flex items-center justify-center
                  border border-[#d4af37]
                  shadow-[inset_0_0_10px_rgba(212,175,55,0.25)]
                  text-[#d4af37]
                  hover:scale-110 hover:shadow-[inset_0_0_15px_rgba(212,175,55,0.35)]
                  transition-all duration-300
                "
              >
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-blue-900 text-center">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm text-center mt-2 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
