import { FactoryTreeNode, addNode } from '@VirtualTree';
import { Circle, Container } from '@VirtualTree/VNodes';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RectWithCircleProps {

}

export const RectWithCircle = (props: RectWithCircleProps = {}, children: FactoryTreeNode[]) => {
  const containerOptions: Container.ContainerOptions = {
    position: { type: 'relative', x: 50, y: 50 },
    size: { x: 200, y: 200 },
    border: {
      color: 'red',
      size: 4,
    },
  };

  const circleOptions: Circle.CircleOptions = {
    position: { type: 'relative', x: 0, y: 0, outerAnchorX: 'center', outerAnchorY: 'center' },
    radius: 75,
    border: {
      color: 'violet',
      size: 4,
    },
  };

  return addNode<Container.VContainer>(Container, containerOptions, [
    addNode<Circle.VCircle>(Circle, circleOptions, children),
  ]);
}
