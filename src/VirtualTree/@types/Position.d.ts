export interface Position {
  type: 'relative' | 'absolute';
  x: number;
  y: number;
  outerAnchorX?: number;
  outerAnchorY?: number;
  innerAnchorX?: number;
  innerAnchorY?: number;
}
