export const buildTree = () => {};

export const renderTree = () => {};

export const loadTileset = async () => {
  const tileset = await import('@assets/terrain.tileset.json');
  console.log(tileset);
  const tilesetImage = new Image();
  tilesetImage.src = `./assets/${tileset.image}`;
  await new Promise((resolve, reject) => {
    tilesetImage.onload = resolve;
    tilesetImage.onerror = reject;
  });
  console.log('123123');
  createImageBitmap(tilesetImage);
};
