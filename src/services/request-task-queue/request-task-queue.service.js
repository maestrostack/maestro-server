// Initializes the `request-task-queue` service on path `/request-task-queue`
const { RequestTaskQueue } = require('./request-task-queue.class');
const hooks = require('./request-task-queue.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/request-task-queue', new RequestTaskQueue(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('request-task-queue');

  service.hooks(hooks);
};
