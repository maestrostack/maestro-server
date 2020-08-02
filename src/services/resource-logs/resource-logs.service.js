// Initializes the `resource-logs` service on path `/resource-logs`
const { ResourceLogs } = require('./resource-logs.class');
const hooks = require('./resource-logs.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/resource-logs', new ResourceLogs(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('resource-logs');

  service.hooks(hooks);
};
