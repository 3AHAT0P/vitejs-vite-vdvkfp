import { Color } from '../../@types/Color';
import { Position } from '../../@types/Position';
import { VNode } from '../../@types/VNode';

export interface VNodeLine extends VNode {
  type: 'line';
  from: Position;
  to: Position;
  color?: Color;
}

export type LineOptions = {
  from: Position;
  to: Position;
  color?: Color;
};

export const Line = (
  { from, to, color }: LineOptions,
  children: VNode[]
): VNodeLine => {
  return {
    type: 'line',
    from,
    to,
    color,
    children,
  };
};
