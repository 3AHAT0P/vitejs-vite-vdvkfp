import { VNode } from './VNode';

export interface RendererOptions {
  deps: {};
}

export type Renderer<TVNode extends VNode> = (
  ctx: CanvasRenderingContext2D,
  node: TVNode
) => void;

export type Registerer = (type: string, renderer: Renderer<any>) => void;
