const { Service } = require('feathers-mongodb');

exports.RecordVersions = class RecordVersions extends Service {
  constructor(options, app) {
    super(options);
    
    app.get('mongoClient').then(db => {
      this.Model = db.collection('record-versions');
    });
  }
};
