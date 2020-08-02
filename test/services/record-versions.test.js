const assert = require('assert');
const app = require('../../src/app');

describe('\'record-versions\' service', () => {
  it('registered the service', () => {
    const service = app.service('record-versions');

    assert.ok(service, 'Registered the service');
  });
});
