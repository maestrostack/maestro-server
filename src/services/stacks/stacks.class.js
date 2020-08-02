const { Service } = require('feathers-mongodb');

exports.Stacks = class Stacks extends Service {
  constructor(options, app) {
    super(options);
    
    app.get('mongoClient').then(db => {
      this.Model = db.collection('stacks');
    });
  }
};
