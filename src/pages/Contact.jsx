import React from "react";
import { Phone, Mail, MapPin, Shield, Car, Users } from "lucide-react";

export default function Contact() {
  return (
    <div className="relative bg-white py-20 overflow-hidden">

      {/* GOLD PARTICLE EFFECT */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-pulse-slow absolute top-10 left-10 w-2 h-2 bg-yellow-400 rounded-full opacity-50 blur-sm"></div>
        <div className="animate-pulse-slow absolute top-1/3 right-20 w-3 h-3 bg-orange-300 rounded-full opacity-40 blur"></div>
        <div className="animate-pulse-slow absolute bottom-20 left-1/2 w-2 h-2 bg-yellow-300 rounded-full opacity-40 blur"></div>
      </div>

      <div className="container mx-auto px-6 relative z-[2]">

        {/* ---------- TITLE ---------- */}
        <div className="text-center mb-10">
          <h1
            className="text-3xl md:text-4xl font-extrabold text-center text-blue-900"
          >
            Connect With Our VIP Coordination Desk
          </h1>

          {/* Animated Gold Underline */}
          <div className="mx-auto mt-3 w-44 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full animate-pulse"></div>

          <p className="text-gray-600 max-w-3xl mx-auto mt-6 text-lg">
            Our elite VIP movement team is available 24/7 for luxury car bookings, 
            security arrangements, private hotel stays, and confidential travel planning.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 mt-16">

          {/* ---------- GLASSMORPHIC FORM ---------- */}
          <form
            className="
              bg-white/50 backdrop-blur-xl border border-gray-200 
              rounded-3xl p-10 shadow-2xl transition hover:shadow-3xl
            "
          >
            <h3 className="text-2xl font-bold text-blue-900 mb-6">
              Send Us a Message
            </h3>

            <div className="space-y-6">

              <div>
                <label className="text-sm font-semibold text-gray-700">Full Name</label>
                <input
                  type="text"
                  className="
                    mt-2 w-full px-4 py-3 rounded-xl border border-gray-300 
                    bg-white/70 focus:bg-white focus:ring-2 focus:ring-blue-600 
                    transition shadow-sm
                  "
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  className="
                    mt-2 w-full px-4 py-3 rounded-xl border border-gray-300 
                    bg-white/70 focus:bg-white focus:ring-2 focus:ring-blue-600 
                    transition shadow-sm
                  "
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-700">Message</label>
                <textarea
                  className="
                    mt-2 w-full px-4 py-3 rounded-xl border border-gray-300 
                    h-40 bg-white/70 focus:bg-white focus:ring-2 
                    focus:ring-blue-600 transition shadow-sm resize-none
                  "
                  placeholder="Tell us how we can assist you"
                ></textarea>
              </div>

              <button
                className="
                  w-full py-3 mt-4 rounded-xl text-white font-semibold text-lg
                  bg-gradient-to-r from-blue-500 to-orange-700 
                  hover:from-blue-700 hover:to-orange-800 
                  shadow-lg hover:shadow-2xl transform hover:scale-[1.03]
                  transition-all
                "
              >
                Submit Request
              </button>
            </div>
          </form>

          {/* ---------- LUXURY CONTACT INFO CARDS ---------- */}
          <div className="space-y-8">

            {/* Card 1 */}
            <div className="flex items-center gap-6 p-8 bg-white rounded-3xl shadow-lg hover:shadow-xl border transition">
              <Phone className="w-12 h-12 text-blue-800 p-3 bg-blue-100 rounded-full" />
              <div>
                <h3 className="text-xl font-bold text-blue-900">VIP Hotline</h3>
                <p className="text-gray-700 mt-1 text-lg">+91 98765 43210</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex items-center gap-6 p-8 bg-white rounded-3xl shadow-lg hover:shadow-xl border transition">
              <Mail className="w-12 h-12 text-blue-800 p-3 bg-blue-100 rounded-full" />
              <div>
                <h3 className="text-xl font-bold text-blue-900">Email Support</h3>
                <p className="text-gray-700 mt-1 text-lg">support@anandvipservice.com</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex items-center gap-6 p-8 bg-white rounded-3xl shadow-lg hover:shadow-xl border transition">
              <MapPin className="w-12 h-12 text-blue-800 p-3 bg-blue-100 rounded-full" />
              <div>
                <h3 className="text-xl font-bold text-blue-900">Head Office</h3>
                <p className="text-gray-700 mt-1 text-lg">Banjara Hills, Hyderabad</p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="flex items-center gap-6 p-8 bg-white rounded-3xl shadow-lg hover:shadow-xl border transition">
              <Shield className="w-12 h-12 text-orange-700 p-3 bg-orange-100 rounded-full" />
              <div>
                <h3 className="text-xl font-bold text-orange-700">Security Department</h3>
                <p className="text-gray-700 mt-1 text-lg">Elite protection & movement planning</p>
              </div>
            </div>

            {/* Card 5 */}
            <div className="flex items-center gap-6 p-8 bg-white rounded-3xl shadow-lg hover:shadow-xl border transition">
              <Car className="w-12 h-12 text-blue-700 p-3 bg-blue-50 rounded-full" />
              <div>
                <h3 className="text-xl font-bold text-blue-700">Fleet Department</h3>
                <p className="text-gray-700 mt-1 text-lg">Premium cars & chauffeur coordination</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
