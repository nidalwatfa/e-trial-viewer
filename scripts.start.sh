**ملف:** `scripts/start.sh`

```bash
#!/bin/bash

echo "🚀 Starting E-Trial Viewer..."

# Check if .env exists, if not copy from .env.example
if [ ! -f .env ]; then
    echo "📝 Creating .env file from .env.example..."
    cp .env.example .env
fi

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Start the application
echo "✅ Starting application..."
npm start
```
