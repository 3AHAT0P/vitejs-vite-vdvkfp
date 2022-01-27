import { TileSet } from './@types/TileSet';

export const buildTree = () => {};

export const renderTree = () => {};

export const loadTileset = async (tileSetName: string): Promise<TileSet> => {
  const tileset = (await import(`../assets/${tileSetName}.tileset.json`))
    .default;
  console.log(tileset);
  const tilesetImage = new Image();
  tilesetImage.src = `/assets/${tileset.image}`;
  await new Promise((resolve, reject) => {
    tilesetImage.onload = resolve;
    tilesetImage.onerror = reject;
  });
  console.log('123123');
  tileset.source = tilesetImage;
  // createImageBitmap(tilesetImage);
  return tileset;
};
