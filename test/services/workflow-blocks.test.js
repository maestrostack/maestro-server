const assert = require('assert');
const app = require('../../src/app');

describe('\'workflow-blocks\' service', () => {
  it('registered the service', () => {
    const service = app.service('workflow-blocks');

    assert.ok(service, 'Registered the service');
  });
});
