const assert = require('assert');
const app = require('../../src/app');

describe('\'workflow-block-variables\' service', () => {
  it('registered the service', () => {
    const service = app.service('workflow-block-variables');

    assert.ok(service, 'Registered the service');
  });
});
