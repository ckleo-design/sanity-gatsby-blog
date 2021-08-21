export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "61212c58127d4a0e32b30d27",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-zhne8ijh",
                  apiId: "bcb50035-e1b4-43f2-833c-31d5db1217ee",
                },
                {
                  buildHookId: "61212c583aa06f3888ae32e8",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-hopkbj7t",
                  apiId: "5703a823-797b-4d71-bd18-8d1572e1df06",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/ckleo-design/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-hopkbj7t.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
