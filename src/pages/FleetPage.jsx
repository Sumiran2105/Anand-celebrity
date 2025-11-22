import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiShield } from "react-icons/fi";

export default function Fleet() {
  const [fleetData, setFleetData] = useState(null);

  // FILTER STATES
  const [carFilter, setCarFilter] = useState("All");
  const [hotelFilter, setHotelFilter] = useState("All");
  const [securityFilter, setSecurityFilter] = useState("All");

  useEffect(() => {
    fetch("/data/fleetData.json")
      .then((res) => res.json())
      .then((data) => setFleetData(data))
      .catch((err) => console.error("Failed to load fleet data:", err));
  }, []);

  if (!fleetData) return <div className="text-center py-20">Loading...</div>;

  /* ----------------------------------------------------- */
  /* CAR FILTER LOGIC */
  /* ----------------------------------------------------- */
  const filteredCars =
    carFilter === "All"
      ? fleetData.cars
      : fleetData.cars.filter((car) => car.type === carFilter.toLowerCase());

  /* ----------------------------------------------------- */
  /* HOTEL FILTER LOGIC */
  /* ----------------------------------------------------- */
  const filteredHotels =
    hotelFilter === "All"
      ? fleetData.hotels
      : fleetData.hotels.filter((hotel) => {
          if (hotelFilter === "5-Star Hotels") return hotel.type === "5star";
          if (hotelFilter === "VIP Suites") return hotel.type === "vip";
          if (hotelFilter === "Hyderabad") return hotel.city === "Hyderabad";
          if (hotelFilter === "Bangalore") return hotel.city === "Bangalore";
          return true;
        });

  /* ----------------------------------------------------- */
  /* SECURITY FILTER LOGIC */
  /* ----------------------------------------------------- */
  const filteredSecurity =
    securityFilter === "All"
      ? fleetData.securityTeam
      : fleetData.securityTeam.filter(
          (sec) => sec.type === securityFilter.toLowerCase()
        );

  return (
    <div className="bg-white py-20">

      {/* PAGE TITLE */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r 
          from-blue-700 via-indigo-500 to-orange-500 bg-clip-text text-transparent 
          drop-shadow-lg text-center w-full">
          Our Premium Fleet Services
        </h2>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto text-lg">
          Luxury, safety and comfort — curated for celebrity movement.
        </p>
      </div>
       


        {/* 🏨 SECTION 2 — HOTELS WITH CITY + 5-STAR FILTERS */}
      {/* ----------------------------------------------------------- */}
      <section className="container mx-auto px-4 mb-20">

        <h3 className="text-2xl font-bold text-blue-900 mb-6">
          Premium Hotel Stays
        </h3>

        {/* HOTEL FILTERS */}
        <div className="flex flex-wrap gap-3 mb-10">
          {["All", "Hyderabad", "Bangalore", "5-Star Hotels", "VIP Suites"].map(
            (filter) => (
              <button
                key={filter}
                onClick={() => setHotelFilter(filter)}
                className={`
                  px-5 py-2 rounded-full border text-sm font-semibold
                  ${
                    hotelFilter === filter
                      ? "bg-orange-600 text-white border-orange-700"
                      : "bg-white text-orange-800 border-orange-300 hover:bg-orange-50"
                  }
                `}
              >
                {filter}
              </button>
            )
          )}
        </div>

        {/* HOTEL GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredHotels.map((hotel, index) => (
            <HotelCard
              key={index}
              title={hotel.title}
              desc={hotel.desc}
              image={hotel.image}
            />
          ))}
        </div>
      </section>
      {/* ----------------------------------------------------------- */}
      {/* 🚘 SECTION 1 — CARS WITH FILTERS */}
      {/* ----------------------------------------------------------- */}
      <section className="container mx-auto px-4 mb-20">

        <h3 className="text-2xl font-bold text-blue-900 mb-6">
          Secure Luxury Cars
        </h3>

        {/* CAR FILTER BUTTONS */}
        <div className="flex flex-wrap gap-3 mb-10">
          {["All", "Sedan", "SUV", "MPV"].map((filter) => (
            <button
              key={filter}
              onClick={() => setCarFilter(filter)}
              className={`
                px-5 py-2 rounded-full border text-sm font-semibold
                ${
                  carFilter === filter
                    ? "bg-blue-600 text-white border-blue-700"
                    : "bg-white text-blue-800 border-blue-300 hover:bg-blue-50"
                }
              `}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* CAR GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredCars.map((car, index) => (
            <FleetCard
              key={index}
              name={car.name}
              category={car.category}
              image={car.image}
            />
          ))}
        </div>
      </section>

      {/* ----------------------------------------------------------- */}
     

      {/* ----------------------------------------------------------- */}
      {/* 🛡️ SECTION 3 — SECURITY TEAM WITH FILTERS */}
      {/* ----------------------------------------------------------- */}
      <section className="container mx-auto px-4">

        <h3 className="text-2xl font-bold text-blue-900 mb-6">
          Security Team
        </h3>

        {/* SECURITY FILTER BUTTONS */}
        <div className="flex flex-wrap gap-3 mb-10">
          {["All", "Gunmen", "Bouncer", "PSO", "Escort"].map((filter) => (
            <button
              key={filter}
              onClick={() => setSecurityFilter(filter)}
              className={`
                px-5 py-2 rounded-full border text-sm font-semibold
                ${
                  securityFilter === filter
                    ? "bg-green-600 text-white border-green-700"
                    : "bg-white text-green-800 border-green-300 hover:bg-green-50"
                }
              `}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* SECURITY GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredSecurity.map((sec, index) => (
            <SecurityCard
              key={index}
              name={sec.name}
              desc={sec.desc}
              image={sec.image}
            />
          ))}
        </div>

      </section>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* CARD COMPONENTS */
/* ------------------------------------------------------------------ */

const FleetCard = ({ name, category, image }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4 }}
    className="group rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-sm hover:shadow-xl transition-all"
  >
    <div className="h-64 overflow-hidden">
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
    </div>
    <div className="p-6 text-center">
      <h3 className="text-xl font-bold text-blue-900">{name}</h3>
      <p className="text-gray-500 text-sm mt-1 uppercase">{category}</p>
      <div className="mt-4 h-[3px] w-0 group-hover:w-full bg-orange-500 transition-all mx-auto"></div>
    </div>
  </motion.div>
);

const HotelCard = ({ title, desc, image }) => (
  <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl bg-white transition-all">
    <div className="h-48 w-full overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
      />
    </div>
    <div className="p-5">
      <h4 className="text-xl font-bold text-blue-900">{title}</h4>
      <p className="text-gray-600 text-sm mt-2">{desc}</p>
    </div>
  </div>
);

const SecurityCard = ({ name, desc, image }) => (
  <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl bg-white transition-all">
    <div className="h-48 w-full overflow-hidden">
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
      />
    </div>
    <div className="p-5">
      <h4 className="text-xl font-bold text-blue-900">{name}</h4>
      <p className="text-gray-600 text-sm mt-2">{desc}</p>
    </div>
  </div>
);
