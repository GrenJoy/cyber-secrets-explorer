
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="mt-auto bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 mb-4 md:mb-0">
            © 2024 Дипломна робота бакалавра Москаленка Олексія з курсу Кібербезпеки
          </p>
          
          <div className="flex space-x-6">
            <a 
              href="#" 
              className="text-sm text-gray-500 hover:text-primary transition-colors"
            >
              Джерела
            </a>
            <a 
              href="#" 
              className="text-sm text-gray-500 hover:text-primary transition-colors"
            >
              Контакти
            </a>
            <a 
              href="#" 
              className="text-sm text-gray-500 hover:text-primary transition-colors"
            >
              Про автора
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
