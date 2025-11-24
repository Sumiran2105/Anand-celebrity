import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [activeModal, setActiveModal] = useState(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Show scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/fleet", label: "Fleet" },
    { path: "/contact", label: "Contact" },
  ];

  const legalContent = {
    Privacy: { title: "Privacy Policy", content: `<p>Content...</p>` },
    Terms: { title: "Terms & Conditions", content: `<p>Content...</p>` },
    Disclaimer: { title: "Disclaimer", content: `<p>Content...</p>` },
  };

  return (
    <>
      <footer className="bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-6">

          {/* GRID */}
          <div className="py-12 grid grid-cols-1 md:grid-cols-12 gap-10">

            {/* BRAND */}
            <div className="md:col-span-4">
              <div className="flex items-center space-x-3">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-yellow-300">
                  <img
                    src="/data/assets/founder.jpg"
                    className="w-full h-full object-cover"
                    alt="Founder"
                  />
                </div>

                <img
                  src="/data/assets/Anandhlogo.png"
                  className="w-14 h-14"
                  alt="Logo"
                />
              </div>

              <h2 className="text-2xl font-bold mt-3">
                <span className="text-yellow-400">ANAND</span> CELEBRITY SERVICE
              </h2>

              <p className="text-yellow-200 text-sm italic">
                "Seamless • Secure • Private Movement"
              </p>
            </div>

            {/* QUICK LINKS */}
            <div className="md:col-span-3">
              <h3 className="text-lg font-semibold mb-4 text-yellow-400">
                Quick Links
              </h3>

              <ul className="space-y-3 text-gray-200 text-sm">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link className="hover:text-yellow-400" to={link.path}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* CONTACT */}
            <div className="md:col-span-3">
              <h3 className="text-lg font-semibold mb-4 text-yellow-400">
                Contact
              </h3>

              <p className="text-gray-300 text-sm">
                📍 Jubilee Hills, Hyderabad <br /> Telangana - 500033
              </p>
              <p className="text-gray-300 text-sm mt-2">📞 +91 98765 43210</p>
              <p className="text-gray-300 text-sm">
                📧 support@anandcelebrityservice.com
              </p>
            </div>

            {/* SOCIAL ICONS */}
            <div className="md:col-span-2 flex md:justify-end">
              <div className="flex gap-4">
                {[ 
                  { icon: <Instagram className="w-6 h-6" />, link: "#" },
                  { icon: <Facebook className="w-6 h-6" />, link: "#" },
                  { icon: <Twitter className="w-6 h-6" />, link: "#" },
                  { icon: <Youtube className="w-6 h-6" />, link: "#" },
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.link}
                    className="
                      w-12 h-12 flex items-center justify-center
                      rounded-xl bg-white/10 border border-white/20
                      backdrop-blur text-white
                      hover:bg-yellow-400 hover:text-black
                      hover:shadow-[0_4px_15px_rgba(255,255,0,0.4)]
                      transition-all duration-300
                    "
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* COPYRIGHT */}
          <div className="border-t border-white/10 py-4 flex flex-col md:flex-row justify-between text-sm text-gray-300">
            <p>© {currentYear} Anand Celebrity Service — All Rights Reserved.</p>

            <div className="flex gap-6 mt-2 md:mt-0">
              {["Privacy", "Terms", "Disclaimer"].map((item) => (
                <button
                  key={item}
                  className="hover:text-yellow-400"
                  onClick={() => setActiveModal(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

        </div>
      </footer>

      {/* LEGAL MODAL */}
      {activeModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-2xl w-full p-6 shadow-xl">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold">
                {legalContent[activeModal]?.title}
              </h3>
              <button
                onClick={() => setActiveModal(null)}
                className="text-gray-500 hover:text-black text-2xl"
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
              onClick={() => setActiveModal(null)}
              className="mt-6 bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* SCROLL TO TOP BUTTON */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="
            fixed bottom-6 right-6 w-12 h-12 rounded-full
            bg-yellow-500 text-white shadow-xl
            hover:bg-yellow-600 hover:scale-110
            flex items-center justify-center
            transition-all duration-300 z-50
          "
        >
          ↑
        </button>
      )}
    </>
  );
};

export default Footer;
