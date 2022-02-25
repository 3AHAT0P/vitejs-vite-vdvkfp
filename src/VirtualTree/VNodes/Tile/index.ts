import { VComponent, Position, Size, AbsolutePosition, Build, GetBoundingRect, Render } from '@VirtualTree/@types';

import { buildAbsolutePosition } from '@VirtualTree/utils/buildAbsolutePosition';

import { tilesetLoader } from '@/services/TilesetLoader';
import { beforeRender } from '@VirtualTree';

export const type = 'tile';

export interface VTile extends VComponent {
  type: typeof type;
  tileId: number;
  bitmap?: ImageBitmap;
  position: AbsolutePosition;
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

export const build: Build<VTile, TileOptions> = (
  { tilesetPath, tileId, position, size },
  parentBoundingRect
): VTile => {
  const node: VTile = {
    type,
    tileId,
    position: buildAbsolutePosition(position, parentBoundingRect),
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

export const getBoundingRect: GetBoundingRect<VTile> = ({ position, size }) => {
  return {
    ...position,
    width: size.x,
    height: size.y,
    zIndex: 0,
  };
}

export const render: Render<VTile> = (ctx, node) => {
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
