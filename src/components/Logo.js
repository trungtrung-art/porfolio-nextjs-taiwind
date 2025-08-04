import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { motion } from 'framer-motion';

const MotionLink = motion(Link);

function Logo(props) {
  // Biến thể động cho hiệu ứng hover
  const logoVariants = {
    hover: {
      scale: 1.1,
      rotate: 360,
      background: [
        'linear-gradient(45deg, #121212, #1d2448)',
        'linear-gradient(45deg, #ff6b6b, #4ecdc4)',
        'linear-gradient(45deg, #ffe66d, #ff9f43)',
        'linear-gradient(45deg, #121212, #1d2448)',
      ],
      boxShadow: '0 0 15px rgba(255, 255, 255, 0.5)',
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatType: 'loop',
        ease: 'easeInOut',
      },
    },
    initial: {
      scale: 1,
      rotate: 0,
      boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)',
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div className="flex items-center justify-center mt-4">
      <MotionLink
        href="/"
        className="relative w-20 h-20 bg-dark text-light flex items-center justify-center rounded-full text-4xl font-extrabold border-4 border-solid border-light/20 dark:border-light/40 overflow-hidden"
        variants={logoVariants}
        initial="initial"
        whileHover="hover"
      >
        <span className="relative z-10">TT</span>
        {/* Hiệu ứng gradient nền động */}
        <motion.div
          className="absolute inset-0 rounded-full"
          variants={{
            hover: {
              background: [
                'radial-gradient(circle, rgba(255,107,107,0.8), rgba(78,205,196,0.8))',
                'radial-gradient(circle, rgba(255,230,109,0.8), rgba(255,159,67,0.8))',
                'radial-gradient(circle, rgba(18,18,18,0.8), rgba(29,36,72,0.8))',
              ],
              transition: {
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
              },
            },
          }}
        />
      </MotionLink>
    </div>
  );
}

Logo.propTypes = {};

export default Logo;
