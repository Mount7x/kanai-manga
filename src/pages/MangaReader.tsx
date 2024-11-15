import React, { useState } from 'react';
import ChapterSelector from '../components/ChapterSelector';
import MangaViewer from '../components/MangaViewer';

const MangaReader = () => {
  const [currentChapter, setCurrentChapter] = useState(1);

  return (
    <>
      <ChapterSelector
        currentChapter={currentChapter}
        onChapterChange={setCurrentChapter}
      />
      <MangaViewer chapterNumber={currentChapter} />
    </>
  );
};

export default MangaReader;