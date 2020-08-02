const assert = require('assert');
const app = require('../../src/app');

describe('\'workflow-activities\' service', () => {
  it('registered the service', () => {
    const service = app.service('workflow-activities');

    assert.ok(service, 'Registered the service');
  });
});
