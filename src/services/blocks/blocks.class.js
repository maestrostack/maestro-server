const { Service } = require('feathers-mongodb');

exports.Blocks = class Blocks extends Service {
  constructor(options, app) {
    super(options);
    
    app.get('mongoClient').then(db => {
      this.Model = db.collection('blocks');
    });
  }
};
