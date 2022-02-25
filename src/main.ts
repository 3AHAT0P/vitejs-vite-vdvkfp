import { buildTree, renderTree } from '@VirtualTree';

import { App } from './composits/App';

import './style.css';

const getRootCanvas = (selector: string): [HTMLCanvasElement, CanvasRenderingContext2D] => {
  const app = document.querySelector<HTMLDivElement>(selector);
  if (app === null) throw new Error('Selector is incorrect');

  const canvas = document.createElement('canvas');
  canvas.setAttribute('id', 'scene');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  app.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  if (ctx === null) throw new Error('Canvas 2d context is null');

  ctx.imageSmoothingEnabled = false;

  return [canvas, ctx];
}

const main = async () => {
  const [canvas, ctx] = getRootCanvas('#app');

  const tree = buildTree(App(), {
    x: 0,
    y: 0,
    width: canvas.width,
    height: canvas.height,
    zIndex: 0,
  });

  await renderTree(ctx, tree);
};

main();
