import * as Circle from './Circle';
import * as Line from './Line';
import * as Tile from './Tile';
import * as Container from './Container';
import * as Wrapper from './Wrapper';

export const primitiveMap = <const>{
  [Circle.type]: Circle,
  [Line.type]: Line,
  [Tile.type]: Tile,
  [Container.type]: Container,
  [Wrapper.type]: Wrapper,
};
