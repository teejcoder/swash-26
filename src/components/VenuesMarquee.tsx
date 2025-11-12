"use client";

import { motion } from "framer-motion";

const venues = [
  { name: "THE BRIGHTSIDE", color: "dirty-orange" },
  { name: "THE ZOO", color: "lime-green" },
  { name: "BLACK BEAR LODGE", color: "neon-cyan" },
  { name: "THE FOUNDRY", color: "neon-magenta" },
  { name: "WOOLLY MAMMOTH", color: "dirty-orange" },
  { name: "NETHERWORLD", color: "lime-green" },
  { name: "THE TRIFFID", color: "neon-cyan" },
  { name: "TOMCAT", color: "neon-magenta" },
  { name: "CROWBAR", color: "dirty-orange" },
  { name: "RICS", color: "lime-green" },
  { name: "HEYA BAR", color: "neon-cyan" },
  { name: "LEFTY'S", color: "neon-magenta" },
  { name: "EMPIRE HOTEL", color: "dirty-orange" },
  { name: "BIRDEES", color: "neon-cyan" },
  { name: "PRESS CLUB", color: "lime-green" },
];

export default function VenuesMarquee() {
  // Duplicate venues array for seamless loop
  const duplicatedVenues = [...venues, ...venues];

  return (
    <section className="py-8 bg-black border-y-4 border-dirty-orange/30 overflow-hidden relative">
      {/* Gritty texture */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,255,255,.05) 20px, rgba(255,255,255,.05) 40px)' }} />
      
      <div className="mb-4 text-center">
        <div className="inline-block px-4 py-1 bg-black border-2 border-neon-cyan text-neon-cyan text-xs font-black uppercase tracking-widest">
          ⚡ Venues Booked By Us & Friends⚡
        </div>
      </div>

      {/* Marquee Container */}
      <div className="relative">
        <motion.div
          className="flex gap-4"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {duplicatedVenues.map((venue, index) => (
            <div
              key={index}
              className={`flex-shrink-0 px-5 py-2 bg-black border-2 border-${venue.color} text-${venue.color} transform -rotate-1`}
              style={{ boxShadow: '3px 3px 0px 0px rgba(0, 0, 0, 0.8)' }}
            >
              <span className="text-sm font-black whitespace-nowrap">
                {venue.name}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Gradient Fade Edges */}
        <div className="absolute inset-y-0 left-0 w-20 sm:w-32 bg-gradient-to-r from-black to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-20 sm:w-32 bg-gradient-to-l from-black to-transparent pointer-events-none z-10" />
      </div>
    </section>
  );
}