import { Position } from './Position';
import { Size } from './Size';
import { VNode } from './VNode';

interface VNodeTile extends VNode {
  type: 'tile';
  source: string;
  sourcePosition: Position;
  sourceSize: Size;
  position: Position;
  size: Size;
}
