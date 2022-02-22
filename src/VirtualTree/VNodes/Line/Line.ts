import {
  VComponent,
  Color,
  AbsolutePosition,
  Position,
  BoundingRect,
} from 'VirtualTree/@types';
import { buildAbsolutePosition } from '@/VirtualTree';

export interface VLine extends VComponent {
  type: 'line';
  from: AbsolutePosition;
  to: AbsolutePosition;
  color?: Color;
}

export type LineOptions = {
  from: Position;
  to: Position;
  color?: Color;
};

export const Line = (
  { from, to, color }: LineOptions,
  parentBoundingRect: BoundingRect
): VLine => {
  return {
    type: 'line',
    from: buildAbsolutePosition(from, parentBoundingRect),
    to: buildAbsolutePosition(to, parentBoundingRect),
    color,
  };
};
