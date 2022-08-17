import React, { useState } from 'react';
import Select from 'react-select';

type StringOrNumber = string | number;

interface OptionsFieldProps {
  initialValue: StringOrNumber;
  onChange: (option: StringOrNumber) => void;
  options: StringOrNumber[];
  disabled: boolean;
  name: string;
  description: string;
  value: StringOrNumber;
}

interface OptionInput {
  value: StringOrNumber;
  label: string;
}

const generateSelectValue = (v: StringOrNumber) => ({
  value: v,
  label: v,
});

const OptionsField = ({
  onChange,
  options,
  disabled,
  name,
  description,
  value,
}: OptionsFieldProps) => {
  const handleChange = (chosenOption: any) => {
    onChange(chosenOption.value);
  };

  const mappedOptions = options.map((option) => ({
    value: option,
    label: option,
  }));

  return (
    <div className='flex flex-col items-start justify-between w-100 pr-1 my-2'>
      <label className='block text-sm font-medium text-orange-600 my-1'>{name}</label>
      <Select
        value={generateSelectValue(value)}
        onChange={handleChange}
        options={mappedOptions as any}
        isDisabled={disabled}
        className='form-control
        block
        w-full
        min-h-fit
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        rounded
        transition
        ease-in-out
        m-0'
      />
      <p className='mt-2 text-xs text-gray-500'>
        {disabled ? '⚠️ Select an image first ⚠️' : description}
      </p>
    </div>
  );
};

export default OptionsField;
