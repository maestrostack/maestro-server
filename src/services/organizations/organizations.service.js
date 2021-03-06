// Initializes the `organizations` service on path `/organizations`
const { Organizations } = require('./organizations.class');
const hooks = require('./organizations.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/organizations', new Organizations(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('organizations');

  service.hooks(hooks);
};
