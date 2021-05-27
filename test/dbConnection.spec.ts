import { closeDB, connectDB } from './db';

describe('Test DB connection', () => {
  afterAll(async () => {
    await closeDB();
  });

  it('should connect database successfully', async () => {
    await expect(connectDB()).resolves.toBeUndefined();
  });
});
