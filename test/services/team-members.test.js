const assert = require('assert');
const app = require('../../src/app');

describe('\'team-members\' service', () => {
  it('registered the service', () => {
    const service = app.service('team-members');

    assert.ok(service, 'Registered the service');
  });
});
