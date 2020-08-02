const { Service } = require('feathers-mongodb');

exports.GroupRoles = class GroupRoles extends Service {
  constructor(options, app) {
    super(options);
    
    app.get('mongoClient').then(db => {
      this.Model = db.collection('group-roles');
    });
  }
};
