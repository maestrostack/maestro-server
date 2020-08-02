const assert = require('assert');
const app = require('../../src/app');

describe('\'block-variables\' service', () => {
  it('registered the service', () => {
    const service = app.service('block-variables');

    assert.ok(service, 'Registered the service');
  });
});
