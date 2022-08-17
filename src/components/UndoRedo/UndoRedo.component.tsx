import {
  hasRedoableOperations,
  hasUndoableOperations,
  redoLastOptionsModification,
  undoLastOptionsModification,
} from 'components/containers/EditorOptions/EditorOptions.slice';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const UndoRedo = () => {
  const canUndo = useSelector(hasUndoableOperations);
  const canRedo = useSelector(hasRedoableOperations);
  const dispatch = useDispatch();

  return (
    <div className='flex flex-row justify-evenly w-2/12 items-center'>
      <button
        onClick={() => dispatch(undoLastOptionsModification())}
        disabled={!canUndo}
        className='px-3 py-2 disabled:bg-gray-200 disabled:text-gray-600 disabled-border-gray-200 border-2 border-gray-600 text-gray-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out'
      >
        Undo
      </button>
      <button
        onClick={() => dispatch(redoLastOptionsModification())}
        disabled={!canRedo}
        className='px-3 py-2 border-2 disabled:bg-gray-200 disabled:text-gray-600 disabled-border-gray-200 border-gray-600 text-gray-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out'
      >
        Redo
      </button>
    </div>
  );
};

export default UndoRedo;
