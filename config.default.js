**ملف:** `config/default.js`

```javascript
export default {
  server: {
    port: process.env.PORT || 3000,
    env: process.env.NODE_ENV || 'development'
  },
  app: {
    name: process.env.APP_NAME || 'E-Trial Viewer',
    version: process.env.APP_VERSION || '0.1.0'
  },
  cors: {
    origin: process.env.CORS_ORIGIN || '*'
  },
  logging: {
    level: process.env.LOG_LEVEL || 'info'
  }
};
```
