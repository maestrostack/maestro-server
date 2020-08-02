const assert = require('assert');
const app = require('../../src/app');

describe('\'block-types\' service', () => {
  it('registered the service', () => {
    const service = app.service('block-types');

    assert.ok(service, 'Registered the service');
  });
});
