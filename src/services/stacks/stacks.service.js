// Initializes the `stacks` service on path `/stacks`
const { Stacks } = require('./stacks.class');
const hooks = require('./stacks.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/stacks', new Stacks(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('stacks');

  service.hooks(hooks);
};
