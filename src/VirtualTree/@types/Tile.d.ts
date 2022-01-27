export interface Property {
  name: string;
  type: 'bool' | 'string' | 'number';
  value: boolean | string | number;
}

export interface Tile {
  id: number;
  properties: Property[];
}
