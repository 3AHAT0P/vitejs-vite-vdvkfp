import type {
  VComponent,
  Color,
  AbsolutePosition,
  Position,
  Build,
  GetBoundingRect,
  Render,
} from '@VirtualTree/@types';

import { buildAbsolutePosition } from '@VirtualTree/utils/buildAbsolutePosition';

export const type = 'line';

export interface VLine extends VComponent {
  type: typeof type;
  from: AbsolutePosition;
  to: AbsolutePosition;
  color?: Color;
  lineWidth?: number;
}

export type LineOptions = {
  from: Position;
  to: Position;
  color?: Color;
  lineWidth?: number;
};

export const build: Build<VLine, LineOptions> = (
  { from, to, color, lineWidth },
  parentBoundingRect
) => {
  return {
    type,
    from: buildAbsolutePosition(from, parentBoundingRect),
    to: buildAbsolutePosition(to, parentBoundingRect),
    color,
    lineWidth,
  };
};

export const getBoundingRect: GetBoundingRect<VLine> = ({ from, to }) => {
  return {
    x: from.x,
    y: from.y,
    width: Math.abs(to.x - from.x),
    height: Math.abs(to.y - from.y),
    zIndex: 0,
  };
};

export const render: Render<VLine> = (ctx, node) => {
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(node.from.x, node.from.y);
  ctx.lineTo(node.to.x, node.to.y);
  if (node.lineWidth != null) ctx.lineWidth = node.lineWidth;
  if (node.color != null) ctx.strokeStyle = node.color;
  ctx.stroke();
  ctx.closePath();
  ctx.restore();
};
