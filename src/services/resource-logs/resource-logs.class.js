const { Service } = require('feathers-mongodb');

exports.ResourceLogs = class ResourceLogs extends Service {
  constructor(options, app) {
    super(options);
    
    app.get('mongoClient').then(db => {
      this.Model = db.collection('resource-logs');
    });
  }
};
