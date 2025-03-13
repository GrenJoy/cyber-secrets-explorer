
import React from 'react';
import { BookOpen, Shield } from 'lucide-react';
import AnimatedTransition from './AnimatedTransition';

interface TabNavigationProps {
  activeTab: 'info' | 'tools';
  setActiveTab: (tab: 'info' | 'tools') => void;
}

const TabNavigation: React.FC<TabNavigationProps> = ({ activeTab, setActiveTab }) => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-5">
      <div className="bg-gray-100/80 p-1.5 rounded-full inline-flex">
        <button
          onClick={() => setActiveTab('info')}
          className={`tab-button ${activeTab === 'info' ? 'active' : 'inactive'}`}
        >
          <BookOpen className="w-4 h-4 mr-2" />
          Інформація
          
          {activeTab === 'info' && (
            <AnimatedTransition 
              show={true} 
              type="scale" 
              className="absolute inset-0 -z-10 bg-white rounded-full"
            />
          )}
        </button>
        
        <button
          onClick={() => setActiveTab('tools')}
          className={`tab-button ${activeTab === 'tools' ? 'active' : 'inactive'}`}
        >
          <Shield className="w-4 h-4 mr-2" />
          Інструменти захисту
          
          {activeTab === 'tools' && (
            <AnimatedTransition 
              show={true} 
              type="scale" 
              className="absolute inset-0 -z-10 bg-white rounded-full"
            />
          )}
        </button>
      </div>
    </div>
  );
};

export default TabNavigation;
