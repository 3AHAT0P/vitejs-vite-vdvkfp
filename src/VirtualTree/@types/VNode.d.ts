import type { BoundingRect } from './BoundingRect';

export interface VComponent {
  type: string;
}

export interface VNode {
  component: VComponent;
  children: VNode[];
}

export interface VFactory<TVComponent extends VComponent = VComponent> {
  (options: any, parentBoundingRect: BoundingRect): TVComponent;
}
