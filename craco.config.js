/* eslint-disable @typescript-eslint/no-var-requires,no-undef */
const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@core': path.resolve(__dirname, 'src/core'),
      '@constants': path.resolve(__dirname, 'src/core/constants'),
      '@store': path.resolve(__dirname, 'src/core/store'),
      '@models': path.resolve(__dirname, 'src/core/models'),

      '@shared': path.resolve(__dirname, 'src/shared'),
      '@views': path.resolve(__dirname, 'src/views'),
    },
  },
};
