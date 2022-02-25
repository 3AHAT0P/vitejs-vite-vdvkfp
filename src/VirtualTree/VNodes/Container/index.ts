import type {
  Build,
  GetBoundingRect,
  Render,
  VComponent,
  Border, Color,
  Position, Size,
  AbsolutePosition,
} from '@VirtualTree/@types';

import { buildAbsolutePosition } from '@VirtualTree/utils/buildAbsolutePosition';

export const type = 'container';

export interface VContainer extends VComponent {
  type: typeof type;
  position: AbsolutePosition;
  size: Size;
  color?: Color;
  border?: Border;
}

export type ContainerOptions = {
  position: Position;
  size: Size;
  color?: Color;
  border?: Border;
};

export const build: Build<VContainer, ContainerOptions> = (
  { position, size, color, border },
  parentBoundingRect,
) => {
  return {
    type,
    position: buildAbsolutePosition(position, parentBoundingRect),
    size,
    color,
    border,
  };
};

export const getBoundingRect: GetBoundingRect<VContainer> = ({ position, size }) => {
  return {
    ...position,
    width: size.x,
    height: size.y,
    zIndex: 0,
  };
}

export const render: Render<VContainer> = (ctx, node) => {
  ctx.save();
  ctx.beginPath();
  ctx.rect(node.position.x, node.position.y, node.size.x, node.size.y);
  if (node.color != null) {
    ctx.fillStyle = node.color;
    ctx.fill();
  }
  if (node.border != null) {
    ctx.strokeStyle = node.border.color;
    ctx.lineWidth = node.border.size;
    ctx.stroke();
  }
  ctx.closePath();
  ctx.restore();
};
