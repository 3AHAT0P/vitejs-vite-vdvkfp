import { addNode, buildTree, renderTree } from '@VirtualTree';
import * as Tile from '@VirtualTree/VNodes/Tile';
import * as Wrapper from '@VirtualTree/VNodes/Wrapper';
import * as Line from '@VirtualTree/VNodes/Line';
import * as Container from '@VirtualTree/VNodes/Container';
import * as Circle from '@VirtualTree/VNodes/Circle';

import { } from './index';
import './style.css';

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


const main = async () => {
  let index = 0;

  const containerOptions = <const>{
    position: { type: 'absolute', x: 32, y: 32 },
    size: { x: 400, y: 400 },
    border: {
      color: 'red',
      size: 4,
    },
  };

  const firstLine = <const>{
    from: { type: 'relative', x: 50, y: 10 },
    to: { type: 'relative', x: -50, y: 10, outerAnchorX: 'end' },
    color: 'green',
    lineWidth: 3,
  };
  const secondLine = <const>{
    from: { type: 'relative', x: -10, y: 50, outerAnchorX: 'end' },
    to: { type: 'relative', x: -10, y: -50, outerAnchorX: 'end', outerAnchorY: 'end' },
    color: 'green',
    lineWidth: 3,
  };
  const thirdLine = <const>{
    from: { type: 'relative', x: -50, y: -10, outerAnchorX: 'end', outerAnchorY: 'end' },
    to: { type: 'relative', x: 50, y: -10, outerAnchorY: 'end' },
    color: 'green',
    lineWidth: 3,
  };
  const fourthLine = <const>{
    from: { type: 'relative', x: 10, y: -50, outerAnchorY: 'end' },
    to: { type: 'relative', x: 10, y: 50 },
    color: 'green',
    lineWidth: 3,
  };

  const innerContainerOptions: Container.ContainerOptions = {
    position: { type: 'relative', x: 50, y: 50 },
    size: { x: 200, y: 200 },
    border: {
      color: 'red',
      size: 4,
    },
  };

  const circleOptions: Circle.CircleOptions = {
    position: { type: 'relative', x: 0, y: 0, outerAnchorX: 'center', outerAnchorY: 'center' },
    radius: 75,
    border: {
      color: 'violet',
      size: 4,
    },
  };

  const mushroom: Tile.TileOptions = {
    tilesetPath: 'terrain',
    tileId: 21 * 22 + 17,
    position: { type: 'relative', x: -16, y: -16, outerAnchorX: 'center', outerAnchorY: 'center' },
    size: { x: 32, y: 32 },
  }

  const rawTree = addNode<Container.VContainer>(Container, containerOptions, [
    addNode<Line.VLine>(Line, firstLine, []),
    addNode<Line.VLine>(Line, secondLine, []),
    addNode<Line.VLine>(Line, thirdLine, []),
    addNode<Line.VLine>(Line, fourthLine, []),
    addNode<Container.VContainer>(Container, innerContainerOptions, [
      addNode<Circle.VCircle>(Circle, circleOptions, [
        addNode<Tile.VTile>(Tile, mushroom, []),
      ]),
    ]),
  ]);

  const tree = await buildTree(rawTree, {
    x: 0,
    y: 0,
    width: canvas.width,
    height: canvas.height,
    zIndex: 0,
  });

  await renderTree(ctx, tree);
};

main();
