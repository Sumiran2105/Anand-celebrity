import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [activeModal, setActiveModal] = useState(null);

  const quickLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/fleet", label: "Fleet" },
    { path: "/contact", label: "Contact" },
  ];

  const legalContent = {
    Privacy: { title: "Privacy Policy", content: "<p>Privacy content here...</p>" },
    Terms: { title: "Terms & Conditions", content: "<p>Terms content here...</p>" },
    Disclaimer: { title: "Disclaimer", content: "<p>Disclaimer content here...</p>" },
  };

  return (
    <>
      <footer className="bg-gradient-to-b from-gray-900 to-[#071420] text-white mt-10">
        <div className="container mx-auto px-6">
          <div className="pt-6 pb-10">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

              {/* BRAND */}
              <div className="md:col-span-4">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-orange-300">
                    <img src="/data/assets/founder.jpg" alt="Founder" />
                  </div>
                  <img src="/data/assets/Anandhlogo.png" className="w-12 h-14" alt="Logo" />
                </div>

                <h2 className="text-2xl font-bold">
                  <span className="text-orange-400">ANAND</span> CELEBRITY SERVICE
                </h2>
                <p className="text-orange-200 text-sm italic">
                  "Seamless • Secure • Private Movement"
                </p>
              </div>

              {/* QUICK LINKS */}
              <div className="md:col-span-2">
                <h3 className="text-lg font-semibold mb-3 text-orange-400">Quick Links</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  {quickLinks.map((link) => (
                    <li key={link.label}>
                      <Link to={link.path} className="hover:text-orange-400 transition">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CONTACT */}
              <div className="md:col-span-3">
                <h3 className="text-lg font-semibold mb-3 text-orange-400">Contact</h3>

                <p className="text-gray-300 text-sm">
                  📍 Jubilee Hills, Hyderabad <br /> Telangana - 500033
                </p>

                <p className="text-gray-300 text-sm mt-2">📞 +91 98765 43210</p>

                <p className="text-gray-300 text-sm">
                  📧 support@anandcelebrityservice.com
                </p>
              </div>

              {/* SOCIAL ICONS — FIXED & ALIGNED */}
              <div className="md:col-span-3 flex items-start justify-start md:justify-end mt-6 md:mt-0">
                <div className="flex gap-4">
                  {[ 
                    { icon: <Instagram className="w-6 h-6" />, link: "#" },
                    { icon: <Facebook className="w-6 h-6" />, link: "#" },
                    { icon: <Twitter className="w-6 h-6" />, link: "#" },
                    { icon: <Youtube className="w-6 h-6" />, link: "#" },
                  ].map((item, i) => (
                    <a
                      key={i}
                      href={item.link}
                      className="
                        flex items-center justify-center
                        w-12 h-12 rounded-xl shrink-0
                        bg-white/10 text-white border border-white/10 
                        backdrop-blur-md
                        hover:bg-yellow-400 hover:text-black
                        hover:shadow-[0_4px_18px_rgba(255,200,0,0.4)]
                        transition-all duration-300
                      "
                    >
                      {item.icon}
                    </a>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* BOTTOM BAR */}
          <div className="border-t border-white/10 py-3 text-sm flex flex-col md:flex-row justify-between text-gray-400">
            <p>© {currentYear} Anand Celebrity Service — All Rights Reserved.</p>

            <div className="flex gap-4 mt-2 md:mt-0">
              {["Privacy", "Terms", "Disclaimer"].map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveModal(item)}
                  className="hover:text-orange-400"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* MODAL */}
      {activeModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white max-w-2xl w-full rounded-lg p-6">

            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold">{legalContent[activeModal]?.title}</h3>
              <button
                className="text-gray-500 hover:text-gray-700 text-2xl"
                onClick={() => setActiveModal(null)}
              >
                ×
              </button>
            </div>

            <div
              className="mt-4 text-gray-700"
              dangerouslySetInnerHTML={{
                __html: legalContent[activeModal]?.content,
              }}
            />

            <button
              className="mt-6 bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600"
              onClick={() => setActiveModal(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
