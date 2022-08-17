import {
  clearHistoryOptionsModification,
  resetState,
  selectURLParams,
} from 'components/containers/EditorOptions/EditorOptions.slice';
import { setImageURL } from 'components/containers/EditorPreview/EditorPreview.slice';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css';

interface ImagePreviewProps {
  url: string;
}

const ImagePreview = ({ url }: ImagePreviewProps) => {
  const dispatch = useDispatch();
  const urlParams = useSelector(selectURLParams);

  const handleStateChange = () => {
    dispatch(setImageURL(url));
    dispatch(resetState());
    dispatch(clearHistoryOptionsModification());
  };

  const handleImageSelectionWithConfirmation = () => {
    confirmAlert({
      title: 'Are you sure you want to change the editing image?',
      message: 'You will lose all changes and the history.',
      buttons: [
        {
          label: 'No ❌',
        },
        {
          label: 'Yes 👍',
          onClick: handleStateChange,
        },
      ],
    });
  };

  return (
    <img
      src={url}
      alt={'Imgix Image'}
      className='p-2 sm:max-h-full'
      onClick={urlParams ? handleImageSelectionWithConfirmation : handleStateChange}
    />
  );
};

export default ImagePreview;
