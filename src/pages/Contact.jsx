import React from "react";

export default function Contact() {
  return (
    <div className="pt-10 pb-20">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r 
          from-blue-700 via-indigo-500 to-orange-500 bg-clip-text text-transparent 
          drop-shadow-lg text-center w-full">
          Contact Us
        </h1>

        <p className="text-center max-w-2xl mx-auto text-gray-600 mb-8">
          For bookings, security arrangements, or VIP movement planning, reach out to our dedicated team.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* FORM */}
          <form className="space-y-5 border rounded-xl p-6 shadow">
            <div>
              <label className="text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                className="w-full mt-1 px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">Phone Number</label>
              <input
                type="tel"
                className="w-full mt-1 px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-400"
                placeholder="Enter number"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">Message</label>
              <textarea
                className="w-full mt-1 px-4 py-2 rounded-lg border h-32 focus:ring-2 focus:ring-blue-400"
                placeholder="Tell us what you need"
              ></textarea>
            </div>

            <button className="w-full bg-blue-800 text-white py-3 rounded-lg hover:bg-blue-900 transition shadow">
              Send Message
            </button>
          </form>

          {/* CONTACT DETAILS */}
          <div className="space-y-6">
            <div className="p-6 bg-blue-50 rounded-xl border">
              <h3 className="text-lg font-bold text-blue-900">Call Us</h3>
              <p className="text-gray-700 mt-1">+91 98765 43210</p>
            </div>

            <div className="p-6 bg-blue-50 rounded-xl border">
              <h3 className="text-lg font-bold text-blue-900">Email</h3>
              <p className="text-gray-700 mt-1">support@anandvipservice.com</p>
            </div>

            <div className="p-6 bg-blue-50 rounded-xl border">
              <h3 className="text-lg font-bold text-blue-900">Office Location</h3>
              <p className="text-gray-700 mt-1">
                Banjara Hills, Hyderabad, Telangana.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
