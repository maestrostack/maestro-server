// Initializes the `block-types` service on path `/block-types`
const { BlockTypes } = require('./block-types.class');
const hooks = require('./block-types.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/block-types', new BlockTypes(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('block-types');

  service.hooks(hooks);
};
