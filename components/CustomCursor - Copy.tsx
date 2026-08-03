
import React, { useEffect, useRef } from 'react';

const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const outlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (dotRef.current && outlineRef.current) {
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top = `${e.clientY}px`;
        
        // Slightly delayed follow for the outline
        outlineRef.current.style.left = `${e.clientX}px`;
        outlineRef.current.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot -translate-x-1/2 -translate-y-1/2" />
      <div ref={outlineRef} className="cursor-outline -translate-x-1/2 -translate-y-1/2" />
    </>
  );
};

export default CustomCursor;
