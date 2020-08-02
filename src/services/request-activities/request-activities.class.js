const { Service } = require('feathers-mongodb');

exports.RequestActivities = class RequestActivities extends Service {
  constructor(options, app) {
    super(options);
    
    app.get('mongoClient').then(db => {
      this.Model = db.collection('request-activities');
    });
  }
};
