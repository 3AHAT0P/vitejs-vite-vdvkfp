import { VComponent } from './VNode';

export interface RendererOptions {
  deps: {};
}

export type Renderer<TVComponent extends VComponent> = (
  ctx: CanvasRenderingContext2D,
  node: TVComponent
) => void;

export type Registerer = (type: string, renderer: Renderer<any>) => void;
