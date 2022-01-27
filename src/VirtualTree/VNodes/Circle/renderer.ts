import type { Registerer } from '../../@types/Registerer';

import type { VNodeCircle } from './Circle';

const circleRenderer = (ctx: CanvasRenderingContext2D, node: VNodeCircle) => {
  ctx.arc(node.position.x, node.position.y, node.radius, 0, 360);
};

export const circleFactory = (register: Registerer) => {
  register('circle', circleRenderer);
};
