
import React from 'react';
import AnimatedTransition from './AnimatedTransition';

interface SidebarNavProps {
  sections: Record<string, string>;
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const SidebarNav: React.FC<SidebarNavProps> = ({ 
  sections, 
  activeSection, 
  setActiveSection 
}) => {
  return (
    <div className="w-72 flex-shrink-0">
      <div className="section-card overflow-hidden sticky top-24">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Зміст</h3>
        <div className="space-y-1.5">
          {Object.entries(sections).map(([key, title]) => (
            <button
              key={key}
              onClick={() => setActiveSection(key)}
              className={`nav-item relative ${activeSection === key ? 'active' : 'inactive'}`}
            >
              <span className="font-mono mr-2 text-xs opacity-70">{key}.</span>
              {title}
              
              {activeSection === key && (
                <AnimatedTransition 
                  show={true} 
                  type="fade" 
                  className="absolute inset-0 -z-10 rounded-xl"
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SidebarNav;
