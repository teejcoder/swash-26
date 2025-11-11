"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Instagram, Facebook, Twitter, MapPin, ArrowRight } from "lucide-react";

const socialLinks = [
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://instagram.com/swashbookings",
    color: "hover:text-neon-magenta",
  },
  {
    name: "Facebook",
    icon: Facebook,
    href: "https://facebook.com/swashbookings",
    color: "hover:text-neon-cyan",
  },
  {
    name: "Twitter",
    icon: Twitter,
    href: "https://twitter.com/swashbookings",
    color: "hover:text-neon-purple",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-20 sm:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-card/50 to-transparent" />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-cyan/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-card/50 backdrop-blur-sm border border-neon-purple/30 rounded-full text-sm font-medium text-neon-purple mb-6">
              Get In Touch
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter mb-6">
              Let's Make Some{" "}
              <span className="text-neon-cyan">Noise</span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground font-light max-w-2xl mx-auto">
              Ready to book your next show or take your music career to the next
              level? We're here to help.
            </p>
          </div>

          {/* Contact Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-card/80 to-card/50 backdrop-blur-lg border border-border/50 hover:border-neon-cyan/30 transition-all duration-300"
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 -z-10 opacity-50">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/5 via-neon-magenta/5 to-neon-purple/5 rounded-3xl" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-foreground">
                    Contact Information
                  </h3>
                  
                  {/* Email */}
                  <a
                    href="mailto:bookings@swash.com.au"
                    className="flex items-center gap-4 p-4 rounded-xl bg-background/50 hover:bg-background transition-all duration-300 group mb-4"
                  >
                    <div className="w-12 h-12 rounded-full bg-neon-cyan/10 flex items-center justify-center group-hover:bg-neon-cyan/20 transition-colors">
                      <Mail className="w-6 h-6 text-neon-cyan" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground font-light mb-1">
                        Email
                      </div>
                      <div className="text-foreground font-medium group-hover:text-neon-cyan transition-colors">
                        bookings@swash.com.au
                      </div>
                    </div>
                  </a>

                  {/* Location */}
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-background/50">
                    <div className="w-12 h-12 rounded-full bg-neon-magenta/10 flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-neon-magenta" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground font-light mb-1">
                        Location
                      </div>
                      <div className="text-foreground font-medium">
                        Fortitude Valley, Brisbane
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div>
                  <h4 className="text-sm text-muted-foreground font-light uppercase tracking-widest mb-4">
                    Follow Us
                  </h4>
                  <div className="flex gap-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className={`w-12 h-12 rounded-full bg-background/50 border border-border/50 flex items-center justify-center text-muted-foreground ${social.color} transition-all duration-300`}
                      >
                        <social.icon className="w-5 h-5" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">
                    Ready to Work Together?
                  </h3>
                  <p className="text-muted-foreground font-light leading-relaxed mb-6">
                    Whether you're an artist looking for representation, a venue
                    seeking quality acts, or an event organizer needing
                    entertainment—let's talk.
                  </p>
                </div>

                <div className="space-y-4">
                  <a
                    href="mailto:bookings@swash.com.au"
                    className="flex items-center justify-center gap-2 w-full px-8 py-4 bg-gradient-to-r from-neon-cyan to-neon-magenta text-background font-semibold rounded-full hover:shadow-lg hover:shadow-neon-cyan/50 transition-all duration-300 group"
                  >
                    Send Us an Email
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <p className="text-xs text-center text-muted-foreground font-light">
                    We typically respond within 24 hours
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Footer Note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <p className="text-sm text-muted-foreground font-light">
              Operating from the heart of Brisbane's live music scene since 2016
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-20 pt-12 border-t border-border/30"
      >
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-2xl font-black tracking-tighter">
            <span className="text-neon-cyan">SW</span>
            <span className="text-foreground">ASH</span>
          </div>
          <p className="text-sm text-muted-foreground font-light">
            © 2024 Swash Bookings. All rights reserved.
          </p>
        </div>
      </motion.footer>
    </section>
  );
}