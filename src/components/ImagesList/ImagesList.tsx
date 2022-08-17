import axios from 'axios';
import ImagePreview from 'components/ImagePreview';
import React, { useEffect, useState } from 'react';
import LoadingSpinner from 'components/common/LoadingSpinner';
import { ImgixImage } from 'types/ImgixImage';
import { selectImgixImages, setSampleImages } from 'components/ImagesList/ImagesList.slice';
import { useDispatch, useSelector } from 'react-redux';

const ImagesList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const imgixImages = useSelector(selectImgixImages);

  useEffect(() => {
    const fetchImagesList = async () => {
      if (!imgixImages.length) {
        setIsLoading(true);
        try {
          const SAMPLE_IMAGES_ENDPOINT_URL = import.meta.env.VITE_SAMPLE_IMAGES_URL;
          const response = await axios.get(SAMPLE_IMAGES_ENDPOINT_URL || '');
          const images_url = response.data.map(({ url }: ImgixImage) => url);
          dispatch(setSampleImages(images_url));
        } catch (error) {
          console.error(error);
        }
        setIsLoading(false);
      }
    };
    fetchImagesList();
  }, []);

  return (
    <div className='flex sm:flex-row md:flex-col sm:overflow-x-scroll md:overflow-y-scroll sm:overflow-y-hidden md:overflow-x-hidden w-full sm:max-h-full'>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <h2 className='text-2xl font-bold mb-3 text-center text-orange-600'>Available Images</h2>
          {imgixImages.map((url: string, index: number) => (
            <ImagePreview url={url} key={index} />
          ))}
        </>
      )}
    </div>
  );
};

export default ImagesList;
