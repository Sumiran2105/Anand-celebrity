import React from "react";

export default function BookVIP() {
  return (
    <div className="pt-10 pb-20">
      <div className="container mx-auto px-4">
        <h1 className="text-center text-3xl md:text-4xl font-bold text-blue-900 mb-6">
          Book VIP Service
        </h1>

        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
          Please provide your travel details below. Our VIP coordinator will contact you within minutes.
        </p>

        <form className="max-w-2xl mx-auto space-y-6 border rounded-xl p-8 shadow">
          <div>
            <label className="text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              className="w-full mt-1 border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="tel"
              className="w-full mt-1 border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400"
              placeholder="Your contact number"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Travel Date</label>
            <input
              type="date"
              className="w-full mt-1 border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Select Services</label>
            <select className="w-full mt-1 border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400">
              <option>Luxury Car + Chauffeur</option>
              <option>Security Team (Gunman / Bouncers)</option>
              <option>Hotel Arrangements</option>
              <option>Complete VIP Movement</option>
            </select>
          </div>

          <button className="w-full bg-blue-800 text-white py-3 rounded-lg hover:bg-blue-900 transition shadow">
            Submit Booking
          </button>
        </form>
      </div>
    </div>
  );
}
