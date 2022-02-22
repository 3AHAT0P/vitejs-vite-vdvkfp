import { VComponent, Position, Size, BoundingRect } from 'VirtualTree/@types';

import { beforeRender } from '../../index';
import { tilesetLoader } from '../../../services/TilesetLoader';

export interface VTile extends VComponent {
  type: 'tile';
  tileId: number;
  bitmap?: ImageBitmap;
  position: Position;
  size: Size;
}

export type TileOptions = {
  tilesetPath: string;
  tileId: number;
  sourceSize?: Size;
  position: Position;
  size: Size;
};

const idToPoint = (
  tileId: number,
  columnsNumber: number,
  size: { x: number; y: number }
): { x: number; y: number } => {
  const y = Math.trunc(tileId / columnsNumber);
  const x = tileId - y * columnsNumber;

  return { x: x * size.x, y: y * size.y };
};

export const Tile = (
  { tilesetPath, tileId, position, size }: TileOptions,
  parentBoundingRect: BoundingRect
): VTile => {
  const node: VTile = {
    type: 'tile',
    tileId,
    position,
    size,
  };
  beforeRender(async () => {
    const tileset = await tilesetLoader.load(tilesetPath);
    const tilePosition = idToPoint(tileId, tileset.columns, {
      x: tileset.tilewidth,
      y: tileset.tileheight,
    });
    node.bitmap = await createImageBitmap(
      tileset.source,
      tilePosition.x,
      tilePosition.y,
      tileset.tilewidth,
      tileset.tileheight
    );
  });

  return node;
};