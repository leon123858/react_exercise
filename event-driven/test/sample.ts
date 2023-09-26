import { test, mock } from 'node:test';
import assert from 'node:assert';
import fs from 'node:fs';

/**
 * Mocks the readFile method of the fs module to return 'Hello World'
 * @function
 * @async
 * @returns {string} - Returns 'Hello World'
 */
mock.method(fs, 'readFile', async () => 'Hello World');

/**
 * A synchronous passing test that checks if the readFile method of the fs module returns 'Hello World'
 * @function
 * @async
 * @param {Object} t - The test object
 * @returns {void}
 */
test('synchronous passing test', async t => {
  // This test passes because it does not throw an exception.
  assert.strictEqual(await fs.readFile('a.txt',()=>{}), 'Hello World');
});