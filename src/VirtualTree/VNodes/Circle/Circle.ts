import { Color } from '../../@types/Color';
import { Position } from '../../@types/Position';
import { Border } from '../../@types/Border';
import { VNode } from '../../@types/VNode';

export interface VNodeCircle extends VNode {
  type: 'circle';
  position: Position;
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
  children: VNode[]
): VNodeCircle => {
  return {
    type: 'circle',
    position,
    radius,
    color,
    border,
    children,
  };
};
