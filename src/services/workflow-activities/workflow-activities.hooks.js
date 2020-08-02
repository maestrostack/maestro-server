const { authenticate } = require('@feathersjs/authentication').hooks;

const populateChildActivities = require('../../hooks/populate-child-activities');

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [populateChildActivities()],
    find: [populateChildActivities()],
    get: [populateChildActivities()],
    create: [populateChildActivities()],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
