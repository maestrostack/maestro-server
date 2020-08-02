const { Service } = require('feathers-mongodb');

exports.Organizations = class Organizations extends Service {
  constructor(options, app) {
    super(options);
    
    app.get('mongoClient').then(db => {
      this.Model = db.collection('organizations');
    });
  }
};
