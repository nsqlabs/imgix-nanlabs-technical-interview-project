import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'store';
import editorOptionsDefaultState from './EditorOptions.initial-state';
import { ActionCreators } from 'redux-undo';
import { AdjustmentProperty, RotationProperty } from 'types/EditorOption';

interface SetAdjustmentPropertyAction {
  type: string;
  payload: {
    prop: AdjustmentProperty;
    value: any; // TODO: SET A TYPE FOR THE GLOBAL STATE TO AVOID COLLISION
  };
}

interface SetRotationPropertyAction {
  type: string;
  payload: {
    prop: RotationProperty;
    value: any; // TODO: SET A TYPE FOR THE GLOBAL STATE TO AVOID COLLISION
  };
}

export const editorOptionsSlice = createSlice({
  name: 'editorOptions',
  initialState: editorOptionsDefaultState,
  reducers: {
    setAdjustmentProperty: (state, action: SetAdjustmentPropertyAction) => {
      const { prop, value } = action.payload;
      state.adjustment[prop].value = Number(value);
    },
    setRotationProperty: (state, action: SetRotationPropertyAction) => {
      const { prop, value } = action.payload;
      state.rotation[prop].value = value;
    },
    resetState: (state) => {
      const properties = [...Object.values(state.adjustment), ...Object.values(state.rotation)];
      for (const property of properties) {
        property.value = property.initialValue;
      }
    },
  },
});

export const undoLastOptionsModification = () => {
  return ActionCreators.undo();
};

export const redoLastOptionsModification = () => {
  return ActionCreators.redo();
};

export const clearHistoryOptionsModification = () => {
  return ActionCreators.redo();
};

export const { resetState, setAdjustmentProperty, setRotationProperty } =
  editorOptionsSlice.actions;

export const selectAdjustmentOptions = (state: RootState) => state.editorOptions.present.adjustment;
export const selectRotationOptions = (state: RootState) => state.editorOptions.present.rotation;
export const selectURLParams = (state: RootState) =>
  Object.values({
    ...state.editorOptions.present.adjustment,
    ...state.editorOptions.present.rotation,
  })
    .filter(({ initialValue, value }) => initialValue != value)
    .map(({ urlSlash, value }) => `${urlSlash}=${value}`)
    .join('&');

export const hasUndoableOperations = (state: RootState) => !!state.editorOptions.past.length;
export const hasRedoableOperations = (state: RootState) => !!state.editorOptions.future.length;

export default editorOptionsSlice.reducer;
