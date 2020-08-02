// Initializes the `request-activities` service on path `/request-activities`
const { RequestActivities } = require('./request-activities.class');
const hooks = require('./request-activities.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/request-activities', new RequestActivities(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('request-activities');

  service.hooks(hooks);
};
