import type { Position, BoundingRect, AbsolutePosition } from '../@types';

export const buildAbsolutePosition = (
  position: Position,
  parentBoundingRect: BoundingRect
): AbsolutePosition => {
  if (position.type === 'absolute') {
    return {
      type: 'absolute',
      x: position.x,
      y: position.y,
    };
  } else if (position.type === 'relative') {
    let x!: number;
    let y!: number;

    switch (position.outerAnchorX) {
      case 'start': {
        x = parentBoundingRect.x + position.x;
        break;
      }
      case 'center': {
        x = parentBoundingRect.x + parentBoundingRect.width / 2 + position.x;
        break;
      }
      case 'end': {
        x = parentBoundingRect.x + parentBoundingRect.width + position.x;
        break;
      }
      default: {
        x = parentBoundingRect.x + position.x;
        break;
      }
    }

    switch (position.outerAnchorY) {
      case 'start': {
        y = parentBoundingRect.y + position.y;
        break;
      }
      case 'center': {
        y = parentBoundingRect.y + parentBoundingRect.height / 2 + position.y;
        break;
      }
      case 'end': {
        y = parentBoundingRect.y + parentBoundingRect.height + position.y;
        break;
      }
      default: {
        y = parentBoundingRect.y + position.y;
        break;
      }
    }
    return {
      type: 'absolute',
      x,
      y,
    };
  }
  return {
    type: 'absolute',
    x: 0,
    y: 0,
  };
};
