
```bash
#!/bin/bash

echo "🔧 Setting up E-Trial Viewer..."

# Create necessary directories
echo "📁 Creating directories..."
mkdir -p logs
mkdir -p data
mkdir -p tmp

# Copy environment file
if [ ! -f .env ]; then
    echo "📝 Creating .env file..."
    cp .env.example .env
    echo "✅ .env file created. Please update it with your settings."
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Make scripts executable
echo "🔐 Setting permissions..."
chmod +x scripts/*.sh

echo "✅ Setup complete!"
echo "Run 'npm start' to start the application."
```
