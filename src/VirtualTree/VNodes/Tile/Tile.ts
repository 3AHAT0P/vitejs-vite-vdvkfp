import { Size } from '../../@types/Size';
import { Position } from '../../@types/Position';
import { VNode } from '../../@types/VNode';
import { imageLoader } from '../../../services/ImageLoader';

export interface VNodeTile extends VNode {
  type: 'tile';
  source: string;
  sourcePosition: Position;
  sourceSize: Size;
  position: Position;
  size: Size;
}

export type TileOptions = {
  source: string;
  sourcePosition: Position;
  sourceSize?: Size;
  position: Position;
  size: Size;
};

export const Tile = async (
  { source, sourcePosition, sourceSize, position, size }: TileOptions,
  children: VNode[],
): Promise<VNodeTile> => {
  imageLoader
  const source = await options.deps.imageLoader.load(node.source);
  ctx.save();
  const bitmap = await createImageBitmap(
    node.source,
    node.sourcePosition.x,
    node.sourcePosition.y,
    node.sourceSize.x,
    node.sourceSize.y,
  );

  return {
    type: 'tile',
    source,
    sourcePosition,
    sourceSize: sourceSize ?? size,
    position,
    size,
    children,
  };
};
