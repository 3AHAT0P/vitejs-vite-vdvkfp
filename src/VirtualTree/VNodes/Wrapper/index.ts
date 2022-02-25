import type { VComponent, BoundingRect, Build, GetBoundingRect, Render } from '@VirtualTree/@types';

export const type = 'wrapper';

export interface VWrapper extends VComponent {
  type: typeof type;
  parentBoundingRect: BoundingRect;
}

export type WrapperOptions = {};

export const build: Build<VWrapper, WrapperOptions> = (options, parentBoundingRect) => {
  return {
    type,
    parentBoundingRect,
  };
};

export const getBoundingRect: GetBoundingRect<VWrapper> = ({ parentBoundingRect }) => {
  return { ...parentBoundingRect };
}

export const render: Render<VWrapper> = () => {};
