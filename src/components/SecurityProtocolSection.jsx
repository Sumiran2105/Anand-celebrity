import { ShieldCheck, Lock, EyeOff, MapPinned } from "lucide-react";
import { motion } from "framer-motion";

function SecurityProtocolSection() {
  const items = [
    {
      iconBg: "from-blue-100 to-blue-300 text-blue-800 shadow-[0_4px_15px_rgba(59,130,246,0.25)]",
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Elite Security Standards",
      desc: "Each movement is executed with high-level protocols ensuring VIP protection at every step.",
    },
    {
      iconBg: "from-purple-100 to-purple-300 text-purple-800 shadow-[0_4px_15px_rgba(168,85,247,0.25)]",
      icon: <EyeOff className="w-8 h-8" />,
      title: "Total Privacy Protection",
      desc: "Zero-disclosure policy with discreet pickup, anonymous routing, and confidential client handling.",
    },
    {
      iconBg: "from-amber-100 to-amber-300 text-amber-700 shadow-[0_4px_15px_rgba(245,158,11,0.25)]",
      icon: <Lock className="w-8 h-8" />,
      title: "Encrypted Communication",
      desc: "All coordination is handled via secure channels to avoid data leaks or external access.",
    },
    {
      iconBg: "from-emerald-100 to-emerald-300 text-emerald-700 shadow-[0_4px_15px_rgba(16,185,129,0.25)]",
      icon: <MapPinned className="w-8 h-8" />,
      title: "Safe Route Planning",
      desc: "Routes are pre-validated, secure, and optimized for VIP speed, safety, and minimal crowd exposure.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-extrabold text-center text-blue-900"
        >
          Security & Privacy Protocols
        </motion.h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-14">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="
                bg-white rounded-2xl shadow-lg p-7 
                border border-gray-100 hover:shadow-2xl 
                transition-all duration-300 hover:-translate-y-2
              "
            >
              {/* Icon container */}
              <div
                className={`
                  w-16 h-16 mx-auto mb-5 rounded-2xl 
                  flex items-center justify-center 
                  bg-gradient-to-br ${item.iconBg}
                  border border-white/70 backdrop-blur-xl
                  transition-all duration-300 
                  hover:scale-110
                `}
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

export default SecurityProtocolSection;
