const Routes = [
  {
    header: "Frontend",
    routes: [
      {
        title: "HTML",
        path: `/frontend/html`,
        subRoutes: [
          {
            title: "Getting Started",
            path: "/frontend/html",
          },
          {
            title: "Text Formatting",
            path: "/frontend/html/formatText",
          },
          {
            title: "HTML Table",
            path: "/frontend/html/table",
          },
        ],
      },
      {
        title: "CSS",
        path: `/frontend/css`,
        subRoutes: [],
      },
      {
        title: "JavaScript",
        path: `/frontend/javascript`,
        subRoutes: [],
      },
    ],
  },
  {
    header: "Frameworks",
    routes: [
      {
        title: "Tailwind",
        path: `/framework/tailwind`,
        subRoutes: [],
      },
      {
        title: "Bootstrap",
        path: `/framework/bootstrap`,
        subRoutes: [],
      },
      {
        title: "React JS",
        path: `/framework/reactjs`,
        subRoutes: [
          {
            title: "Getting Started",
            path: "/framework/reactjs",
          },
          // {
          //   title: "Hooks",
          //   path: "/framework/reactjs/hooks",
          // },
          {
            title: "React Router",
            path: "/framework/reactjs/router",
          },
          {
            title: "Github Pages",
            path: "/framework/reactjs/github",
          },
        ],
      }
    ],
  },
];

export default Routes;
