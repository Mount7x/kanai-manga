import React from 'react';
import { Book, Github, Twitter } from 'lucide-react';

const Footer = () => {
  const links = {
    Product: ['Features', 'Pricing', 'Documentation', 'Changelog'],
    Company: ['About', 'Blog', 'Careers', 'Contact'],
    Legal: ['Privacy', 'Terms', 'Security'],
    Social: ['Twitter', 'GitHub', 'LinkedIn', 'Discord'],
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Book className="w-6 h-6 text-blue-500" />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-blue-400 bg-clip-text text-transparent">
                YourBrand
              </span>
            </div>
            <p className="text-gray-400 mb-4 max-w-sm">
              Building the future of web development with modern tools and technologies.
            </p>
            <div className="flex gap-4">
              <button className="text-gray-400 hover:text-white">
                <Twitter className="w-5 h-5" />
              </button>
              <button className="text-gray-400 hover:text-white">
                <Github className="w-5 h-5" />
              </button>
            </div>
          </div>
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h3 className="font-semibold text-white mb-4">{title}</h3>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item}>
                    <button className="text-gray-400 hover:text-white transition-colors">
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© 2024 YourBrand. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;