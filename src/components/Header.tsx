
import React from 'react';
import { Shield } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="w-full bg-white/90 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Shield className="w-6 h-6 text-primary mr-3" />
          <div>
            <h1 className="text-xl font-semibold text-gray-900">Безпека в Інтернеті</h1>
            <p className="text-sm text-gray-500">
              Дипломна робота бакалавра Москаленка Олексія
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
