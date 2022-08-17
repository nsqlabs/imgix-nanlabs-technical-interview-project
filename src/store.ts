import { configureStore } from '@reduxjs/toolkit';
import editorOptionsSlice from 'components/containers/EditorOptions/EditorOptions.slice';
import editorPreviewSlice from 'components/containers/EditorPreview/EditorPreview.slice';
import imgixImagesSlice from 'components/ImagesList/ImagesList.slice';
import undoable from 'redux-undo';

export const store = configureStore({
  reducer: {
    editorPreview: editorPreviewSlice,
    editorOptions: undoable(editorOptionsSlice),
    uploadedImages: imgixImagesSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
