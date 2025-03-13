
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import TabNavigation from '@/components/TabNavigation';
import ContentView from '@/components/ContentView';
import Footer from '@/components/Footer';

const Index = () => {
  const [activeTab, setActiveTab] = useState<'info' | 'tools'>('info');
  const [activeSection, setActiveSection] = useState<string>('1.1');
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading for smooth initial animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  // Scroll to top when changing sections
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [activeSection]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-pulse flex flex-col items-center">
          <div className="w-12 h-12 bg-primary/20 rounded-full mb-4"></div>
          <div className="h-4 w-32 bg-primary/20 rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background animate-fade-in">
      <Header />
      
      <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <ContentView 
        activeTab={activeTab} 
        activeSection={activeSection} 
        setActiveSection={setActiveSection} 
      />
      
      <Footer />
    </div>
  );
};

export default Index;
