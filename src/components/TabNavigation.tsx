
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
          className={`tab-button flex items-center justify-center relative px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${
            activeTab === 'info' 
              ? 'active text-gray-900 z-10' 
              : 'inactive text-gray-600 hover:text-gray-900'
          }`}
        >
          <BookOpen className="w-4 h-4 mr-2" />
          Інформація
          
          {activeTab === 'info' && (
            <AnimatedTransition 
              show={true} 
              type="scale" 
              className="absolute inset-0 -z-10 bg-white rounded-full"
            >
              <div></div>
            </AnimatedTransition>
          )}
        </button>
        
        <button
          onClick={() => setActiveTab('tools')}
          className={`tab-button flex items-center justify-center relative px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${
            activeTab === 'tools' 
              ? 'active text-gray-900 z-10' 
              : 'inactive text-gray-600 hover:text-gray-900'
          }`}
        >
          <Shield className="w-4 h-4 mr-2" />
          Інструменти захисту
          
          {activeTab === 'tools' && (
            <AnimatedTransition 
              show={true} 
              type="scale" 
              className="absolute inset-0 -z-10 bg-white rounded-full"
            >
              <div></div>
            </AnimatedTransition>
          )}
        </button>
      </div>
    </div>
  );
};

export default TabNavigation;
