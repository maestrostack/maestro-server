const frontend = require('./frontend');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.use('/frontend', frontend());
};
