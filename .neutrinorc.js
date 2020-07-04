const react = require('@neutrinojs/react');

module.exports = {
  options: {
    root: __dirname,
  },
  use: [
    react({
      html: {
        title: 'Ankh'
      },
      devServer: {
        host: '0.0.0.0',
        port: 8080
      }
    })
  ],
};
