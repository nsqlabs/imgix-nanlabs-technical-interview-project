import EditorOptions from 'components/containers/EditorOptions';
import EditorPreview from 'components/containers/EditorPreview';
import ImagePreviewGallery from 'components/containers/ImagePreviewGallery';
import React from 'react';
import './MainSection.styles.css';

const MainSection = () => {
  return (
    <div className='main-section'>
      <div className='image-gallery min-w-full min-h-full max-h-full max-w-full'>
        <ImagePreviewGallery />
      </div>
      <div className='image-editor min-w-full min-h-full max-h-full max-w-full'>
        <EditorPreview />
      </div>
      <div className='editor-options min-w-full min-h-full max-h-full max-w-full'>
        <EditorOptions />
      </div>
    </div>
  );
};

export default MainSection;
