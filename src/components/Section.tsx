
import React from 'react';
import AnimatedTransition from './AnimatedTransition';

interface InfoCardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  accent?: boolean;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, children, className = "", accent = false }) => {
  return (
    <div className={`bg-gray-50 p-5 rounded-xl ${accent ? 'border-l-4 border-primary' : ''} ${className}`}>
      <h4 className="font-medium mb-2 text-gray-800">{title}</h4>
      {children}
    </div>
  );
};

interface SectionProps {
  id: string;
  title: string;
  isActive: boolean;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, isActive, children }) => {
  return (
    <AnimatedTransition show={isActive} type="fade" duration={400}>
      {isActive && (
        <div id={id}>
          <h2 className="text-2xl font-semibold mb-6 text-gray-900">{title}</h2>
          {children}
        </div>
      )}
    </AnimatedTransition>
  );
};

export { Section, InfoCard };
