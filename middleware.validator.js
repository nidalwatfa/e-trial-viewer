

```javascript
const validateRequest = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    
    if (error) {
      return res.status(400).json({
        success: false,
        error: {
          message: 'Validation Error',
          details: error.details.map(detail => detail.message)
        }
      });
    }
    
    next();
  };
};

const validateQueryParams = (allowedParams) => {
  return (req, res, next) => {
    const invalidParams = Object.keys(req.query).filter(
      param => !allowedParams.includes(param)
    );
    
    if (invalidParams.length > 0) {
      return res.status(400).json({
        success: false,
        error: {
          message: 'Invalid query parameters',
          invalidParams
        }
      });
    }
    
    next();
  };
};

export { validateRequest, validateQueryParams };
```
