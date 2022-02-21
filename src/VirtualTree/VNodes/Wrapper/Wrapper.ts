import { VNode } from '../../@types/VNode';

export interface VNodeWrapper extends VNode {
  type: 'wrapper';
}

export type WrapperOptions = {};

export const Wrapper = (
  {}: WrapperOptions,
  children: VNode[]
): VNodeWrapper => {
  return {
    type: 'wrapper',
    children,
  };
};
