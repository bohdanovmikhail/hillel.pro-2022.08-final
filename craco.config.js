const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@core': path.resolve(__dirname, 'src/core'),
      '@shared': path.resolve(__dirname, 'src/shared'),
      '@views': path.resolve(__dirname, 'src/views'),
    },
  },
};
