const { Service } = require('feathers-mongodb');

exports.WorkflowBlocks = class WorkflowBlocks extends Service {
  constructor(options, app) {
    super(options);
    
    app.get('mongoClient').then(db => {
      this.Model = db.collection('workflow-blocks');
    });
  }
};
