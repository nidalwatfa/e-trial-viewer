

```javascript
const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';

  console.error(`[Error] ${err.stack}`);

  res.status(statusCode).json({
    success: false,
    error: {
      message: message,
      statusCode: statusCode,
      timestamp: new Date().toISOString()
    },
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  });
};

export default errorHandler;
```
