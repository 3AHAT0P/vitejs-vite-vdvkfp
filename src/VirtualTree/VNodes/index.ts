import { VNode } from '../@types/VNode';
import { Registerer, Renderer } from '../@types/Registerer';

export const renderers: Record<string, Renderer<VNode>> = {};

const registerRenderer: Registerer = (type, renderer) => {
  renderers[type] = renderer;
};

import { circleFactory } from './Circle/renderer';
circleFactory(registerRenderer);

import { lineFactory } from './Line/renderer';
lineFactory(registerRenderer);

import { tileFactory } from './Tile/renderer';
tileFactory(registerRenderer);

import { wrapperFactory } from './Wrapper/renderer';
wrapperFactory(registerRenderer);
