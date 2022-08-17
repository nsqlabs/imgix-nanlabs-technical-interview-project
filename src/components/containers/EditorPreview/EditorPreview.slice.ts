import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'store';

export const editorPreviewSlice = createSlice({
  name: 'editorPreview',
  initialState: {
    imageUrl: '',
  },
  reducers: {
    setImageURL: (state, action) => {
      state.imageUrl = action.payload;
    },
  },
});

export const { setImageURL } = editorPreviewSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectImageURL = (state: RootState) => state.editorPreview.imageUrl;

export default editorPreviewSlice.reducer;
