import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
    },
  };

  const linkVariants = {
    idle: { scale: 1 },
    hover: {
      scale: 1.05,
      color: '#60a5fa',
      transition: { duration: 0.3 },
    },
  };

  const socialVariants = {
    idle: { scale: 1 },
    hover: {
      scale: 1.2,
      color: '#2563eb',
      transition: { duration: 0.3 },
    },
  };

  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="bg-blue-950 text-gray-300 font-poppins py-12 px-4 sm:px-6 lg:px-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      aria-label="Website Footer"
    >
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12">
        {/* Navigation Links */}
        <motion.div className="space-y-4 text-center sm:text-left" variants={containerVariants}>
          <motion.h3 className="text-lg sm:text-xl font-semibold text-blue-400" variants={itemVariants}>
            Quick Links
          </motion.h3>
          <ul className="space-y-2">
            {['Home','About','Our Services','Contact'].map((link, i) => (
              <motion.li key={i} variants={itemVariants}>
                <motion.a
                  href={`#${link.toLowerCase()}`}
                  className="text-sm sm:text-base hover:text-blue-400 transition-colors"
                  variants={linkVariants}
                  initial="idle"
                  whileHover="hover"
                >
                  {link}
                </motion.a>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Contact Information */}
        <motion.div className="space-y-4 text-center sm:text-left" variants={containerVariants}>
          <motion.h3 className="text-lg sm:text-xl font-semibold text-blue-400" variants={itemVariants}>
            Contact Us
          </motion.h3>
          <motion.ul className="space-y-2 text-sm sm:text-base" variants={containerVariants}>
            <motion.li variants={itemVariants}>
              <a href="mailto:info@uxinity.com" className="hover:text-blue-400 transition-colors">
                info@uxinity.com
              </a>
            </motion.li>
            <motion.li variants={itemVariants}>
              <a href="tel:+1234567890" className="hover:text-blue-400 transition-colors">
                +1 (234) 567-890
              </a>
            </motion.li>
            <motion.li variants={itemVariants}>
              <span>123 Innovation St, Tech City, TC 12345</span>
            </motion.li>
          </motion.ul>
        </motion.div>

        {/* Social Media */}
        <motion.div className="space-y-4 text-center sm:text-left" variants={containerVariants}>
          <motion.h3 className="text-lg sm:text-xl font-semibold text-blue-400" variants={itemVariants}>
            Follow Us
          </motion.h3>
          <motion.div className="flex justify-center sm:justify-start gap-4" variants={containerVariants}>
            {[
              { name: 'Twitter', href: 'https://x.com/uxinity', icon: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z' },
              { name: 'LinkedIn', href: 'https://linkedin.com/company/uxinity', icon: 'M16 2H4a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2zM6 14V9h2v5H6zm1-7a1 1 0 110-2 1 1 0 010 2zm7 7h-2V9h2v5zm0-7a1 1 0 110-2 1 1 0 010 2z' },
              { name: 'GitHub', href: 'https://github.com/uxinity', icon: 'M9 2a7 7 0 00-2.2 13.6c.3.1.4 0 .4-.3v-1.2c-1.5.3-1.8-.6-1.8-.6-.2-.5-.6-.6-.6-.6-.5-.3 0-.3 0-.3.6 0 .9.4 1 .6.6.9 1.5.7 1.9.5 0-.4.2-.7.5-1-1.8-.2-3.7-.9-3.7-4 0-.9.3-1.6.8-2.2-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8a7.7 7.7 0 014 0c1.5-1 2.2-.8 2.2-.8.5 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.2 0 3.1-1.9 3.8-3.7 4 .3.3.5.7.5 1.4v2.1c0 .3.1.4.4.3A7 7 0 009 2z' },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300"
                variants={socialVariants}
                initial="idle"
                whileHover="hover"
                aria-label={`Follow on ${social.name}`}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d={social.icon} />
                </svg>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Copyright */}
      <motion.div
        className="mt-8 pt-8 border-t border-blue-400/30 text-center text-sm sm:text-base"
        variants={itemVariants}
      >
        <p>&copy; {currentYear} UXinity. All rights reserved.</p>
      </motion.div>

      <style>{`
        footer a:hover {
          text-decoration: none;
        }
      `}</style>
    </motion.footer>
  );
};

export default Footer;