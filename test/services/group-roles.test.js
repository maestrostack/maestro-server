const assert = require('assert');
const app = require('../../src/app');

describe('\'group-roles\' service', () => {
  it('registered the service', () => {
    const service = app.service('group-roles');

    assert.ok(service, 'Registered the service');
  });
});
