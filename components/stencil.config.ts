import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'components',
  outputTargets:[
    {
      type: 'dist'
    },
    {
      type: 'www',
      serviceWorker: null
    },
    {
      type: 'dist',
      buildDir: '../../admin/src/components'
    },
  ],
  excludeSrc: [],
  plugins: [
    sass()
  ]
};
