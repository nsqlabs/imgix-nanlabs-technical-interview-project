import React from 'react';
import { EditorOptionBase } from 'types/EditorOption';

interface FormFieldProps extends EditorOptionBase {
  disabled?: boolean;
  onChange: any; // TODO: Set explicit type without coupling it to dispatch
}

const FormField = ({
  inputType,
  value,
  name,
  onChange,
  description,
  minValue,
  maxValue,
  disabled = false,
}: FormFieldProps) => {
  return (
    <div className='flex flex-col items-start justify-between w-100 pr-1 my-2'>
      <label className='block text-sm font-medium text-orange-600 my-1'>{name}</label>
      <input
        type={inputType}
        value={value}
        onChange={onChange}
        disabled={disabled}
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
        focus:text-gray-600 focus:bg-white focus:border-orange-600 focus:outline-none'
        min={minValue}
        max={maxValue}
      />
      <p className='mt-2 text-xs text-gray-500'>
        {disabled ? '⚠️ Select an image first ⚠️' : description}
      </p>
    </div>
  );
};

export default FormField;
