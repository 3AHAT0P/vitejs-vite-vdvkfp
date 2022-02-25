import type {
  VComponent,
  Color,
  AbsolutePosition,
  Position,
  Border,
  Build,
  GetBoundingRect,
  Render,
} from '@VirtualTree/@types';

import { buildAbsolutePosition } from '@VirtualTree/utils/buildAbsolutePosition';

export const type = 'circle';

export interface VCircle extends VComponent {
  type: typeof type;
  position: AbsolutePosition;
  radius: number;
  color?: Color;
  border?: Border;
}

export type CircleOptions = {
  position: Position;
  radius: number;
  color?: Color;
  border?: Border;
};

export const build: Build<VCircle, CircleOptions> = (
  { position, radius, color, border },
  parentBoundingRect
): VCircle => {
  return {
    type,
    position: buildAbsolutePosition(position, parentBoundingRect),
    radius,
    color,
    border,
  };
};

export const getBoundingRect: GetBoundingRect<VCircle> = ({ position, radius }) => {
  return {
    x: position.x - radius,
    y: position.y - radius,
    width: radius * 2,
    height: radius * 2,
    zIndex: 0,
  };
}

export const render: Render<VCircle> = (ctx, node) => {
  ctx.save();
  ctx.beginPath();
  ctx.arc(node.position.x, node.position.y, node.radius, 0, 360);
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
