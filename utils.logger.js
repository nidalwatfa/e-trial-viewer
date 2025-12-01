**ملف:** `utils/logger.js`

```javascript
const logLevels = {
  error: 0,
  warn: 1,
  info: 2,
  debug: 3
};

const currentLevel = process.env.LOG_LEVEL || 'info';

const logger = {
  error: (message, ...args) => {
    if (logLevels.error <= logLevels[currentLevel]) {
      console.error(`[ERROR] ${new Date().toISOString()} - ${message}`, ...args);
    }
  },

  warn: (message, ...args) => {
    if (logLevels.warn <= logLevels[currentLevel]) {
      console.warn(`[WARN] ${new Date().toISOString()} - ${message}`, ...args);
    }
  },

  info: (message, ...args) => {
    if (logLevels.info <= logLevels[currentLevel]) {
      console.log(`[INFO] ${new Date().toISOString()} - ${message}`, ...args);
    }
  },

  debug: (message, ...args) => {
    if (logLevels.debug <= logLevels[currentLevel]) {
      console.log(`[DEBUG] ${new Date().toISOString()} - ${message}`, ...args);
    }
  }
};

export default logger;
```
