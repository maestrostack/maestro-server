// Initializes the `record-deletions` service on path `/record-deletions`
const { RecordDeletions } = require('./record-deletions.class');
const hooks = require('./record-deletions.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/record-deletions', new RecordDeletions(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('record-deletions');

  service.hooks(hooks);
};
