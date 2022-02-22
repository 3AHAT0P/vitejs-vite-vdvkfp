import { VComponent, BoundingRect } from 'VirtualTree/@types';
import { buildAbsolutePosition } from '@/VirtualTree';

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
