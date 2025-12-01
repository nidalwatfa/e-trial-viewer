**ملف:** `docs/API.md`

```markdown
# API Documentation

## Base URL
```
http://localhost:3000
```

## Endpoints

### 1. Root Endpoint
**GET** `/`

**Response:**
```json
{
  "message": "Welcome to E-Trial Viewer API",
  "version": "0.1.0",
  "status": "running"
}
```

### 2. Health Check
**GET** `/api/health`

**Response:**
```json
{
  "status": "healthy",
  "timestamp": "2024-12-01T12:00:00.000Z"
}
```

## Error Responses

### 404 Not Found
```json
{
  "error": "Not Found",
  "message": "The requested resource was not found"
}
```

### 500 Server Error
```json
{
  "error": "Something went wrong!",
  "message": "Error details here"
}
```

## Status Codes

- `200` - Success
- `404` - Not Found
- `500` - Server Error
``
