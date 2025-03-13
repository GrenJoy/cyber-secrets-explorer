
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";

interface AnimatedTransitionProps {
  show: boolean;
  children: React.ReactNode;
  className?: string;
  duration?: number;
  type?: 'fade' | 'slide' | 'scale' | 'blur';
}

const AnimatedTransition: React.FC<AnimatedTransitionProps> = ({
  show,
  children,
  className,
  duration = 300,
  type = 'fade'
}) => {
  const [shouldRender, setShouldRender] = useState(show);

  useEffect(() => {
    if (show) setShouldRender(true);
    
    let timer: NodeJS.Timeout;
    if (!show && shouldRender) {
      timer = setTimeout(() => setShouldRender(false), duration);
    }
    
    return () => clearTimeout(timer);
  }, [show, duration, shouldRender]);

  if (!shouldRender) return null;

  const animations = {
    fade: { 
      enter: 'animate-fade-in',
      exit: 'animate-fade-out'
    },
    slide: {
      enter: 'animate-slide-in',
      exit: 'animate-slide-out'
    },
    scale: {
      enter: 'animate-scale-in',
      exit: 'animate-fade-out'
    },
    blur: {
      enter: 'animate-blur-in',
      exit: 'animate-fade-out'
    }
  };

  const animationClass = show ? animations[type].enter : animations[type].exit;

  return (
    <div 
      className={cn(animationClass, className)}
      style={{ animationDuration: `${duration}ms` }}
    >
      {children}
    </div>
  );
};

export default AnimatedTransition;
