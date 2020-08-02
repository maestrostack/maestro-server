// Initializes the `record-versions` service on path `/record-versions`
const { RecordVersions } = require('./record-versions.class');
const hooks = require('./record-versions.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/record-versions', new RecordVersions(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('record-versions');

  service.hooks(hooks);
};
