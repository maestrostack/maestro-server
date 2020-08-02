const assert = require('assert');
const app = require('../../src/app');

describe('\'record-deletions\' service', () => {
  it('registered the service', () => {
    const service = app.service('record-deletions');

    assert.ok(service, 'Registered the service');
  });
});
