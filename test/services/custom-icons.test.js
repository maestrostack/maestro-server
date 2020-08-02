const assert = require('assert');
const app = require('../../src/app');

describe('\'custom-icons\' service', () => {
  it('registered the service', () => {
    const service = app.service('custom-icons');

    assert.ok(service, 'Registered the service');
  });
});
