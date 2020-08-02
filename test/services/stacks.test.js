const assert = require('assert');
const app = require('../../src/app');

describe('\'stacks\' service', () => {
  it('registered the service', () => {
    const service = app.service('stacks');

    assert.ok(service, 'Registered the service');
  });
});
