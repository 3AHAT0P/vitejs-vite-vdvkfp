import { VNode } from './@types/VNode';

import { renderers } from './VNodes';

export const buildTree = () => {};

export const renderTree = async (
  ctx: CanvasRenderingContext2D,
  root: VNode
) => {
  await Promise.all(beforeRenderList.map((cb) => cb()));
  const queue = [root];
  while (queue.length > 0) {
    const node = queue.shift();
    if (node == null) break;
    if (node.children?.length > 0) queue.push(...node.children);
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
