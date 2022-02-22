import type { Registerer } from '../../@types';

import type { VLine } from './Line';

const lineRenderer = (ctx: CanvasRenderingContext2D, node: VLine) => {
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(node.from.x, node.from.y);
  ctx.lineTo(node.to.x, node.to.y);
  if (node.color != null) ctx.strokeStyle = node.color;
  ctx.stroke();
  ctx.closePath();
  ctx.restore();
};

export const lineFactory = (register: Registerer) => {
  register('line', lineRenderer);
};
