import React, { useEffect, useRef, useLayoutEffect, useMemo } from 'react';
import gsap from 'gsap';

const InfiniteScroller = ({ children, direction = 'left', speed = 50, className = '' }) => {
  const scrollerRef = useRef(null);
  const contentRef = useRef(null);
  const animationRef = useRef(null);
  const isVisibleRef = useRef(false);
  const isInitializedRef = useRef(false);

  // Memoize children to prevent unnecessary re-renders
  const memoizedChildren = useMemo(() => children, [children]);

  useLayoutEffect(() => {
    const scroller = scrollerRef.current;
    const content = contentRef.current;
    
    if (!scroller || !content || isInitializedRef.current) return;

    // Mark as initialized to prevent re-runs
    isInitializedRef.current = true;

    // Wait for images to load before calculating width
    const images = content.querySelectorAll('img');
    const imagePromises = Array.from(images).map(img => {
      if (img.complete) return Promise.resolve();
      return new Promise(resolve => {
        img.onload = resolve;
        img.onerror = resolve;
      });
    });

    Promise.all(imagePromises).then(() => {
      // Get content width after images load
      const contentWidth = content.scrollWidth / 2; // Divided by 2 since we duplicate
      
      // Set initial position based on direction
      const startX = direction === 'left' ? 0 : -contentWidth;
      const endX = direction === 'left' ? -contentWidth : 0;
      
      // Calculate duration based on content width and speed
      const duration = contentWidth / speed;

      // Set initial position immediately
      gsap.set(content, { 
        x: startX, 
        force3D: true,
        willChange: 'transform'
      });

      // Create the infinite scroll animation (paused initially)
      animationRef.current = gsap.to(content, {
        x: endX,
        duration: duration,
        ease: 'none',
        repeat: -1,
        force3D: true,
        paused: true, // Start paused, will play when visible
      });

      // Start animation if already visible
      if (isVisibleRef.current && animationRef.current) {
        animationRef.current.play();
      }
    });

    // Intersection Observer - only animate when in viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          isVisibleRef.current = entry.isIntersecting;
          if (animationRef.current) {
            if (entry.isIntersecting) {
              animationRef.current.play();
            } else {
              animationRef.current.pause();
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: '100px' }
    );

    observer.observe(scroller);

    // Pause on hover with smooth transition
    const handleMouseEnter = () => {
      if (animationRef.current) {
        gsap.to(animationRef.current, { timeScale: 0, duration: 0.3, ease: 'power2.out' });
      }
    };

    const handleMouseLeave = () => {
      if (animationRef.current && isVisibleRef.current) {
        gsap.to(animationRef.current, { timeScale: 1, duration: 0.3, ease: 'power2.in' });
      }
    };

    scroller.addEventListener('mouseenter', handleMouseEnter);
    scroller.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      if (animationRef.current) {
        animationRef.current.kill();
      }
      observer.disconnect();
      scroller.removeEventListener('mouseenter', handleMouseEnter);
      scroller.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [direction, speed]);

  return (
    <div 
      ref={scrollerRef} 
      className={`gsap-scroller-container ${className}`}
      style={{
        overflow: 'hidden',
        position: 'relative',
        width: '100%',
        contain: 'layout style paint',
      }}
    >
      <div 
        ref={contentRef} 
        className="gsap-scroller-content"
        style={{
          display: 'flex',
          gap: '28px',
          width: 'max-content',
          backfaceVisibility: 'hidden',
          perspective: 1000,
          transform: 'translateZ(0)',
        }}
      >
        {memoizedChildren}
        {/* Duplicate for seamless loop */}
        {memoizedChildren}
      </div>
    </div>
  );
};

export default InfiniteScroller;
