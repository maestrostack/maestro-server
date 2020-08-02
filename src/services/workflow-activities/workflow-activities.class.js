const { Service } = require('feathers-mongodb');

exports.WorkflowActivities = class WorkflowActivities extends Service {
  constructor(options, app) {
    super(options);
    
    app.get('mongoClient').then(db => {
      this.Model = db.collection('workflow-activities');
    });
  }
};
