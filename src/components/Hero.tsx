
"use client";

import { motion } from "framer-motion";


export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Gritty Background with texture */}
      <div className="absolute inset-0 z-0">
        {/* Base dark background */}
        <div className="absolute inset-0 bg-black" />
        
        {/* Noise texture overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }} />
        
        {/* Harsh spotlight effects - like stage lights */}
        <motion.div
          className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-neon-cyan/30 blur-[120px]"
          animate={{
            opacity: [0.2, 0.4, 0.2],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-neon-magenta/25 blur-[100px]"
          animate={{
            opacity: [0.15, 0.35, 0.15],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        
        {/* Grungy vignette */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black opacity-60" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto text-left md:text-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 md:mb-6"
          >
            <span className="inline-block px-5 py-2 bg-neon-cyan/10 backdrop-blur-sm border-2 border-neon-cyan/50 text-sm font-bold text-neon-cyan uppercase tracking-wider transform -rotate-1 hover:rotate-0 transition-transform">
              ⚡ Live From FV ⚡
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-black mb-6 leading-[0.9] uppercase"
            style={{ 
              textShadow: '0 0 40px rgba(0, 255, 255, 0.5), 0 0 80px rgba(255, 0, 255, 0.3), 4px 4px 0px rgba(0, 0, 0, 0.8)',
              letterSpacing: '-0.02em'
            }}
          >
            <span className="block text-neon-cyan" style={{ transform: 'skew(-2deg)' }}>SWASH</span>
            <span className="block text-neon-magenta mt-2" style={{ transform: 'skew(1deg)' }}>AGENCY</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-10"
          >
            <p className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground/90 max-w-4xl mx-auto leading-tight uppercase tracking-tight">
              Fortitude Valley / Live Shows / Artist Management
            </p>
            <p className="text-base sm:text-lg text-foreground/60 max-w-2xl mx-auto mt-4 font-medium">
              Run by musicians who live the scene.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center md:justify-center gap-4 mb-16"
          >
            <a
              href="#contact"
              className="w-full sm:w-auto px-10 py-5 bg-neon-cyan text-black font-black text-lg uppercase tracking-wide transform hover:scale-105 hover:rotate-1 transition-all duration-200 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
              style={{ clipPath: 'polygon(0 0, 95% 0, 100% 10%, 100% 100%, 5% 100%, 0 90%)' }}
            >
              Book A Show
            </a>
            <a
              href="#showcase"
              className="w-full sm:w-auto px-10 py-5 bg-transparent text-neon-magenta font-black text-lg uppercase tracking-wide border-4 border-neon-magenta transform hover:scale-105 hover:-rotate-1 hover:bg-neon-magenta/20 transition-all duration-200 shadow-[4px_4px_0px_0px_rgba(255,0,255,0.5)]"
            >
              See Shows
            </a>
          </motion.div>

          {/* Stats - Sticker/Badge style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
          >
            {[
              { value: "500+", label: "Shows", color: "neon-cyan", rotation: "-2deg" },
              { value: "100+", label: "Artists", color: "neon-magenta", rotation: "1deg" },
              { value: "20+", label: "Venues", color: "neon-purple", rotation: "-1deg" },
              { value: "8+", label: "Years", color: "neon-cyan", rotation: "2deg" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, rotate: 0 }}
                className={`relative p-6 bg-black border-4 border-${stat.color} text-center transform hover:z-10 transition-all`}
                style={{ 
                  transform: `rotate(${stat.rotation})`,
                  boxShadow: `4px 4px 0px 0px hsl(var(--${stat.color}))`,
                }}
              >
                <div className={`text-4xl md:text-5xl font-black text-${stat.color} mb-1 uppercase`}>
                  {stat.value}
                </div>
                <div className="text-xs text-foreground/70 font-bold uppercase tracking-widest">
                  {stat.label}
                </div>
                {/* Grunge corner accent */}
                <div className={`absolute top-0 right-0 w-3 h-3 bg-${stat.color}`} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Gritty bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/50 to-transparent z-10 pointer-events-none" />
    </section>
  );
}