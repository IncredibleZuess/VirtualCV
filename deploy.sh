#!/usr/bin/env bash

# Build and deploy script for GitHub Pages

echo "🚀 Building and deploying to GitHub Pages..."

# Build the project
echo "📦 Building the project..."
npm run build

# Deploy to GitHub Pages
echo "🌐 Deploying to GitHub Pages..."
npm run deploy

echo "✅ Deployment complete! Your site should be available at:"
echo "https://incrediblezuess.github.io/VirtualCV"
