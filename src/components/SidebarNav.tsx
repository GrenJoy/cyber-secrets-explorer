
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
    <div className="w-64 flex-shrink-0">
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 sticky top-24">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Зміст</h3>
        <div className="space-y-1">
          {Object.entries(sections).map(([key, title]) => (
            <div key={key} className="relative">
              <button
                onClick={() => setActiveSection(key)}
                className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                  activeSection === key 
                    ? 'text-primary font-medium' 
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                {key}. {title}
              </button>
              
              {activeSection === key && (
                <AnimatedTransition show={true} type="fade" className="absolute left-0 w-1 h-full bg-primary rounded-full">
                  <div></div>
                </AnimatedTransition>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SidebarNav;
