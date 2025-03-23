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
        name: "Text Field",
        path: "/components/text-field",
      },
      {
        name: "Floating labels",
        path: "/components/floating-labels",
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
