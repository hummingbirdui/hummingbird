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
        name: "Select",
        path: "/components/select",
      },
      {
        name: "File Input",
        path: "/components/file-input",
      },
      {
        name: "Checkbox",
        path: "/components/checkbox",
      },
      {
        name: "Radio",
        path: "/components/radio",
      },
      {
        name: "Switch",
        path: "/components/switch",
      },
      {
        name: "Range",
        path: "/components/range",
      },
      {
        name: "Badge",
        path: "/components/badge",
      },
      {
        name: "Alert",
        path: "#",
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
