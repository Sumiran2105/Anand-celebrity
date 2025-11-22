import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import FleetPreview from "../components/FleetPreview";
import Timeline from "../components/Timeline";
import Testimonials from "../components/Testimonials";
export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <FleetPreview />
      <Timeline />
      <Testimonials />
      
      {/* Add more sections later */}
      {/* Fleet preview */}
      {/* Security team preview */}
      {/* Timeline */}
      {/* Testimonials */}
    </div>
  );
}
