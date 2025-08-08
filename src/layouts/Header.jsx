import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Logo from '../assets/Logo.png'; // Your actual logo path

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Our Services', href: '#services' },
    // { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  const linkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
    hover: {
      scale: 1.05,
      color: '#facc15',
      transition: { duration: 0.3 },
    },
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 90,
        damping: 18,
      },
    },
    hover: {
      scale: 1.03,
      transition: { duration: 0.2 },
    },
  };

  const ctaVariants = {
    idle: { scale: 1 },
    hover: {
      scale: 1.05,
      backgroundColor: '#facc15',
      color: '#1e293b',
      boxShadow: '0 6px 15px rgba(250, 204, 21, 0.4)',
      transition: { duration: 0.3 },
    },
    tap: { scale: 0.95, transition: { duration: 0.2 } },
  };

  const menuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.5,
        when: 'beforeChildren',
        staggerChildren: 0.1,
      },
    },
  };

  const handleButtonClick = (e) => {
    const button = e.currentTarget;
    const ripple = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left - radius;
    const y = e.clientY - rect.top - radius;

    ripple.style.width = ripple.style.height = `${diameter}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.className =
      'absolute bg-white/20 rounded-full scale-0 animate-ripple pointer-events-none';
    button.appendChild(ripple);

    setTimeout(() => ripple.remove(), 600);
  };

  return (
    <motion.header
      className="sticky top-0 z-50 bg-[#1e293b] text-white shadow-lg font-poppins"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-6 sm:px-12 lg:px-20 py-4 flex items-center justify-between">
        <motion.div
          variants={logoVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
          <a href="/" className="flex items-center">
            <img
              src={Logo}
              alt="UXinity Logo"
              className="h-20 w-20 sm:h-16 sm:w-16 object-contain"
              loading="lazy"
            />
          </a>
        </motion.div>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white hover:text-[#facc15] transition"
              variants={linkVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              {link.name}
            </motion.a>
          ))}
        </nav>

     <motion.button
  className="hidden md:block relative px-6 py-3 text-white font-semibold rounded-md overflow-hidden shadow-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 focus:outline-none"
  variants={ctaVariants}
  initial="idle"
  whileHover="hover"
  whileTap="tap"
  onClick={handleButtonClick}
>
  <span className="relative z-10">Get Started</span>

  {/* Glow Border Animation */}
  <span className="absolute inset-0 rounded-md border border-white/20 opacity-20 blur-md"></span>

  {/* Ripple Effect */}
  <span className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-20 transition-opacity duration-300 rounded-md" />

  {/* Pulse Animation on Hover */}
  <motion.span
    className="absolute inset-0 rounded-md"
    initial={{ opacity: 0 }}
    whileHover={{ opacity: 0.2, scale: 1.05 }}
    transition={{ duration: 0.4 }}
    style={{ background: 'radial-gradient(circle at center, rgba(255,255,255,0.2), transparent)' }}
  />
</motion.button>


        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
        >
          <motion.svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            animate={{ rotate: isMenuOpen ? 90 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isMenuOpen
                  ? 'M6 18L18 6M6 6l12 12'
                  : 'M4 6h16M4 12h16M4 18h16'
              }
            />
          </motion.svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      <motion.nav
        className="md:hidden bg-[#1e293b]"
        variants={menuVariants}
        initial="hidden"
        animate={isMenuOpen ? 'visible' : 'hidden'}
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white hover:text-[#facc15]"
              variants={linkVariants}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </motion.a>
          ))}
         <motion.button
  className="relative w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white px-5 py-3 rounded-md font-semibold shadow-xl overflow-hidden focus:outline-none"
  variants={ctaVariants}
  initial="idle"
  whileHover="hover"
  whileTap="tap"
  onClick={(e) => {
    handleButtonClick(e);
    setIsMenuOpen(false);
  }}
>
  <span className="relative z-10">Get Started</span>

  {/* Glowing border animation */}
  <span className="absolute inset-0 rounded-md border border-white/20 opacity-20 blur-md"></span>

  {/* Ripple overlay on hover */}
  <span className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-20 transition-opacity duration-300 rounded-md" />

  {/* Pulse light animation on hover */}
  <motion.span
    className="absolute inset-0 rounded-md"
    initial={{ opacity: 0 }}
    whileHover={{ opacity: 0.2, scale: 1.05 }}
    transition={{ duration: 0.4 }}
    style={{ background: 'radial-gradient(circle at center, rgba(255,255,255,0.2), transparent)' }}
  />
</motion.button>

        </div>
      </motion.nav>

      {/* Ripple Effect Animation */}
      <style>{`
        .animate-ripple {
          animation: ripple 0.6s linear;
        }
        @keyframes ripple {
          to {
            transform: scale(4);
            opacity: 0;
          }
        }
      `}</style>
    </motion.header>
  );
};

export default Header;
