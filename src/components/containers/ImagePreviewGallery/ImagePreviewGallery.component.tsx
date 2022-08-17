import React from 'react';
import ImagesList from 'components/ImagesList';
import './ImagePreviewGallery.styles.css';
import SectionDropDown from 'components/common/SectionDropDown/SectionDropDown.component';
import UploadImage from 'components/UploadImage';

const ImagePreviewGallery = () => {
  return (
    <div className='h-full px-3'>
      <SectionDropDown sectionName='Upload an Image' needsScroll={false}>
        <UploadImage />
      </SectionDropDown>
      <ImagesList />
    </div>
  );
};

export default ImagePreviewGallery;
