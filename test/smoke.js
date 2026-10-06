const assert = require('assert');
const createApp = require('../src/app');

const server = createApp().listen(0, async () => {
  const base = `http://127.0.0.1:${server.address().port}`;
  try {
    const ping = await (await fetch(`${base}/ping`)).json();
    assert.strictEqual(ping.message, 'pong');

    const health = await (await fetch(`${base}/health`)).json();
    assert.strictEqual(health.status, 'ok');

    console.log('All smoke tests passed');
    server.close();
  } catch (err) {
    console.error(err);
    server.close();
    process.exit(1);
  }
});
