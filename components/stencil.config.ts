import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'components',
  outputTargets:[
    {
      type: 'dist'
    },
    {
      type: 'www',
      serviceWorker: null
    }
  ],
  excludeSrc: [],
};
