import type { Size } from '@/VirtualTree/@types';

import { addNode } from '@VirtualTree';
import { Tile } from '@/VirtualTree/VNodes';

export interface MushroomProps {
  size: Size;
}

export const Mushroom = ({ size }: MushroomProps) => {
  return addNode<Tile.VTile>(
    Tile,
    {
      tilesetPath: 'terrain',
      tileId: 21 * 22 + 17,
      position: { type: 'relative', x: -16, y: -16, outerAnchorX: 'center', outerAnchorY: 'center' },
      size,
    },
    [],
  );
};