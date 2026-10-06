# pingpong

Petite app web ping/pong (Express).

```bash
npm install
npm start
npm test
```

- `GET /ping` — répond `{"message": "pong"}`
- `GET /health`

## Review bot

Un commentaire `/review` sur une Pull Request déclenche la chaîne de workflows
`review` → `build` → `test`.
