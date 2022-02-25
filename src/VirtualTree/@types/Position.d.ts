export interface AbsolutePosition {
  type: 'absolute';
  x: number;
  y: number;
}

export interface RelativePosition {
  type: 'relative';
  x: number;
  y: number;
  outerAnchorX?: 'start' | 'center' | 'end';
  outerAnchorY?: 'start' | 'center' | 'end';
  // innerAnchorX?: 'start' | 'center' | 'end';
  // innerAnchorY?: 'start' | 'center' | 'end';
}

export type Position = AbsolutePosition | RelativePosition;
