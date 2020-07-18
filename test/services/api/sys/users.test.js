const assert = require('assert');
const app = require('../../../../src/app');

describe('\'api/sys/users\' service', () => {
  it('registered the service', () => {
    const service = app.service('api-sys-users');

    assert.ok(service, 'Registered the service');
  });
});
