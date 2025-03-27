import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface AnimatedCubeProps {
  size?: number;
  className?: string;
  color?: string;
  speed?: number;
  wireframe?: boolean;
}

export default function AnimatedCube({
  size = 120,
  className = '',
  color = 'rgba(255, 255, 255, 0.8)',
  speed = 0.8,
  wireframe = true
}: AnimatedCubeProps) {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const animationRef = useRef<number | null>(null);
  const cubeRef = useRef<HTMLDivElement>(null);
  const isHovering = useRef(false);

  // Calculate dimensions
  const faceSize = size;
  const halfSize = faceSize / 2;
  
  // Animation loop
  useEffect(() => {
    let startTime = performance.now();
    
    const animate = (time: number) => {
      const elapsed = time - startTime;
      
      if (!isHovering.current) {
        setRotation({
          x: Math.sin(elapsed * 0.0003 * speed) * 45,
          y: Math.cos(elapsed * 0.0003 * speed) * 45
        });
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animationRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [speed]);

  // Mouse interaction
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!cubeRef.current) return;
      
      const rect = cubeRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      // Calculate angle based on mouse position relative to center
      const angleX = ((e.clientY - centerY) / (window.innerHeight / 2)) * 45;
      const angleY = ((e.clientX - centerX) / (window.innerWidth / 2)) * 45;
      
      setRotation({ x: angleX, y: angleY });
    };
    
    const handleMouseEnter = () => {
      isHovering.current = true;
    };
    
    const handleMouseLeave = () => {
      isHovering.current = false;
    };
    
    const cube = cubeRef.current;
    if (cube) {
      cube.addEventListener('mousemove', handleMouseMove);
      cube.addEventListener('mouseenter', handleMouseEnter);
      cube.addEventListener('mouseleave', handleMouseLeave);
    }
    
    return () => {
      if (cube) {
        cube.removeEventListener('mousemove', handleMouseMove);
        cube.removeEventListener('mouseenter', handleMouseEnter);
        cube.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  // Cube styles
  const cubeStyle: React.CSSProperties = {
    width: `${faceSize}px`,
    height: `${faceSize}px`,
    position: 'relative',
    transformStyle: 'preserve-3d',
    transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
  };

  // Face styles
  const facesData = [
    // front face
    { 
      transform: `translateZ(${halfSize}px)`,
      background: wireframe ? 'transparent' : color
    },
    // back face
    { 
      transform: `rotateY(180deg) translateZ(${halfSize}px)`,
      background: wireframe ? 'transparent' : color
    },
    // top face
    { 
      transform: `rotateX(90deg) translateZ(${halfSize}px)`,
      background: wireframe ? 'transparent' : color
    },
    // bottom face
    { 
      transform: `rotateX(-90deg) translateZ(${halfSize}px)`,
      background: wireframe ? 'transparent' : color
    },
    // right face
    { 
      transform: `rotateY(90deg) translateZ(${halfSize}px)`,
      background: wireframe ? 'transparent' : color
    },
    // left face
    { 
      transform: `rotateY(-90deg) translateZ(${halfSize}px)`,
      background: wireframe ? 'transparent' : color
    },
  ];

  // Common face style
  const faceStyle: React.CSSProperties = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    boxSizing: 'border-box',
    border: wireframe ? `1px solid ${color}` : 'none',
    backfaceVisibility: 'visible',
    opacity: wireframe ? 0.7 : 0.2,
  };

  // Generate cube with its faces
  return (
    <div className={`cube-container ${className}`} ref={cubeRef}>
      <motion.div 
        style={cubeStyle}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {facesData.map((face, index) => (
          <div 
            key={index} 
            style={{ ...faceStyle, ...face }}
            className="cube-face"
          />
        ))}
      </motion.div>
    </div>
  );
}