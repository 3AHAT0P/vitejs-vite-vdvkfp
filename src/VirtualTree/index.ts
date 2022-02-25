import {
  VNode,
  VComponent,
  AbsolutePosition,
  BoundingRect,
  Position,
  ComponentInfo,
  Render,
} from './@types';

export interface FactoryTreeNode {
  componentInfo: ComponentInfo;
  options: any;
  children: FactoryTreeNode[];
  vNode?: VNode;
}

export const renderersMap: Record<string, Render> = {};

export const addNode = <
  T extends VComponent,
  G extends ComponentInfo<T> = ComponentInfo<T>
>(
  componentInfo: G,
  options: Parameters<G['build']>[0],
  children: FactoryTreeNode[]
): FactoryTreeNode => {
  return { componentInfo: componentInfo as any, options, children };
}

export const buildTree = async (root: FactoryTreeNode, canvasBoundingRect: BoundingRect) => {
  const queue = [root];

  root.vNode = {
    component: root.componentInfo.build(root.options, canvasBoundingRect),
    children: [],
  }

  renderersMap[root.componentInfo.type] = root.componentInfo.render;

  while (queue.length > 0) {
    const parentNode = queue.shift();
    if (parentNode == null) break;
    if (parentNode.vNode == null) throw new Error('Something went wrong!');
    for (const child of parentNode.children) {
      const component = child.componentInfo.build(
        child.options,
        parentNode.componentInfo.getBoundingRect(parentNode.vNode.component),
      );
      child.vNode = { component, children: [] };
      renderersMap[child.componentInfo.type] = child.componentInfo.render;
      parentNode.vNode.children.push(child.vNode);
      queue.push(child);
    }
  }

  return root.vNode;
};

export const renderTree = async (
  ctx: CanvasRenderingContext2D,
  root: VNode
) => {
  await Promise.all(beforeRenderList.map((cb) => cb()));
  const queue = [root];

  while (queue.length > 0) {
    const node = queue.shift();
    if (node == null) break;
    if (node.children?.length > 0) queue.push(...node.children);
    const renderer = renderersMap[node.component.type];
    if (renderer != null) {
      renderer(ctx, node.component);
    }
  }
};

const beforeRenderList: Array<() => Promise<void>> = [];

export const beforeRender = (cb: () => Promise<void>) => {
  beforeRenderList.push(cb);
};
