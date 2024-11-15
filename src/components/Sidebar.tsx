import React from 'react';
import { X, BookOpen, History, BookMarked, Heart, Home } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: 'home' | 'reader') => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, onNavigate }) => {
  const menuItems = [
    { icon: <Home className="w-5 h-5" />, label: 'الرئيسية', action: () => onNavigate('home') },
    { icon: <BookOpen className="w-5 h-5" />, label: 'قراءة المانجا', action: () => onNavigate('reader') },
    { icon: <History className="w-5 h-5" />, label: 'آخر القراءات' },
    { icon: <BookMarked className="w-5 h-5" />, label: 'المفضلة' },
    { icon: <Heart className="w-5 h-5" />, label: 'الإعجابات' },
  ];

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={onClose}
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-72 bg-gray-900 border-l border-gray-800 transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-4">
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-800 rounded-lg transition-colors absolute left-4 top-4"
          >
            <X className="w-5 h-5" />
          </button>
          
          <nav className="mt-8">
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={item.action}
                className="w-full flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;