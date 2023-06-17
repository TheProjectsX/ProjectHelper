export const titleArray = {
  starter: "Getting Started with React JS",
  hooks: "React Hooks - React JS Helper",
  routes: "React Router Dom",
  github: "React Project to Github - React JS Helper",
};

export const scriptSubSet = [
  {
    title: "Getting Started",
    tag: "starter",
    path: "/framework/reactjs",
  },
  // {
  //   title: "Hooks",
  //   tag: "hooks",
  //   path: "/framework/reactjs/hooks",
  // },
  {
    title: "React Router",
    tag: "routes",
    path: "/framework/reactjs/routes",
  },
  {
    title: "Github Pages",
    tag: "github",
    path: "/framework/reactjs/github",
  },
];

export const helperScripts = {
  starter: [
    {
      topTitle: "# Getting started with React JS",
      title: "Install Node JS",
      desc: [
        "To be able to Use React JS, you need to install Node JS in your PC. Download your required Node JS installer from the Below Link",
      ],
      lang: "text",
      code: "https://nodejs.org/en/download",
    },
    {
      title: "create-react-app",
      desc: [
        "Now Create your first React JS app using below command. Run it on Any Command Line",
      ],
      lang: "shell",
      code: "npx create-react-app my-app",
    },
    {
      desc: ["To create app in current Directory, run:"],
      lang: "shell",
      code: "npx create-react-app .",
    },
    {
      desc: ["If failed to create app, Run Below Commands"],
      lang: "shell",
      code: "npm install create-react-app\nnpx create-react-app my-app",
    },
    {
      title: "Happy Coding!",
      desc: [
        "Now start your React JS app Creating Journey.\nBest of luck!\n\n",
      ],
    },
  ],
  hooks: [],
  routes: [
    {
      topTitle: "# React Router Dom",
      title: "Install react-router-dom",
      desc: ["Install react-router-dom with npm or yarn"],
      lang: "shell",
      code: `npm install react-router-dom # For npm Users\n\nyarn add react-router-dom # For yarn Users`,
    },
    {
      title: "Basic Routing",
      desc: ["First, Import the required Packages in Your Project"],
      lang: "jsx",
      code: `import {\n  BrowserRouter as Router,\n  Routes,\n  Route,\n  Link\n} from "react-router-dom";`,
    },
    {
      title: "Using the Router",
      desc: [
        "First, Wrap your components with <code>&lt;Router&gt;</code> Tag",
        "Then, wrap your Route with <code>&lt;Routes&gt;</code> tag",
        "Then, use <code>&lt;Route&gt;</code> tag to Spacify your Route Path and Component to Render",
      ],
      lang: "jsx",
      code: `<Router>\n  <Navbar />\n\n  <Routes>\n    <Route path="/" element={<Home />} />\n    <Route path="/about" element={<About />} />\n    <Route path="/users" element={<Users />} />\n  </Routes>\n</Router>;`,
    },
    {
      title: "Change the Route",
      desc: [
        "To change Route, use <code>&lt;Link&gt;</code> Tag",
        "The <code>to</code> Props will take the Path to Go. All else is same as Any other HTML tags",
      ],
      lang: "jsx",
      code: `import { Link } from "react-router-dom"; // Import Link Module from react-router-dom Package\n\n<Link to="/">Home</Link>\n<Link to="/about">About</Link>\n<Link to="/about/author">About Author</Link>`,
    },
    {
      title: "Full App.js Page Example:",
      desc: [],
      lang: "jsx",
      code: `import React from "react";\nimport {\n    Home,\n    About,\n    Users\n} from "./components";\nimport {\n  BrowserRouter as Router,\n  Routes,\n  Route,\n  Link\n} from "react-router-dom";\n\nexport default function App() {\n  return (\n    <Router>\n      <div>\n        <nav>\n          <ul>\n            <li>\n              <Link to="/">Home</Link>\n            </li>\n            <li>\n              <Link to="/about">About</Link>\n            </li>\n            <li>\n              <Link to="/users">Users</Link>\n            </li>\n          </ul>\n        </nav>\n\n        {/* A <Routes> looks through its children <Route>s and\n            renders the first one that matches the current URL. */}\n        <Routes>\n          <Route path="/" element={<Home />}>\n          <Route path="/about" element={<About />}>\n          <Route path="/users" element={<Users />}>\n        </Routes>\n      </div>\n    </Router>\n  );\n}\n`,
    },
  ],
  github: [
    {
      topTitle: "# Upload React JS Project on GitHub",
      desc: ["Install gh-pages using NPM First!"],
      lang: "shell",
      code: `npm install gh-pages --save-dev`,
    },
    {
      title: "Add a homepage property to the package.json file.",
      desc: [
        "Edit your <code>package.json</code> file and Add the homepage property.",
      ],
      lang: "json",
      code: `{\n  "name": "my-app",\n  "version": "0.1.0",\n+ "homepage": "https://gitname.github.io/react-gh-pages",\n  "private": true,`,
    },
    {
      title: "Add deployment scripts to the package.json file",
      desc: [
        "Add a <code>predeploy</code> property and a <code>deploy</code> property to the scripts object of your <code>package.json</code> file.",
      ],
      lang: "shell",
      code: `"scripts": {\n+   "predeploy": "npm run build",\n+   "deploy": "gh-pages -d build",\n    "start": "react-scripts start",\n    "build": "react-scripts build",`,
    },
    {
      title: "Upload to GitHub",
      desc: ["Add a remote that points to the GitHub repository"],
      lang: "shell",
      code: `git remote add origin https://github.com/gitname/react-gh-pages.git`,
    },
    {
      title: "",
      desc: ["Push the React app to the GitHub repository"],
      lang: "shell",
      code: `npm run deploy`,
    },
    {
      title: "",
      desc: ["Push the React app to the GitHub repository with a Message"],
      lang: "shell",
      code: `npm run deploy -- -m "Deploy React app to GitHub Pages"`,
    },
    {
      title: "Configer the Github Page",
      desc: [
        "Go to Repository > Settings > Pages\nSet Branch to <code>gh-pages</code> and Folder to <code>/(root)</code>",
      ],
      lang: "shell",
      code: `gh-pages\n/(root)`,
    },
    {
      title: "Store the React app's source code on GitHub (Optional)",
      desc: ["Add and Commit your Code"],
      lang: "shell",
      code: `git add .\ngit commit -m "Configure React app for deployment to GitHub Pages"`,
    },
    {
      title: "",
      desc: ["Push to Main Branch"],
      lang: "shell",
      code: `git branch -M main\ngit push origin main`,
    },
    {
      title: "",
      desc: ["If failed to Push to Main branch, it is because the security reasons", "Pull first, then push. It should solve the problem", "Else, Push by Force <code>--force</code>"],
      lang: "shell",
      code: `git pull origin main\ngit push origin main\n\n# If does not work, Push by force\ngit push origin main --force`,
    },
    {
      title: "",
      desc: ["Or Push to master Branch"],
      lang: "shell",
      code: `git push origin master`,
    },
  ],
};
