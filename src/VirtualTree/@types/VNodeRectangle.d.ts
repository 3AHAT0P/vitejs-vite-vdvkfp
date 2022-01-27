import { Color } from './Color';
import { Position } from './Position';
import { Border } from './Border';
import { Size } from './Size';
import { VNode } from './VNode';

interface VNodeRectangle extends VNode {
  type: 'rectangle';
  position: Position;
  size: Size;
  color?: Color;
  border?: Border;
}
