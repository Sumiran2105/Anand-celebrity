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
    { path: "/book", label: "Book VIP" },
    { path: "/contact", label: "Contact" }
  ];

  const openLegalModal = (type) => setActiveModal(type);
  const closeLegalModal = () => setActiveModal(null);

 const SocialIcons = [
  { icon: Instagram, link: "#" },
  { icon: Facebook, link: "#" },
  { icon: Twitter, link: "#" },
  { icon: Youtube, link: "#" },
  ];



  const legalContent = {
    Privacy: {
      title: "Privacy Policy",
      content: `<p>Your privacy policy content will go here...</p>`
    },
    Terms: {
      title: "Terms & Conditions",
      content: `<p>Your terms content will go here...</p>`
    },
    Disclaimer: {
      title: "Disclaimer",
      content: `<p>Your disclaimer content will go here...</p>`
    }
  };

  return (
    <>
      {/* MAIN FOOTER */}
      <footer className="bg-gradient-to-b from-gray-900 to-[#071420] text-white mt-10">
        <div className="container mx-auto px-6">

          {/* GRID WRAPPER */}
          <div className="pt-6 pb-10">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

              {/* BRANDING */}
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

  <div className="grid grid-cols-2 gap-y-2">
    {quickLinks.map((link) => (
      <Link
        key={link.label}
        to={link.path}
        className="text-gray-300 text-sm hover:text-orange-400"
      >
        {link.label}
      </Link>
    ))}
  </div>
</div>


              {/* CONTACT */}
              <div className="md:col-span-3">
                <h3 className="text-lg font-semibold mb-3 text-orange-400">Contact</h3>
                <p className="text-gray-300 text-sm">
                  📍 Jubilee Hills, Hyderabad<br />Telangana - 500033
                </p>
                <p className="text-gray-300 text-sm mt-2">📞 +91 98765 43210</p>
                <p className="text-gray-300 text-sm">📧 support@anandcelebrityservice.com</p>
              </div>

              {/* SOCIAL ICONS */}
<div className="flex gap-3">
  {SocialIcons.map((item, i) => (
    <a
      key={i}
      href={item.link}
      className="
        flex items-center justify-center
        rounded-xl 
        text-white
        transition-all duration-300 ease-out
        hover:bg-gradient-to-br hover:from-yellow-400 hover:to-yellow-600
        hover:text-white hover:shadow-[0_4px_15px_rgba(255,200,0,0.4)]
        
        /* 📱 Mobile */
        w-10 h-10 bg-white/10

        /* 💻 Laptop */
        md:w-11 md:h-11 md:bg-white/10

        /* 🖥️ Large Desktop */
        lg:w-12 lg:h-12 lg:bg-white/10
      "
    >
      <item.icon
        className="
          /* 📱 Mobile icon size */
          w-5 h-5

          /* 💻 Laptop */
          md:w-6 md:h-6

          /* 🖥️ Large Desktop */
          lg:w-7 lg:h-7
        "
        strokeWidth={1.5}
      />
    </a>
  ))}

  
</div>
            </div>
          </div>

          {/* COPYRIGHT BAR */}
          <div className="border-t border-white/10 py-3 text-sm flex flex-col md:flex-row justify-between text-gray-400">
            <p>© {currentYear} Anand Celebrity Service — All Rights Reserved.</p>

            <div className="flex gap-4 mt-2 md:mt-0">
              {["Privacy", "Terms", "Disclaimer"].map((item) => (
                <button key={item} onClick={() => openLegalModal(item)} className="hover:text-orange-400">
                  {item}
                </button>
              ))}
            </div>
          </div>

        </div>
      </footer>

      {/* LEGAL MODAL */}
      {activeModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white max-w-2xl w-full rounded-lg p-6">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold">{legalContent[activeModal]?.title}</h3>
              <button onClick={closeLegalModal} className="text-gray-500 hover:text-gray-700 text-2xl">×</button>
            </div>

            <div
              className="mt-4 text-gray-700"
              dangerouslySetInnerHTML={{ __html: legalContent[activeModal]?.content }}
            />

            <button onClick={closeLegalModal} className="mt-6 bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600">
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
