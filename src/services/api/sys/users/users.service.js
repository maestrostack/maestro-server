// Initializes the `api/sys/users` service on path `/api-sys-users`
const { Users } = require('./users.class');
const hooks = require('./users.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/api-sys-users', new Users(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('api-sys-users');

  service.hooks(hooks);
};
