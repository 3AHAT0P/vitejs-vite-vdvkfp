import type { Color } from '@VirtualTree/@types';

import { addNode } from '@VirtualTree';
import { Wrapper, Line } from '@VirtualTree/VNodes';

export interface ShortLinesProps {
  lineWidth?: number;
  color?: Color;
}

export const ShortLines = ({ lineWidth = 3, color = 'green' }: ShortLinesProps = {}) => {
  const firstLine = <const>{
    from: { type: 'relative', x: 50, y: 10 },
    to: { type: 'relative', x: -50, y: 10, outerAnchorX: 'end' },
    color,
    lineWidth,
  };
  const secondLine = <const>{
    from: { type: 'relative', x: -10, y: 50, outerAnchorX: 'end' },
    to: { type: 'relative', x: -10, y: -50, outerAnchorX: 'end', outerAnchorY: 'end' },
    color,
    lineWidth,
  };
  const thirdLine = <const>{
    from: { type: 'relative', x: -50, y: -10, outerAnchorX: 'end', outerAnchorY: 'end' },
    to: { type: 'relative', x: 50, y: -10, outerAnchorY: 'end' },
    color,
    lineWidth,
  };
  const fourthLine = <const>{
    from: { type: 'relative', x: 10, y: -50, outerAnchorY: 'end' },
    to: { type: 'relative', x: 10, y: 50 },
    color,
    lineWidth,
  };

  return addNode<Wrapper.VWrapper>(Wrapper, {}, [
    addNode<Line.VLine>(Line, firstLine, []),
    addNode<Line.VLine>(Line, secondLine, []),
    addNode<Line.VLine>(Line, thirdLine, []),
    addNode<Line.VLine>(Line, fourthLine, []),
  ]);
}