const { authenticate } = require('@feathersjs/authentication').hooks;

const populateChildBlocks = require('../../hooks/populate-child-activities');

const testThis = require('../../hooks/test-this');

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
    all: [],
    find: [populateChildBlocks()],
    get: [populateChildBlocks()],
    create: [],
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
