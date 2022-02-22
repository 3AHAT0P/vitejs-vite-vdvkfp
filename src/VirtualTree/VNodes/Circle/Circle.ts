import {
  VComponent,
  Color,
  AbsolutePosition,
  Position,
  Border,
  BoundingRect,
} from 'VirtualTree/@types';

import { buildAbsolutePosition } from '@/VirtualTree';

export interface VCircle extends VComponent {
  type: 'circle';
  position: AbsolutePosition;
  radius: number;
  color?: Color;
  border?: Border;
}

export type CircleOptions = {
  position: Position;
  radius: number;
  color?: Color;
  border?: Border;
};

export const Circle = (
  { position, radius, color, border }: CircleOptions,
  parentBoundingRect: BoundingRect
): VCircle => {
  return {
    type: 'circle',
    position: buildAbsolutePosition(position, parentBoundingRect),
    radius,
    color,
    border,
  };
};
