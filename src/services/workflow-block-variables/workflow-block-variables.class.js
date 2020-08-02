const { Service } = require('feathers-mongodb');

exports.WorkflowBlockVariables = class WorkflowBlockVariables extends Service {
  constructor(options, app) {
    super(options);
    
    app.get('mongoClient').then(db => {
      this.Model = db.collection('workflow-block-variables');
    });
  }
};
