import './style.css';
import {} from './index';
import { renderTree } from './VirtualTree/index';
import { Tile } from './VirtualTree/VNodes/Tile/Tile';
import { Wrapper } from './VirtualTree/VNodes/Wrapper/Wrapper';
import { Line } from './VirtualTree/VNodes/Line/Line';
import { VNode } from './VirtualTree/@types/VNode';

const app = document.querySelector<HTMLDivElement>('#app')!;

const canvas = document.createElement('canvas');
canvas.setAttribute('id', 'scene');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

app.appendChild(canvas);

const ctx = canvas.getContext('2d');
if (ctx == null) throw new Error('WTF? CTX is null');

ctx.imageSmoothingEnabled = false;

// const main = async () => {
//   let index = 0;

//   const tree = Wrapper({}, [
//     Line(
//       {
//         from: { type: 'absolute', x: 4, y: 4 },
//         to: { type: 'absolute', x: 300, y: 4 },
//         color: 'red',
//       },
//       []
//     ),
//     Line(
//       {
//         from: { type: 'absolute', x: 300, y: 4 },
//         to: { type: 'absolute', x: 300, y: 300 },
//         color: 'red',
//       },
//       []
//     ),
//     Line(
//       {
//         from: { type: 'absolute', x: 300, y: 300 },
//         to: { type: 'absolute', x: 4, y: 300 },
//         color: 'red',
//       },
//       []
//     ),
//     Line(
//       {
//         from: { type: 'absolute', x: 4, y: 300 },
//         to: { type: 'absolute', x: 4, y: 4 },
//         color: 'red',
//       },
//       []
//     ),
//     Tile(
//       {
//         tilesetPath: 'terrain',
//         tileId: 190,
//         position: { type: 'absolute', x: 32 * ++index, y: 16 },
//         size: { x: 32, y: 32 },
//       },
//       []
//     ),
//     Tile(
//       {
//         tilesetPath: 'terrain',
//         tileId: 191,
//         position: { type: 'absolute', x: 32 * ++index, y: 16 },
//         size: { x: 32, y: 32 },
//       },
//       []
//     ),
//     Tile(
//       {
//         tilesetPath: 'terrain',
//         tileId: 192,
//         position: { type: 'absolute', x: 32 * ++index, y: 16 },
//         size: { x: 32, y: 32 },
//       },
//       []
//     ),
//     Tile(
//       {
//         tilesetPath: 'terrain',
//         tileId: 193,
//         position: { type: 'absolute', x: 32 * ++index, y: 16 },
//         size: { x: 32, y: 32 },
//       },
//       []
//     ),
//     Tile(
//       {
//         tilesetPath: 'terrain',
//         tileId: 194,
//         position: { type: 'absolute', x: 32 * ++index, y: 16 },
//         size: { x: 32, y: 32 },
//       },
//       []
//     ),
//   ]);

//   await renderTree(ctx, tree);
// };

interface FactoryTreeNode {
  factory(options: any, children: VNode[]): VNode;
  options: any;
  children: FactoryTreeNode[];
}

const Node = <
  T extends VNode,
  G extends (options: any, children: VNode[]) => T
>(
  factory: G,
  options: Parameters<G>[0],
  children: FactoryTreeNode[]
): FactoryTreeNode => {
  return { factory, options, children };
};

const buildTree = async (root: FactoryTreeNode, canvasBoundingRect) => {
  const queue = [root];
  root.factory(root.options, canvasBoundingRect, root.children)
  while (queue.length > 0) {
    const node = queue.shift();
    if (node == null) break;
    if (node.children?.length > 0) queue.push(...node.children);
    const boundingRect = {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
      zIndex: 0,
    };
    node.factory(node.options)
  }
};

const main = async () => {
  let index = 0;

  const firstLine = <const>{
    from: { type: 'absolute', x: 4, y: 4 },
    to: { type: 'absolute', x: 300, y: 4 },
    color: 'red',
  };
  const secondLine = <const>{
    from: { type: 'absolute', x: 300, y: 4 },
    to: { type: 'absolute', x: 300, y: 300 },
    color: 'red',
  };
  const thirdLine = <const>{
    from: { type: 'absolute', x: 300, y: 300 },
    to: { type: 'absolute', x: 4, y: 300 },
    color: 'red',
  };
  const fourthLine = <const>{
    from: { type: 'absolute', x: 4, y: 300 },
    to: { type: 'absolute', x: 4, y: 4 },
    color: 'red',
  };

  const factoryTree = Node(Wrapper, {}, [
    Node(Line, firstLine, []),
    Node(Line, secondLine, []),
    Node(Line, thirdLine, []),
    Node(Line, fourthLine, []),
  ]);

  const tree = await buildTree(factoryTree);

  await renderTree(ctx, tree);
};

main();
