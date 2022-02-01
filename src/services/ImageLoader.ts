export class ImageLoader {
  private _cache: Map<string, HTMLImageElement> = new Map();

  async load(url: string): Promise<HTMLImageElement> {
    const cached = this._cache.get(url);
    if (cached != null) return cached;

    const image = new Image();

    if (url.startsWith('http')) image.src = url;
    else image.src = `/assets/${url}`;

    await new Promise((resolve, reject) => {
      image.onload = resolve;
      image.onerror = reject;
    });

    this._cache.set(url, image);

    return image;
  }
}

export const imageLoader = new ImageLoader();
