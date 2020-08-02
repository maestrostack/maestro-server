// Initializes the `workflow-blocks` service on path `/workflow-blocks`
const { WorkflowBlocks } = require('./workflow-blocks.class');
const hooks = require('./workflow-blocks.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/workflow-blocks', new WorkflowBlocks(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('workflow-blocks');

  service.hooks(hooks);
};
