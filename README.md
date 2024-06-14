# Vite Project

This is a web agency website with aesthetic designs and animations, built using React and Vite. It includes modern tools like TailwindCSS, Locomotive Scroll, and Framer Motion to create an optimized and interactive web application.

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Development](#development)
- [Build](#build)
- [Preview](#preview)
- [Linting](#linting)
- [Dependencies](#dependencies)
- [Dev Dependencies](#dev-dependencies)
- [Project Structure](#project-structure)
- [Deployment](#deployment)
- [License](#license)

## Description

This project is a web agency website designed with aesthetic visuals and animations to create an engaging user experience. The website leverages modern web development technologies and libraries to ensure smooth performance and maintainability.

## Installation

First, clone the repository and install the dependencies:

```sh
git clone https://github.com/yourusername/vite-project.git
cd vite-project
npm install
```

## Development

To start the development server, run:

```sh
npm run dev
```

This will start Vite's development server, allowing you to view your project at `http://localhost:3000`.

## Build

To create a production build, run:

```sh
npm run build
```

This will output the optimized production build to the `dist` directory.

## Preview

To preview the production build, run:

```sh
npm run preview
```

This will start a local server to preview the production build.

## Linting

To lint the project files, run:

```sh
npm run lint
```

This will run ESLint on your project, checking for any issues in JavaScript and JSX files.

## Dependencies

- [React](https://reactjs.org/) - ^18.2.0
- [React DOM](https://reactjs.org/docs/react-dom.html) - ^18.2.0
- [React Router DOM](https://reactrouter.com/) - ^6.23.1
- [Framer Motion](https://www.framer.com/motion/) - ^11.2.6
- [Locomotive Scroll](https://github.com/locomotivemtl/locomotive-scroll) - ^5.0.0-beta.13
- [React Icons](https://react-icons.github.io/react-icons/) - ^5.2.1
- [TailwindCSS Filters](https://github.com/benface/tailwindcss-filters) - ^3.0.0

## Dev Dependencies

- [Vite](https://vitejs.dev/) - ^5.2.13
- [TailwindCSS](https://tailwindcss.com/) - ^3.4.3
- [Autoprefixer](https://github.com/postcss/autoprefixer) - ^10.4.19
- [PostCSS](https://postcss.org/) - ^8.4.38
- [ESLint](https://eslint.org/) - ^8.57.0
- [ESLint Plugin React](https://github.com/yannickcr/eslint-plugin-react) - ^7.34.1
- [ESLint Plugin React Hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks) - ^4.6.0
- [ESLint Plugin React Refresh](https://github.com/facebook/react) - ^0.4.6
- [@types/react](https://www.npmjs.com/package/@types/react) - ^18.2.66
- [@types/react-dom](https://www.npmjs.com/package/@types/react-dom) - ^18.2.22
- [@vitejs/plugin-react](https://github.com/vitejs/vite/tree/main/packages/plugin-react) - ^4.2.1

## Project Structure

```
vite-project/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Home.jsx
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   ├── Services.jsx
│   │   ├── ourWork.jsx
│   │   ├── aboutUs.jsx
│   │   ├── insights.jsx
│   │   └── contact.jsx
│   ├── App.js
│   └── index.js
├── vercel.json
├── package.json
└── .gitignore
```

## Deployment

This project can be deployed to Vercel. Ensure you have a `vercel.json` file in the root directory to handle routing:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

Push your changes to your repository, and Vercel will automatically deploy the project.

## License

This project is licensed under the MIT License.

---

Feel free to customize this README according to your project's specific needs.
```
