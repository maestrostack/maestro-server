const { Service } = require('feathers-mongodb');

exports.TeamMembers = class TeamMembers extends Service {
  constructor(options, app) {
    super(options);
    
    app.get('mongoClient').then(db => {
      this.Model = db.collection('team-members');
    });
  }
};
