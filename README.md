# VirtualCV - Carlo Barnardo's Portfolio

A modern, responsive portfolio website built with SolidJS, Vite, and Tailwind CSS, featuring a coffee-themed design with dark mode support.

## Features

- ☕ Coffee-themed design with animated splash screen
- 🌙 Dark/Light mode toggle with Monokai color scheme
- 📱 Fully responsive design
- 🎨 Font Awesome icons integration
- 🚀 Fast performance with SolidJS and Vite
- 🎯 Professional portfolio showcase

## Live Demo

Visit the live portfolio at: [https://incrediblezuess.github.io/VirtualCV](https://incrediblezuess.github.io/VirtualCV)

## Usage

```bash
$ pnpm install # or npm install or yarn install
```

### Learn more on the [Solid Website](https://solidjs.com) and come chat with us on our [Discord](https://discord.com/invite/solidjs)

## Available Scripts

In the project directory, you can run:

### `pnpm run dev`

Runs the app in the development mode.<br>
Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

### `pnpm run build`

Builds the app for production to the `dist` folder.<br>
It correctly bundles Solid in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

### `pnpm run deploy`

Builds and deploys the app to GitHub Pages.<br>
Make sure you have the `gh-pages` branch set up in your repository.

## Deployment to GitHub Pages

This project is configured for automatic deployment to GitHub Pages. You have several options:

### Option 1: Automatic Deployment (Recommended)

The project includes a GitHub Actions workflow that automatically deploys to GitHub Pages when you push to the `main` branch.

1. Push your code to the `main` branch
2. GitHub Actions will automatically build and deploy your site
3. Your site will be available at `https://incrediblezuess.github.io/VirtualCV`

### Option 2: Manual Deployment

You can also deploy manually using the included scripts:

**Windows:**
```bash
./deploy.bat
```

**Linux/macOS:**
```bash
./deploy.sh
```

**Or using pnpm directly:**
```bash
pnpm run deploy
```

### Option 3: First-time Setup

If this is your first deployment, you may need to:

1. Enable GitHub Pages in your repository settings
2. Set the source to "Deploy from a branch"
3. Select the `gh-pages` branch as the source
4. Run the deployment command

## Tech Stack

- **Framework:** SolidJS
- **Build Tool:** Vite
- **Styling:** Tailwind CSS v4
- **Icons:** Font Awesome
- **Deployment:** GitHub Pages
- **Language:** TypeScript

## Project Structure

```
src/
├── components/
│   ├── SplashScreen.tsx
│   ├── Sidebar.tsx
│   ├── HomePage.tsx
│   ├── AboutPage.tsx
│   ├── ProjectsPage.tsx
│   └── InterestsPage.tsx
├── fontawesome.ts
├── App.tsx
├── index.tsx
└── index.css
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test your changes
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

Carlo Barnardo
- Email: carlodevs@gmail.com
- LinkedIn: [Carlo Barnardo](https://www.linkedin.com/in/carlo-barnardo-563874aa/)
- GitHub: [IncredibleZuess](https://github.com/IncredibleZuess)
