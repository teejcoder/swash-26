"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Music, Users, Plane, Lightbulb, Radio } from "lucide-react";

const features = [
  {
    icon: Music,
    title: "Live Bookings",
    description:
      "Fortitude Valley's grittiest venues. We pack rooms with the acts people actually want to see. No filler, all killer.",
    iconColor: "text-dirty-orange",
    borderColor: "border-dirty-orange",
    rotation: "-2deg",
  },
  {
    icon: Users,
    title: "Artist Management",
    description:
      "Career guidance from people who've lived it. We help artists find their sound and build something real.",
    iconColor: "text-lime-green",
    borderColor: "border-lime-green",
    rotation: "1deg",
  },
  {
    icon: Plane,
    title: "Touring",
    description:
      "Take it interstate. We handle the logistics so you can focus on the show. Routes, venues, all sorted.",
    iconColor: "text-neon-cyan",
    borderColor: "border-neon-cyan",
    rotation: "-1deg",
  },
  {
    icon: Lightbulb,
    title: "Event Consulting",
    description:
      "Need entertainment? We match the right bands to the right crowd. Every. Single. Time.",
    iconColor: "text-neon-magenta",
    borderColor: "border-neon-magenta",
    rotation: "2deg",
  },
  {
    icon: Radio,
    title: "PA Hire",
    description:
      "Quality sound gear without the corporate markup. Reliable equipment, fair rates, done deal.",
    iconColor: "text-dirty-orange",
    borderColor: "border-dirty-orange",
    rotation: "-1deg",
  },
];

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" className="py-16 sm:py-24 relative overflow-hidden bg-black">
      {/* Gritty stripe pattern */}
      <div className="absolute inset-0 z-0 opacity-5" style={{ backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 50px, rgba(255,255,255,.05) 50px, rgba(255,255,255,.05) 100px)' }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-black border-2 border-lime-green text-lime-green text-xs font-black uppercase tracking-widest mb-6 transform -rotate-1">
            // Services //
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase mb-4 graffiti-shadow">
            <span className="text-dirty-orange">What We</span>{" "}
            <span className="text-foreground">Do</span>
          </h2>
          <p className="text-base sm:text-lg text-foreground/60 font-medium max-w-2xl">
            Real booking agency. Run by musicians. No bullshit.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, rotate: 0 }}
              className="group relative"
              style={{ transform: `rotate(${feature.rotation})` }}
            >
              <div className={`relative p-6 bg-black border-4 ${feature.borderColor} transition-all duration-200 h-full`}
                style={{ boxShadow: '5px 5px 0px 0px rgba(0, 0, 0, 0.8)' }}
              >
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-4">
                    <div className={`inline-flex p-3 bg-black border-2 ${feature.borderColor} ${feature.iconColor}`}>
                      <feature.icon className="w-7 h-7" strokeWidth={2.5} />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className={`text-2xl font-black mb-3 uppercase ${feature.iconColor} graffiti-shadow`}>
                    {feature.title}
                  </h3>
                  <p className="text-foreground/70 font-medium text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                
                {/* Grunge corner */}
                <div className={`absolute top-0 right-0 w-4 h-4 ${feature.borderColor} bg-current`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-16"
        >
          <a
            href="#contact"
            className="inline-block px-10 py-4 bg-dirty-orange text-black font-black uppercase text-lg tracking-wide transform hover:scale-105 hover:rotate-1 transition-all duration-200 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
          >
            Let's Talk
          </a>
        </motion.div>
      </div>
    </section>
  );
}