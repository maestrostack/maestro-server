const { Service } = require('feathers-mongodb');

exports.RequestTaskQueue = class RequestTaskQueue extends Service {
  constructor(options, app) {
    super(options);
    
    app.get('mongoClient').then(db => {
      this.Model = db.collection('request-task-queue');
    });
  }
};
