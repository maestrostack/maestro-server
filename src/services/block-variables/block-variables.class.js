const { Service } = require('feathers-mongodb');

exports.BlockVariables = class BlockVariables extends Service {
  constructor(options, app) {
    super(options);
    
    app.get('mongoClient').then(db => {
      this.Model = db.collection('block-variables');
    });
  }
};
