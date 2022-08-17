import { selectURLParams } from 'components/containers/EditorOptions/EditorOptions.slice';
import { selectImageURL } from 'components/containers/EditorPreview/EditorPreview.slice';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const EditorPreviewImageURL = () => {
  const urlParams = useSelector(selectURLParams);
  const originalImageURL = useSelector(selectImageURL);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const editorImageURL = `${originalImageURL}?${urlParams}`;
  return (
    <div className='flex flex-col items-center justify-evenly w-full'>
      <span className='text-center text-xl text-gray-600 hover:text-gray-700 transition duration-300 ease-in-out mb-2'>
        {editorImageURL}
      </span>
      <CopyToClipboard text={editorImageURL} onCopy={handleCopy}>
        <button className='w-2/6 inline-block px-6 py-3 rounded-md bg-orange-600 text-white font-medium text-xs leading-tight uppercase hover:bg-white hover:border-orange-600 hover:border-2 hover:text-orange-600 hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"'>
          {!copied ? 'Copy URL 📋' : 'URL Copied to your Clipboard ✔️'}
        </button>
      </CopyToClipboard>
    </div>
  );
};

export default EditorPreviewImageURL;
