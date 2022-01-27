import './style.css';
import {} from './index';
import { loadTileset } from './VirtualTree/index';

const app = document.querySelector<HTMLDivElement>('#app')!;

const canvas = document.createElement('canvas');
canvas.setAttribute('id', 'scene');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

app.appendChild(canvas);

const ctx = canvas.getContext('2d');
if (ctx == null) throw new Error('!!!!!!!!');

const renderTile = async (ctx, tileset, tileId, x, y) => {
  const row = Math.trunc(tileId / tileset.columns);
  const col = tileId - row * tileset.columns;
  const bitmap = await createImageBitmap(
    tileset.source,
    col * tileset.tilewidth,
    row * tileset.tileheight,
    tileset.tilewidth,
    tileset.tileheight
  );

  ctx.drawImage(bitmap, x, y);
};

const main = async () => {
  const tileset = await loadTileset('terrain');

  const tileId = 190;

  let index = 0;
  renderTile(ctx, tileset, 190, 16 * ++index, 16 * ++index);
  renderTile(ctx, tileset, 191, 16 * ++index, 16 * ++index);
  renderTile(ctx, tileset, 192, 16 * ++index, 16 * ++index);
  renderTile(ctx, tileset, 193, 16 * ++index, 16 * ++index);
  renderTile(ctx, tileset, 194, 16 * ++index, 16 * ++index);
  renderTile(ctx, tileset, 1, 16 * ++index, 16 * ++index);
  renderTile(ctx, tileset, 2, 16 * ++index, 16 * ++index);
  renderTile(ctx, tileset, 3, 16 * ++index, 16 * ++index);
  renderTile(ctx, tileset, 4, 16 * ++index, 16 * ++index);
  renderTile(ctx, tileset, 5, 16 * ++index, 16 * ++index);
};

main();
