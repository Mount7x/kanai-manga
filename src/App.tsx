import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage';
import MangaReader from './pages/MangaReader';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'reader'>('home');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-950">
      <Navbar 
        onMenuClick={() => setIsSidebarOpen(true)} 
        onReadClick={() => setCurrentPage('reader')}
        showReadButton={currentPage === 'home'}
      />
      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)}
        onNavigate={(page) => {
          setCurrentPage(page);
          setIsSidebarOpen(false);
        }}
      />
      
      <main className="container mx-auto px-4 pt-16 pb-12">
        {currentPage === 'home' ? <HomePage /> : <MangaReader />}
      </main>
    </div>
  );
}

export default App;