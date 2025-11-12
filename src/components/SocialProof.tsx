"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Users, Zap, TrendingUp } from "lucide-react";

const stats = [
  {
    icon: Zap,
    value: "1000+",
    label: "Shows",
    color: "text-dirty-orange",
    rotation: "-3deg",
  },
  {
    icon: Users,
    value: "2000+",
    label: "Artists",
    color: "text-lime-green",
    rotation: "2deg",
  },
  {
    icon: Star,
    value: "20+",
    label: "Venues",
    color: "text-neon-magenta",
    rotation: "-1deg",
  },
  {
    icon: TrendingUp,
    value: "5 Yrs",
    label: "Experience",
    color: "text-neon-cyan",
    rotation: "3deg",
  },
];

export default function SocialProof() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-12 sm:py-16 bg-black border-y-4 border-dirty-orange/50 relative overflow-hidden">
      {/* Graffiti-style background texture */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.03) 10px, rgba(255,255,255,.03) 20px)",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-left md:text-center mb-10"
        >
          <p className="text-xs text-dirty-orange font-black uppercase tracking-widest mb-3">
            // TRACK RECORD
          </p>
          <h2 className="text-3xl sm:text-4xl font-black uppercase text-foreground graffiti-shadow">
            The Real Deal
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotate: 0 }}
              className="flex flex-col items-center text-center p-5 bg-black border-4 border-current transform transition-all"
              style={{
                transform: `rotate(${stat.rotation})`,
                boxShadow: "4px 4px 0px 0px rgba(0, 0, 0, 0.8)",
              }}
            >
              <stat.icon
                className={`w-8 h-8 mb-3 ${stat.color}`}
                strokeWidth={3}
              />
              <div
                className={`text-4xl sm:text-5xl font-black mb-1 ${stat.color} uppercase`}
              >
                {stat.value}
              </div>
              <div className="text-xs text-foreground/60 font-bold uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Venues - Sticker/tag style */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <p className="text-xs text-foreground/50 font-black uppercase tracking-widest mb-6">
            // Booking at //
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {[
              { name: "Tomcat", color: "dirty-orange" },
              { name: "The Empire Hotel", color: "lime-green" },
              { name: "Birdees", color: "neon-cyan" },
              { name: "Heya Bar (RIP)", color: "neon-magenta" },
              { name: "Rics Bar", color: "dirty-orange" },
              { name: "Greaser Bar", color: "lime-green" },
              { name: "Lefty's", color: "neon-cyan" },
            ].map((venue, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.05 }}
                className={`px-3 py-1.5 bg-black border-2 border-${venue.color} text-${venue.color} font-bold text-xs uppercase tracking-wide transform hover:scale-105 transition-transform cursor-default`}
              >
                {venue.name}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
