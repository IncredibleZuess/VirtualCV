@echo off
echo 🚀 Building and deploying to GitHub Pages...

echo 📦 Building the project...
call pnpm run build

echo 🌐 Deploying to GitHub Pages...
call pnpm run deploy

echo ✅ Deployment complete! Your site should be available at:
echo https://incrediblezuess.github.io/VirtualCV
pause
