interface Sitemap {
  subHeader: string;
  items: {
    name: string;
    path: string;
  }[];
}

const sitemap: Sitemap[] = [
  {
    subHeader: "Getting Started",
    items: [
      {
        name: "Introduction",
        path: "#",
      },
      {
        name: "Installation",
        path: "#",
      },
      {
        name: "Tutorial",
        path: "#",
      },
    ],
  },
  {
    subHeader: "Components",
    items: [
      {
        name: "Buttons",
        path: "/components/buttons",
      },
      {
        name: "Alert",
        path: "#",
      },
      {
        name: "Badge",
        path: "/docs/components/badge",
      },
      {
        name: "Input",
        path: "#",
      },
      {
        name: "Dropdown",
        path: "#",
      },
    ],
  },
];

export default sitemap;
