import { selectImageURL } from 'components/containers/EditorPreview/EditorPreview.slice';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import EditorPreviewImageURL from 'components/EditorPreviewImageURL';
import {
  hasRedoableOperations,
  hasUndoableOperations,
  redoLastOptionsModification,
  selectURLParams,
  undoLastOptionsModification,
} from 'components/containers/EditorOptions/EditorOptions.slice';
import { useDispatch } from 'react-redux';
import UndoRedo from 'components/UndoRedo/UndoRedo.component';

const EditorPreview = () => {
  const urlParams = useSelector(selectURLParams);
  const originalImageURL = useSelector(selectImageURL);
  const canRedo = useSelector(hasRedoableOperations);
  const [showOriginal, setShowOriginal] = useState(false);

  const editorImageURL = `${originalImageURL}?${urlParams}`;
  return (
    <div className='container flex flex-col items-center justify-center min-h-full'>
      {!originalImageURL ? (
        <div className='text-center text-gray-600 py-20 px-6'>
          <h1 className='text-2xl font-bold mt-0 mb-6'>
            To start please select an image from the sample images
          </h1>
        </div>
      ) : (
        <div className='preview-container'>
          {urlParams || canRedo ? (
            <div className='flex flex-row justify-between min-w-full px-10 items-center py-3'>
              <UndoRedo />
              <div>
                <button
                  onClick={() => setShowOriginal(!showOriginal)}
                  className='px-6 py-2 border-2 border-orange-600 text-orange-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out'
                >
                  {showOriginal ? 'View Image with changes' : 'View Original'}
                </button>
              </div>
            </div>
          ) : (
            <div className='text-center text-gray-600'>
              <h1 className='text-xl font-bold mt-0 mb-6'>
                To start seeing changes please modify some param in the options.
              </h1>
            </div>
          )}
          <div className='w-full flex flex-col items-center justify-center p-3'>
            <img
              src={showOriginal ? originalImageURL : editorImageURL}
              alt='Editor Image'
              style={{ maxHeight: '75vh' }}
              className='m-5'
            />
            {urlParams && <EditorPreviewImageURL />}
          </div>
        </div>
      )}
    </div>
  );
};

export default EditorPreview;
