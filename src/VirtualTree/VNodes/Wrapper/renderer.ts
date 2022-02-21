import type { Registerer } from '../../@types/Registerer';

export const wrapperRenderer = async () => {};

export const wrapperFactory = (register: Registerer) => {
  register('wrapper', wrapperRenderer);
};
