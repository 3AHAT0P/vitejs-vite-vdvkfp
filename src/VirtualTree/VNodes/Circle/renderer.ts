import type { Registerer } from '../../@types/Registerer';

import type { VNodeCircle } from './Circle';

const circleRenderer = (ctx: CanvasRenderingContext2D, node: VNodeCircle) => {
  ctx.save();
  ctx.beginPath();
  ctx.arc(node.position.x, node.position.y, node.radius, 0, 360);
  if (node.color != null) ctx.fillStyle = node.color;
  ctx.fill();
  if (node.border != null) {
    ctx.strokeStyle = node.border.color;
    ctx.lineWidth = node.border.size;
    ctx.stroke();
  }
  ctx.closePath();
  ctx.restore();
};

export const circleFactory = (register: Registerer) => {
  register('circle', circleRenderer);
};
