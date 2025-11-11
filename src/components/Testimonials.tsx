"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "The Echoes",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200",
    quote: "Went from 20 people to selling out The Zoo. Swash knows the scene.",
    color: "dirty-orange",
  },
  {
    name: "Marcus Stone",
    role: "Black Bear Lodge",
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200",
    quote: "Every lineup is gold. They get what our crowd wants.",
    color: "lime-green",
  },
  {
    name: "Jade Morrison",
    role: "Solo Artist",
    image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=200",
    quote: "They helped me find my sound and build a real touring strategy.",
    color: "neon-cyan",
  },
  {
    name: "Tom Bradford",
    role: "Voltage (Drummer)",
    image: "https://images.pexels.com/photos/1484794/pexels-photo-1484794.jpeg?auto=compress&cs=tinysrgb&w=200",
    quote: "Interstate tour was seamless. Every venue perfect, zero stress.",
    color: "neon-magenta",
  },
  {
    name: "Emily Rodriguez",
    role: "Event Coordinator",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=200",
    quote: "Always nail the vibe. No other agency comes close.",
    color: "dirty-orange",
  },
  {
    name: "Alex Turner",
    role: "Neon Skies",
    image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=200",
    quote: "They're fans of the music first. Makes all the difference.",
    color: "lime-green",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" className="py-16 sm:py-24 relative overflow-hidden bg-black border-t-4 border-neon-cyan/30">
      {/* Gritty texture */}
      <div className="absolute inset-0 z-0 opacity-5" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 30px, rgba(255,255,255,.05) 30px, rgba(255,255,255,.05) 60px)' }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-black border-2 border-neon-cyan text-neon-cyan text-xs font-black uppercase tracking-widest mb-6">
            // Word on the Street //
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase mb-4 graffiti-shadow">
            <span className="text-neon-cyan">Real</span>{" "}
            <span className="text-foreground">Talk</span>
          </h2>
          <p className="text-base sm:text-lg text-foreground/60 font-medium max-w-2xl">
            From the artists and venues who work with us.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className={`group relative p-6 bg-black border-4 border-${testimonial.color} transition-all duration-200 transform hover:scale-102`}
              style={{ boxShadow: '5px 5px 0px 0px rgba(0, 0, 0, 0.8)' }}
            >
              {/* Quote marks - graffiti style */}
              <div className="absolute top-4 left-4 text-6xl font-black opacity-10">
                <span className={`text-${testimonial.color}`}>"</span>
              </div>

              <div className="relative z-10">
                {/* Avatar & Info */}
                <div className="flex items-center gap-3 mb-5">
                  <div className={`relative w-12 h-12 overflow-hidden border-2 border-${testimonial.color}`}>
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover grayscale"
                      sizes="48px"
                    />
                  </div>
                  <div>
                    <h4 className="font-black text-foreground uppercase text-sm">{testimonial.name}</h4>
                    <p className={`text-xs text-${testimonial.color} font-bold uppercase`}>
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                {/* Quote */}
                <p className="text-foreground/80 font-medium text-sm leading-relaxed">
                  "{testimonial.quote}"
                </p>
              </div>
              
              {/* Corner accent */}
              <div className={`absolute bottom-0 right-0 w-4 h-4 bg-${testimonial.color}`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}