const { Service } = require('feathers-mongodb');

exports.UserRoles = class UserRoles extends Service {
  constructor(options, app) {
    super(options);
    
    app.get('mongoClient').then(db => {
      this.Model = db.collection('user-roles');
    });
  }
};
