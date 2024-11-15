import React from 'react';

interface ChapterSelectorProps {
  currentChapter: number;
  onChapterChange: (chapter: number) => void;
}

const ChapterSelector: React.FC<ChapterSelectorProps> = ({
  currentChapter,
  onChapterChange,
}) => {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">اختر الفصل</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
        {Array.from({ length: 10 }, (_, i) => i + 1).map((chapter) => (
          <button
            key={chapter}
            onClick={() => onChapterChange(chapter)}
            className={`px-4 py-2 rounded-lg transition-colors ${
              currentChapter === chapter
                ? 'bg-blue-600 text-white'
                : 'bg-gray-800 hover:bg-gray-700'
            }`}
          >
            الفصل {chapter}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ChapterSelector;