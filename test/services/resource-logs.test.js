const assert = require('assert');
const app = require('../../src/app');

describe('\'resource-logs\' service', () => {
  it('registered the service', () => {
    const service = app.service('resource-logs');

    assert.ok(service, 'Registered the service');
  });
});
