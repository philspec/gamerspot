'use client';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import React, { useState } from 'react';

const animations = {
  slideRight: {
    hidden: { opacity: 0, x: -100 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  },
  scaleUp: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  },
  fadeRotate: {
    hidden: { opacity: 0, rotate: -10 },
    visible: { 
      opacity: 1, 
      rotate: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  },
  slideUp: {
    hidden: { opacity: 0, y: 100 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  },
  flipIn: {
    hidden: { opacity: 0, rotateY: 90 },
    visible: { 
      opacity: 1, 
      rotateY: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  },
  pulseScale: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: [1, 1.05, 1],
      transition: { 
        duration: 1,
        times: [0, 0.5, 1],
        ease: "easeOut"
      }
    }
  }
};

const GameSection = ({ title, content, image, backgroundColor, animation = "slideRight" }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, threshold: 0.3 });
  const [imageLoading, setImageLoading] = useState(true);

  const selectedAnimation = animations[animation] || animations.slideRight;

  return (
    <motion.section
      ref={ref}
      variants={selectedAnimation}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="game-section"
      style={{ backgroundColor }}
    >
      <motion.div 
        className="section-content"
        variants={selectedAnimation}
      >
        <motion.h2 
          className="section-title"
          variants={selectedAnimation}
        >
          {title}
        </motion.h2>
        <motion.p 
          className="section-description"
          variants={selectedAnimation}
        >
          {content}
        </motion.p>
        <motion.button
          className="section-cta"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Learn More
        </motion.button>
      </motion.div>

      <motion.div 
        variants={selectedAnimation}
        className={`section-image-container ${imageLoading ? 'image-loading' : ''}`}
      >
        <Image 
          src={image}
          alt={title}
          width={1920}
          height={1080}
          className="section-image"
          priority={true}
          onLoadingComplete={() => setImageLoading(false)}
          quality={100}
        />
      </motion.div>
    </motion.section>
  );
};

export default GameSection; 