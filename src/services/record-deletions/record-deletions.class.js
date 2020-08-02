const { Service } = require('feathers-mongodb');

exports.RecordDeletions = class RecordDeletions extends Service {
  constructor(options, app) {
    super(options);
    
    app.get('mongoClient').then(db => {
      this.Model = db.collection('record-deletions');
    });
  }
};
