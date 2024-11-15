import React from 'react';
import { Book, Menu } from 'lucide-react';

interface NavbarProps {
  onMenuClick: () => void;
  onReadClick: () => void;
  showReadButton: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ onMenuClick, onReadClick, showReadButton }) => {
  return (
    <nav className="fixed w-full bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <button
              onClick={onMenuClick}
              className="p-2 hover:bg-gray-800 rounded-lg"
            >
              <Menu className="w-6 h-6" />
            </button>
            <div className="flex items-center gap-2">
              <Book className="w-6 h-6 text-blue-500" />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-blue-400 bg-clip-text text-transparent">
                Kanai Manga
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {showReadButton ? (
              <button 
                onClick={onReadClick}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
              >
                اقرأ الآن
              </button>
            ) : (
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
                رفع فصل
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;