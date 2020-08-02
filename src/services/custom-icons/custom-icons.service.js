// Initializes the `custom-icons` service on path `/custom-icons`
const { CustomIcons } = require('./custom-icons.class');
const createModel = require('../../models/custom-icons.model');
const hooks = require('./custom-icons.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/custom-icons', new CustomIcons(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('custom-icons');

  service.hooks(hooks);
};
