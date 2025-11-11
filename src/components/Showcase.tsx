"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Valley Indie Night",
    category: "Weekly Showcase",
    image: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Emerging local talent every Thursday",
  },
  {
    title: "Interstate Tour",
    category: "National Circuit",
    image: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "5-city tour featuring Brisbane's finest",
  },
  {
    title: "Festival Stage",
    category: "Large Format",
    image: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Curated lineup for 5000+ crowd",
  },
  {
    title: "Acoustic Sessions",
    category: "Intimate Series",
    image: "https://images.pexels.com/photos/1047442/pexels-photo-1047442.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Stripped-back performances in unique venues",
  },
  {
    title: "Electronic Nights",
    category: "Club Series",
    image: "https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Underground sounds and boundary-pushing beats",
  },
  {
    title: "Rock Showcase",
    category: "Monthly Event",
    image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "High-energy live performances every month",
  },
];

export default function Showcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="showcase" className="py-16 sm:py-24 bg-black relative overflow-hidden">
      {/* Grungy background */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 100px, rgba(255,255,255,.05) 100px, rgba(255,255,255,.05) 200px)' }} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-black border-2 border-neon-magenta text-neon-magenta text-xs font-black uppercase tracking-widest mb-6 transform rotate-1">
            // Past Shows //
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase mb-4 graffiti-shadow">
            <span className="text-lime-green">The</span>{" "}
            <span className="text-foreground">Lineup</span>
          </h2>
          <p className="text-base sm:text-lg text-foreground/60 font-medium max-w-2xl">
            Dive bars to festival stages. We book shows that people actually show up to.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group relative overflow-hidden bg-black border-4 border-foreground/20 hover:border-dirty-orange transition-all duration-300 cursor-pointer"
              style={{ boxShadow: '6px 6px 0px 0px rgba(0, 0, 0, 0.8)' }}
            >
              {/* Image */}
              <div className="relative h-56 sm:h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                
                {/* Tag overlay */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={
                    hoveredIndex === index
                      ? { opacity: 1, x: 0 }
                      : { opacity: 0, x: -10 }
                  }
                  transition={{ duration: 0.3 }}
                  className="absolute top-4 left-4 px-3 py-1 bg-dirty-orange border-2 border-black text-black text-xs font-black uppercase"
                >
                  LIVE
                </motion.div>
              </div>

              {/* Content */}
              <div className="relative p-5 bg-black">
                <span className="inline-block px-3 py-1 bg-black border-2 border-lime-green text-lime-green text-[10px] font-black uppercase mb-3">
                  {project.category}
                </span>
                <h3 className="text-xl font-black mb-2 text-foreground uppercase group-hover:text-dirty-orange transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-foreground/60 font-medium">
                  {project.description}
                </p>
              </div>

              {/* Corner accent */}
              <div className="absolute bottom-0 right-0 w-6 h-6 bg-dirty-orange" />
            </motion.div>
          ))}
        </div>

        {/* View More CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="inline-block px-10 py-4 bg-transparent border-4 border-lime-green text-lime-green hover:bg-lime-green/10 font-black uppercase text-lg tracking-wide transform hover:scale-105 transition-all duration-200 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
          >
            More Shows
          </a>
        </motion.div>
      </div>
    </section>
  );
}