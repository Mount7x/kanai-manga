import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface MangaViewerProps {
  chapterNumber: number;
}

const MangaViewer: React.FC<MangaViewerProps> = ({ chapterNumber }) => {
  // Example manga pages using placeholder images
  const pages = [
    'https://images.unsplash.com/photo-1623275404659-51b5db8e4c67?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1623275404659-51b5db8e4c67?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1623275404659-51b5db8e4c67?auto=format&fit=crop&w=800&q=80'
  ];

  return (
    <div className="space-y-4 my-8">
      <div className="flex items-center justify-between mb-6">
        <button className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors">
          <ChevronLeft className="w-5 h-5" />
          Previous Chapter
        </button>
        <button className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors">
          Next Chapter
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {pages.map((page, index) => (
        <div
          key={index}
          className="relative aspect-[3/4] max-w-3xl mx-auto rounded-lg overflow-hidden bg-gray-900 border border-gray-800"
        >
          <img
            src={page}
            alt={`الفصل ${chapterNumber} الصفحة ${index + 1}`}
            className="w-full h-full object-contain"
            loading="lazy"
          />
          <div className="absolute bottom-4 right-4 bg-gray-900/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm">
            الصفحة {index + 1}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MangaViewer;