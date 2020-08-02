const { Service } = require('feathers-mongodb');

exports.Resources = class Resources extends Service {
  constructor(options, app) {
    super(options);
    
    app.get('mongoClient').then(db => {
      this.Model = db.collection('resources');
    });
  }
};
