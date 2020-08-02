// Initializes the `block-variables` service on path `/block-variables`
const { BlockVariables } = require('./block-variables.class');
const hooks = require('./block-variables.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/block-variables', new BlockVariables(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('block-variables');

  service.hooks(hooks);
};
