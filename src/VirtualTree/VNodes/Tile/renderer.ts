import type { Registerer } from '../../@types/Registerer';
import { buildAbsolutePosition } from '@/VirtualTree';

import type { VTile } from './Tile';

export const tileRenderer = async (
  ctx: CanvasRenderingContext2D,
  node: VTile
) => {
  if (node.bitmap == null) throw new Error('Bitmap is null');
  ctx.save();
  ctx.drawImage(
    node.bitmap,
    node.position.x,
    node.position.y,
    node.size.x,
    node.size.y
  );
  ctx.restore();
};

export const tileFactory = (register: Registerer) => {
  register('tile', tileRenderer);
};
