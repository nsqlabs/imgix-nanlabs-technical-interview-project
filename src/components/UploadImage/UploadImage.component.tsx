import { uploadImgixImage } from 'components/ImagesList/ImagesList.slice';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { checkIfImageExists, isValidImgixAssetURL } from 'services/ImageUrlValidation.service';

const InputDescription = () => {
  return (
    <p className='mt-2 text-xs text-gray-500'>
      ⚠️ The image should be already hosted on{' '}
      <a
        href='https://imgix.com/'
        target='_blank'
        rel='noreferrer'
        className='text-orange-600 hover:text-orange-700'
      >
        ImgIx
      </a>{' '}
      ⚠️
    </p>
  );
};

const InputError = ({ error }: { error: string }) => {
  return <p className='mt-2 text-xs text-red-600'>{error}</p>;
};

const UploadImage = () => {
  const dispatch = useDispatch();
  const [imageUrl, setImageUrl] = useState('');
  const [validationError, setValidationError] = useState('');
  const [buttonText, setButtonText] = useState('Upload Image');

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setImageUrl(e.currentTarget.value);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      isValidImgixAssetURL(imageUrl);
      setButtonText('Checking if image exists ⏳');
      await checkIfImageExists(imageUrl);
      setButtonText('Uploading image ⏳');
      dispatch(uploadImgixImage(imageUrl));
      setButtonText('Image Uploaded ✔️');
      setTimeout(() => {
        setButtonText('Upload Image');
        setImageUrl('');
      }, 1500);

      setValidationError('');
    } catch (error: any) {
      setValidationError(error.message);
    }
  };

  return (
    <div className='flex flex-col items-center justify-between w-full'>
      <label className='block text-sm font-medium text-orange-600 my-1'>Image URL</label>
      <input
        type='text'
        value={imageUrl}
        onChange={handleChange}
        className='form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-orange-600 focus:bg-white focus:border-orange-600 focus:outline-none'
      />
      {!validationError ? <InputDescription /> : <InputError error={validationError} />}
      <button
        onClick={handleSubmit}
        type='submit'
        disabled={!imageUrl}
        className='px-3 py-2 my-2 w-full border-2 disabled:bg-gray-200 disabled:text-orange-600 disabled-border-gray-200 border-orange-600 text-orange-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out'
      >
        {buttonText}
      </button>
    </div>
  );
};

export default UploadImage;
