import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    // Update mouse position
    window.addEventListener('mousemove', updateMousePosition);

    // Add hover effects for interactive elements
    const interactiveElements = document.querySelectorAll(
      'a, button, input, textarea, [role="button"], .hover-cursor'
    );

    interactiveElements.forEach(element => {
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
    });

    // Add click effects
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      
      interactiveElements.forEach(element => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  // Don't render on mobile devices
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );

  if (isMobile) return null;

  return (
    <>
      {/* Main Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          backgroundColor: isHovering ? '#dc2626' : '#ffffff',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
        }}
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          scale: isClicking ? 0.5 : isHovering ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      />

      {/* Cursor Glow Effect */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9998] opacity-30"
        style={{
          background: `radial-gradient(circle, ${
            isHovering ? 'rgba(220, 38, 38, 0.6)' : 'rgba(185, 28, 28, 0.4)'
          }, transparent)`,
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
        }}
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          scale: isClicking ? 0.8 : isHovering ? 2 : 1.2,
        }}
        transition={{
          type: "spring",
          stiffness: 250,
          damping: 30,
          mass: 0.8,
        }}
      />

      {/* Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 pointer-events-none z-[9997] border border-white/20 rounded-full"
        style={{
          transform: 'translate(-50%, -50%)',
        }}
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          scale: isClicking ? 0.6 : isHovering ? 2.5 : 1.5,
          opacity: isHovering ? 0.8 : 0.3,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 25,
          mass: 1,
        }}
      />

      {/* Trail Effect */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 pointer-events-none z-[9996] bg-red-500 rounded-full opacity-60"
        style={{
          transform: 'translate(-50%, -50%)',
        }}
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20,
          mass: 1.5,
        }}
      />

      {/* Particle Effect on Click */}
      {isClicking && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-[9995]"
          style={{
            transform: 'translate(-50%, -50%)',
          }}
          initial={{
            x: mousePosition.x,
            y: mousePosition.y,
            scale: 0,
          }}
          animate={{
            x: mousePosition.x,
            y: mousePosition.y,
            scale: [0, 1.5, 0],
            opacity: [0, 1, 0],
          }}
          transition={{ duration: 0.4 }}
        >
          <div className="w-16 h-16 border-2 border-red-500 rounded-full"></div>
        </motion.div>
      )}


    </>
  );
};

export default CustomCursor;