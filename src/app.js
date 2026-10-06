const express = require('express');

function createApp() {
  const app = express();

  app.get('/ping', (req, res) => {
    res.json({ message: 'pong' });
  });

  app.get('/health', (req, res) => {
    res.json({ app: 'pingpong', status: 'ok' });
  });

  return app;
}

module.exports = createApp;
