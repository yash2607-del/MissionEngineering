import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const InfiniteScroller = ({ children, direction = 'left', speed = 50, className = '' }) => {
  const scrollerRef = useRef(null);
  const contentRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const scroller = scrollerRef.current;
    const content = contentRef.current;
    
    if (!scroller || !content) return;

    // Clone content for seamless loop
    const contentWidth = content.scrollWidth;
    
    // Set initial position based on direction
    const startX = direction === 'left' ? 0 : -contentWidth / 2;
    const endX = direction === 'left' ? -contentWidth / 2 : 0;
    
    // Calculate duration based on content width and speed
    const duration = contentWidth / speed;

    // Kill any existing animation
    if (animationRef.current) {
      animationRef.current.kill();
    }

    // Set initial position
    gsap.set(content, { x: startX, force3D: true });

    // Create the infinite scroll animation
    animationRef.current = gsap.to(content, {
      x: endX,
      duration: duration,
      ease: 'none',
      repeat: -1,
      force3D: true,
      overwrite: true,
    });

    // Pause on hover
    const handleMouseEnter = () => {
      gsap.to(animationRef.current, { timeScale: 0, duration: 0.5, ease: 'power2.out' });
    };

    const handleMouseLeave = () => {
      gsap.to(animationRef.current, { timeScale: 1, duration: 0.5, ease: 'power2.in' });
    };

    scroller.addEventListener('mouseenter', handleMouseEnter);
    scroller.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      if (animationRef.current) {
        animationRef.current.kill();
      }
      scroller.removeEventListener('mouseenter', handleMouseEnter);
      scroller.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [direction, speed, children]);

  return (
    <div 
      ref={scrollerRef} 
      className={`gsap-scroller-container ${className}`}
      style={{
        overflow: 'hidden',
        position: 'relative',
        width: '100%',
      }}
    >
      <div 
        ref={contentRef} 
        className="gsap-scroller-content"
        style={{
          display: 'flex',
          gap: '28px',
          width: 'max-content',
          willChange: 'transform',
        }}
      >
        {children}
        {/* Duplicate children for seamless loop */}
        {children}
      </div>
    </div>
  );
};

export default InfiniteScroller;
