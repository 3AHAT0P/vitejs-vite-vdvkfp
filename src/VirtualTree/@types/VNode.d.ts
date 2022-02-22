export interface VComponent {
  type: string;
}

export interface VNode {
  component: VComponent;
  children: VNode[];
}
