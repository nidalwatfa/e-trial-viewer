

```javascript
import express from 'express';

const router = express.Router();

// API Routes
router.get('/status', (req, res) => {
  res.json({
    success: true,
    data: {
      status: 'operational',
      uptime: process.uptime(),
      timestamp: new Date().toISOString()
    }
  });
});

router.get('/version', (req, res) => {
  res.json({
    success: true,
    data: {
      version: '0.1.0',
      name: 'E-Trial Viewer'
    }
  });
});

export default router;
```
