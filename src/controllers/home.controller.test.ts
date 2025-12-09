import request from 'supertest';
import createTestServer from '../tests/inversify-test-server.js';

describe('Test home controller', () => {
  it('should test', () => {
    const app = createTestServer();

    return request(app)
      .get('/')
      .expect(/Welcome/);
  });
});
