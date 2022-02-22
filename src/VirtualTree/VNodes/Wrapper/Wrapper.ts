import { VComponent, BoundingRect } from 'VirtualTree/@types';

export interface VWrapper extends VComponent {
  type: 'wrapper';
}

export type WrapperOptions = {};

export const Wrapper = (
  {}: WrapperOptions,
  parentBoundingRect: BoundingRect
): VWrapper => {
  return {
    type: 'wrapper',
  };
};