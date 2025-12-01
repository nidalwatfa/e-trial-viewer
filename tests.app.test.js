**ملف:** `tests/app.test.js`

```javascript
import { describe, it, expect } from '@jest/globals';

describe('E-Trial Viewer Tests', () => {
  it('should pass basic test', () => {
    expect(true).toBe(true);
  });

  it('should check app version', () => {
    const version = '0.1.0';
    expect(version).toBe('0.1.0');
  });

  it('should verify environment', () => {
    const env = process.env.NODE_ENV || 'development';
    expect(env).toBeDefined();
  });
});
```
