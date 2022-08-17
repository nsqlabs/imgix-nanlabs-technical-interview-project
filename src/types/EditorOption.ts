export interface EditorOption {
  initialValue: string | number;
  options?: string[] | number[];
}

export type AdjustmentProperty =
  | 'bri'
  | 'con'
  | 'exp'
  | 'gam'
  | 'high'
  | 'hue'
  | 'invert'
  | 'sat'
  | 'shad'
  | 'sharp'
  | 'usm'
  | 'usmrad'
  | 'vib';

export type RotationProperty = 'flip' | 'orient' | 'rot';

export type EditorOptionProperty = AdjustmentProperty | RotationProperty;

export interface EditorOptionBase {
  description: string;
  value: string | number;
  inputType: string;
  maxValue?: number;
  minValue?: number;
  options?: [];
  name: string;
  tooltip: string;
  urlSlash: AdjustmentProperty | RotationProperty;
}
