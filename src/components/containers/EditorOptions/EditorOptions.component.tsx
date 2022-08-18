import React from 'react';
import SectionDropDown from 'components/common/SectionDropDown/SectionDropDown.component';
import FormField from 'components/common/FormField';
import {
  selectAdjustmentOptions,
  selectRotationOptions,
  setAdjustmentProperty,
  setRotationProperty,
} from 'components/containers/EditorOptions/EditorOptions.slice';
import { useDispatch, useSelector } from 'react-redux';
import { AdjustmentProperty, EditorOptionProperty, RotationProperty } from 'types/EditorOption';
import { selectImageURL } from 'components/containers/EditorPreview/EditorPreview.slice';
import OptionsField from 'components/common/OptionsField';

const EditorOptions = () => {
  const dispatch = useDispatch();
  const adjustmentOptions = useSelector(selectAdjustmentOptions);
  const rotationOptions = useSelector(selectRotationOptions);
  const originalImageURL = useSelector(selectImageURL);

  return (
    <div className='w-full p-2 flex flex-col align-center justify-between max-h-full h-fit'>
      <SectionDropDown sectionName='Adjustment options'>
        {Object.values(adjustmentOptions).map((option) => {
          return (
            <FormField
              description={option.description}
              inputType={option.inputType}
              name={option.name}
              urlSlash={option.urlSlash as EditorOptionProperty}
              onChange={(e: any) => {
                const value = e.target.value;
                dispatch(
                  setAdjustmentProperty({
                    prop: option.urlSlash as AdjustmentProperty,
                    value: option.inputType == 'number' ? Number(value) : value,
                  }),
                );
              }}
              value={option.value}
              key={option.urlSlash}
              tooltip={option.tooltip}
              minValue={option.minValue}
              maxValue={option.maxValue}
              disabled={!originalImageURL}
            />
          );
        })}
      </SectionDropDown>
      <SectionDropDown sectionName='Rotation options' needsScroll={true}>
        {Object.values(rotationOptions).map((option: any) => {
          // Check type collision because of type inference
          if (Object.hasOwn(option, 'options')) {
            return (
              <OptionsField
                initialValue={option.initialValue}
                key={option.urlSlash}
                options={option.options}
                onChange={(selectedOption: string | number) => {
                  dispatch(
                    setRotationProperty({
                      prop: option.urlSlash as RotationProperty,
                      value: selectedOption,
                    }),
                  );
                }}
                disabled={!originalImageURL}
                description={option.description}
                name={option.name}
                value={option.value}
              />
            );
          }
          return (
            <FormField
              description={option.description}
              inputType={option.inputType}
              name={option.name}
              urlSlash={option.urlSlash as EditorOptionProperty}
              onChange={(e: any) => {
                const value = e.target.value;
                dispatch(
                  setRotationProperty({
                    prop: option.urlSlash as any,
                    value: option.inputType == 'number' ? Number(value) : value,
                  }),
                );
              }}
              value={option.value}
              key={option.urlSlash}
              tooltip={option.tooltip}
              minValue={option.minValue}
              maxValue={option.maxValue}
              disabled={!originalImageURL}
            />
          );
        })}
      </SectionDropDown>
    </div>
  );
};

export default EditorOptions;
