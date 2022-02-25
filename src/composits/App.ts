import { addNode } from '@VirtualTree';
import { Container } from '@VirtualTree/VNodes';

import { Mushroom } from './Mushroom';
import { RectWithCircle } from './RectWithCircle';
import { ShortLines } from './ShortLines';


export const App = () => {
  const containerOptions: Container.ContainerOptions = {
    position: { type: 'absolute', x: 32, y: 32 },
    size: { x: 400, y: 400 },
    border: {
      color: 'red',
      size: 4,
    },
  };
  return addNode<Container.VContainer>(Container, containerOptions, [
    ShortLines({ color: 'green' }),
    RectWithCircle({}, [Mushroom({ size: { x: 32, y: 32 } })]),
  ])
}