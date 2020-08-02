// Initializes the `team-members` service on path `/team-members`
const { TeamMembers } = require('./team-members.class');
const hooks = require('./team-members.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/team-members', new TeamMembers(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('team-members');

  service.hooks(hooks);
};
