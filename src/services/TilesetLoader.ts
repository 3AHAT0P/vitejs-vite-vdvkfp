import { TileSet } from 'VirtualTree/@types/TileSet';

export class TilesetLoader {
  private _cache: Map<string, TileSet> = new Map();

  async load(tileSetName: string): Promise<TileSet> {
    const cached = this._cache.get(tileSetName);
    if (cached != null) return cached;

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

    this._cache.set(tileSetName, tileset);

    return tileset;
  }
}

export const tilesetLoader = new TilesetLoader();
