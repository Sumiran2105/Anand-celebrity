import React from "react";

export default function About() {
  return (
    <div className="pt-18">

      {/* =======================
          1. ABOUT ANAND CELEBRITY SERVICE
      ========================== */}
      <section className="max-w-7xl mx-auto px-5 pt-32 mb-16">

        {/* Title */}
        <h1
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r 
          from-blue-700 via-indigo-500 to-orange-500 bg-clip-text text-transparent 
          drop-shadow-lg text-center w-full"
        >
          Anand Celebrity Service
        </h1>

        <div className="grid md:grid-cols-2 gap-12 mt-14">

          {/* Image */}
          <div className="flex justify-center">
            <img
              src="src/assets/founder.jpg"
              alt="Celebrity Service"
              className="rounded-3xl shadow-2xl w-full max-w-md object-cover border-4 border-gray-200"
            />
          </div>

          {/* Description */}
          <div className="flex flex-col justify-center">

            <p className="text-lg text-gray-700 leading-relaxed">
              Anand Celebrity Service is India’s premier luxury movement brand,
              designed exclusively for celebrities, influencers, public figures and
              high-profile professionals who demand <span className="font-semibold text-blue-700">precision, privacy, and world-class comfort</span>.
            </p>

            <p className="mt-5 text-gray-700 text-lg leading-relaxed">
              Whether it’s film shootings, city events, brand tours, spiritual travels, or
              inter-state VIP movement, our team ensures <span className="font-semibold text-orange-600">complete safety, seamless coordination,
              and absolute discretion.</span>
            </p>

            <p className="mt-5 text-gray-700 text-lg leading-relaxed">
              Our approach is simple yet powerful —
              exceptional vehicles, elite personnel, and premium stays,
              all arranged with flawless backend support so you can focus on your work.
            </p>

            <p className="mt-6 text-gray-800 font-semibold text-xl bg-blue-50 p-4 rounded-xl shadow-md border-l-4 border-blue-500">
              “For every journey, we deliver safety, comfort, and celebrity-level convenience — 
              without compromise.”
            </p>

          </div>
        </div>
      </section>

      {/* =======================
          2. WHY CHOOSE CELEBRITY SERVICE
      ========================== */}
      <section className="bg-gray-50 py-20 px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r 
          from-blue-700 via-indigo-500 to-orange-500 bg-clip-text text-transparent 
          drop-shadow-lg text-center w-full">
          Why Choose Anand Celebrity Service?
        </h2>

        <p className="text-center mt-4 text-gray-700 max-w-3xl mx-auto text-lg">
          Trusted by stars, creators, and VIP professionals for our unmatched safety,
          private logistics, and premium arrangements.
        </p>

        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-10 mt-14">

          {/* Card 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-blue-500 
            transition-all duration-300 hover:-translate-y-2 hover:shadow-blue-200 hover:shadow-xl">
            <div className="text-blue-600 text-4xl mb-3">🚘</div>
            <h3 className="text-xl font-semibold text-blue-700">Secure Luxury Cars</h3>
            <p className="mt-3 text-gray-600">
              Chauffeur-driven premium sedans, SUVs & vans for smooth, private movement.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-yellow-500
            transition-all duration-300 hover:-translate-y-2 hover:shadow-yellow-200 hover:shadow-xl">
            <div className="text-yellow-500 text-4xl mb-3">🛡️</div>
            <h3 className="text-xl font-semibold text-yellow-600">Elite Security Personnel</h3>
            <p className="mt-3 text-gray-600">
              Gunmen, bouncers, and PSOs trained for VIP protocol and discreet operations.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-red-500
            transition-all duration-300 hover:-translate-y-2 hover:shadow-red-200 hover:shadow-xl">
            <div className="text-red-600 text-4xl mb-3">🏨</div>
            <h3 className="text-xl font-semibold text-red-600">Premium Hotel Arrangements</h3>
            <p className="mt-3 text-gray-600">
              5-star, discreet, and fully managed stays for comfort and privacy.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-purple-500
            transition-all duration-300 hover:-translate-y-2 hover:shadow-purple-200 hover:shadow-xl">
            <div className="text-purple-600 text-4xl mb-3">🛰️</div>
            <h3 className="text-xl font-semibold text-purple-600">Backend Logistics</h3>
            <p className="mt-3 text-gray-600">
              Route planning, scheduling, and on-ground support handled end-to-end.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-orange-500
            transition-all duration-300 hover:-translate-y-2 hover:shadow-orange-200 hover:shadow-xl">
            <div className="text-orange-600 text-4xl mb-3">🔒</div>
            <h3 className="text-xl font-semibold text-orange-600">Complete Privacy</h3>
            <p className="mt-3 text-gray-600">
              We ensure confidentiality, minimal exposure, and secure identity handling.
            </p>
          </div>

          {/* Card 6 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-green-500
            transition-all duration-300 hover:-translate-y-2 hover:shadow-green-200 hover:shadow-xl">
            <div className="text-green-600 text-4xl mb-3">⏱️</div>
            <h3 className="text-xl font-semibold text-green-600">On-Time Coordination</h3>
            <p className="mt-3 text-gray-600">
              Every movement is planned with precision for exceptional punctuality.
            </p>
          </div>

        </div>
      </section>

      {/* =======================
           3. OUR COMMITMENT
      ========================== */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r 
          from-blue-700 via-indigo-500 to-orange-500 bg-clip-text text-transparent 
          drop-shadow-lg text-center w-full">
          Our Commitment
        </h2>

        <p className="mt-6 text-gray-700 text-lg leading-relaxed text-center max-w-4xl mx-auto">
          At Anand Celebrity Service, we stand for safety, privacy, and comfort. Our team handles every detail —
          from vehicles and hotel bookings to high-priority security support — ensuring a flawless VIP experience.
        </p>

        <p className="mt-4 text-gray-700 text-lg leading-relaxed text-center max-w-4xl mx-auto">
          With our handpicked chauffeurs, elite security personnel, and trusted hospitality partners,
          we deliver premium treatment worthy of your time, talent, and stature.
        </p>

        <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 gap-6">

          {/* Card 1 */}
          <div className="bg-white p-6 shadow-md rounded-xl border-l-4 border-blue-600 transition-all duration-300 hover:shadow-blue-300 hover:-translate-y-2">
            <h4 className="text-xl font-semibold text-blue-600">Trusted for Privacy</h4>
            <p className="mt-2 text-gray-600">Every movement is discreet and secure.</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 shadow-md rounded-xl border-l-4 border-yellow-500 transition-all duration-300 hover:shadow-yellow-300 hover:-translate-y-2">
            <h4 className="text-xl font-semibold text-yellow-600">Reliable Logistics</h4>
            <p className="mt-2 text-gray-600">Our backend team handles everything flawlessly.</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 shadow-md rounded-xl border-l-4 border-red-500 transition-all duration-300 hover:shadow-red-300 hover:-translate-y-2">
            <h4 className="text-xl font-semibold text-red-600">Elite Protection</h4>
            <p className="mt-2 text-gray-600">PSOs, bouncers, and gunmen at your service.</p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-6 shadow-md rounded-xl border-l-4 border-indigo-500 transition-all duration-300 hover:shadow-indigo-300 hover:-translate-y-2">
            <h4 className="text-xl font-semibold text-indigo-600">Top-Class Comfort</h4>
            <p className="mt-2 text-gray-600">5-star stays, premium cars, and smooth travel.</p>
          </div>

          {/* Card 5 */}
          <div className="bg-white p-6 shadow-md rounded-xl border-l-4 border-green-500 transition-all duration-300 hover:shadow-green-300 hover:-translate-y-2">
            <h4 className="text-xl font-semibold text-green-600">Dedicated Support</h4>
            <p className="mt-2 text-gray-600">We stay connected with you 24/7.</p>
          </div>

          {/* Card 6 */}
          <div className="bg-white p-6 shadow-md rounded-xl border-l-4 border-orange-500 transition-all duration-300 hover:shadow-orange-300 hover:-translate-y-2">
            <h4 className="text-xl font-semibold text-orange-600">Client-First Approach</h4>
            <p className="mt-2 text-gray-600">Your comfort and security come above all.</p>
          </div>

        </div>
      </section>
    </div>
  );
}
