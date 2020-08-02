const assert = require('assert');
const app = require('../../src/app');

describe('\'request-task-queue\' service', () => {
  it('registered the service', () => {
    const service = app.service('request-task-queue');

    assert.ok(service, 'Registered the service');
  });
});
