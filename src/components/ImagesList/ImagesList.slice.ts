import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'store';
import { ImgixImage } from 'types/ImgixImage';

export const imgixImagesSlice = createSlice({
  name: 'uploadedImgixImages',
  initialState: {
    uploadedImgixImages: [] as string[],
  },
  reducers: {
    uploadImgixImage: (state, action) => {
      state.uploadedImgixImages = [action.payload, ...state.uploadedImgixImages];
    },
    setSampleImages: (state, action) => {
      state.uploadedImgixImages = [...state.uploadedImgixImages, ...action.payload];
    },
  },
});

export const { setSampleImages, uploadImgixImage } = imgixImagesSlice.actions;

export const selectImgixImages = (state: RootState) => state.uploadedImages.uploadedImgixImages;

export default imgixImagesSlice.reducer;
