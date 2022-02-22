import {
  VNode,
  VComponent,
  AbsolutePosition,
  BoundingRect,
  Position,
} from './@types';

import { renderers } from './VNodes';

export const buildTree = () => {};

export const renderTree = async (
  ctx: CanvasRenderingContext2D,
  root: VNode
) => {
  await Promise.all(beforeRenderList.map((cb) => cb()));
  const queue = [root];
  let parentBoundingRect = null;
  while (queue.length > 0) {
    const node = queue.shift();
    if (node == null) break;
    if (node.children?.length > 0) queue.push(...node.children);
    const boundingRect = {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
    };
    const renderer = renderers[node.type];
    if (renderer != null) {
      renderer(ctx, node);
    }
  }
};

const beforeRenderList: Array<() => Promise<void>> = [];

export const beforeRender = (cb: () => Promise<void>) => {
  beforeRenderList.push(cb);
};

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
    return {
      type: 'absolute',
      x: parentBoundingRect.x + position.x,
      y: parentBoundingRect.y + position.y,
    };
  }
  return {
    type: 'absolute',
    x: 0,
    y: 0,
  };
};
