interface Position {
  type: 'relative' | 'absolute';
  x: number;
  y: number;
  outerAnchorX: number;
  outerAnchorY: number;
  innerAnchorX: number;
  innerAnchorY: number;
}

interface Size {
  x: number;
  y: number;
}

type Color = string;

interface Border {
  color: Color;
  size: number;
}

interface VNode {
  children: VNode[];
}

interface VNodeLine extends VNode {
  type: 'line';
  from: Position;
  to: Position;
  color?: Color;
}

interface VNodeCircle extends VNode {
  type: 'circle';
  position: Position;
  radius: number;
  color?: Color;
  border?: Border;
}

interface VNodeRectangle extends VNode {
  type: 'rectangle';
  position: Position;
  size: Size;
  color?: Color;
  border?: Border;
}

interface VNodeTile extends VNode {
  type: 'tile';
  source: string;
  sourcePosition: Position;
  sourceSize: Size;
  position: Position;
  size: Size;
}

const buildTree = () => {};

const circle = () => {};

type LineOptions = {
  from: Position;
  to: Position;
  color?: Color;
};
const line = (
  { from, to, color }: LineOptions,
  children: VNode[]
): VNodeLine => {
  return {
    type: 'line',
    from,
    to,
    color,
    children,
  };
};

const loadTileset = async () => {
  const tileset = await import('./terrain.tileset.json');
  console.log(tileset);
  const tilesetImage = new Image();
  tilesetImage.src = tileset.image;
  await new Promise((resolve, reject) => {
    tilesetImage.onload = resolve;
    tilesetImage.onerror = reject;
  });
  console.log('123123');
  createImageBitmap(tilesetImage);
};

loadTileset();
