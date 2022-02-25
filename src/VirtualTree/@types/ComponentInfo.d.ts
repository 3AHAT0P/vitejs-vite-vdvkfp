import { BoundingRect } from './BoundingRect';
import { VComponent } from './VNode';

export type Build<TVComponent extends VComponent = VComponent, TBuilderOptions = any> = (options: TBuilderOptions, parentBoundingRect: BoundingRect) => TVComponent;

export type GetBoundingRect<TVComponent extends VComponent = VComponent> = (component: TVComponent) => BoundingRect;

export type Render<TVComponent extends VComponent = VComponent> = (ctx: CanvasRenderingContext2D, node: TVComponent) => void | VComponent;

export interface ComponentInfo<
  TVComponent extends VComponent = VComponent,
  TBuilderOptions = any,
  TType extends string = string
> {
  type: TType;
  build: Build<TVComponent, TBuilderOptions>;
  getBoundingRect: GetBoundingRect<TVComponent>;
  render: Render<TVComponent>;
}
