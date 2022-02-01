import type { Registerer } from '../../@types/Registerer';

import type { VNodeTile } from './Tile';

const tileRenderer = async (ctx: CanvasRenderingContext2D, node: VNodeTile) => {
  ctx.save();
  ctx.drawImage(bitmap, node.position.x, node.position.y);
  ctx.restore();
};

export const tileFactory = (register: Registerer) => {
  register('tile', tileRenderer);
};
