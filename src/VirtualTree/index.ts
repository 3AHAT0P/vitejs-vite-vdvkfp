import { TileSet } from './@types/TileSet';

export const buildTree = () => {};

export const renderTree = () => {};

export const loadTileset = async (tileSetName: string): Promise<TileSet> => {
  const tileset = (await import(`../assets/${tileSetName}.tileset.json`))
    .default;
  const tilesetImage = new Image();
  if (tileset.image.startsWith('http')) {
    tilesetImage.src = tileset.image;
  } else {
    tilesetImage.src = `/assets/${tileset.image}`;
  }
  await new Promise((resolve, reject) => {
    tilesetImage.onload = resolve;
    tilesetImage.onerror = reject;
  });
  tileset.source = tilesetImage;
  // createImageBitmap(tilesetImage);
  return tileset;
};
