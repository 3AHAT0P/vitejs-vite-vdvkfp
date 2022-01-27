import { Tile } from './Tile';

export interface TileSet {
  name: string;
  type: 'tileset';
  version: string;
  tiledversion: string;

  image: string;
  source: HTMLImageElement;
  imageheight: number;
  imagewidth: number;

  margin: number;
  spacing: number;

  columns: number;
  tilecount: number;
  tileheight: number;
  tilewidth: number;
  tiles: Tile[];
}
