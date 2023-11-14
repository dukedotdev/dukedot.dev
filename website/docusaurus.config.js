const math = require("remark-math");
const katex = require("rehype-katex");

const internetProfiles = {
  github: {
    label: "GitHub",
    href: "https://github.com/dukedotdev",
  },
  email: {
    label: "Email",
    href: "mailto:admin@dukedot.dev",
  },
  projects: {
    label: "Projects",
    to: "projects",
  },
};

module.exports = {
  title: "dukedotdev",
  tagline:
    "I am a Software Engineer and Rec Room Circuiteer who enjoys coding in their freetime.",
  url: "https://dukedot.dev",
  baseUrl: "/",
  onBrokenLinks: "throw",
  favicon: "img/logo.png",
  organizationName: "dukedotdev",
  projectName: "portfolio",
  themeConfig: {
    colorMode: {
      defaultMode: "dark",
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      hideOnScroll: true,
      title: "dukedotdev",
      logo: {
        alt: "dukedotdev",
        src: "img/logo.png",
        target: "_self",
      },
      items: [
        { to: "projects/", label: "Projects", position: "right" },
      ],
    },
    footer: {
      links: [
        {
          title: "Connect",
          items: [
            internetProfiles.github,
            internetProfiles.email,
          ],
        },
        {
          title: "Discover",
          items: [
            internetProfiles.projects,
          ],
        },
      ],
      // I built this website for my own personal use, but you are free to use it so long as you credit me. You can do so by linking back to evantay.com :)
      copyright: `<a href="https://evantay.com">Design by Evan Tay</a> • <a href="https://github.com/DigiPie/kaya-folio/commits/main">Updated ${new Date().toLocaleDateString()}</a>`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X",
      crossorigin: "anonymous",
    },
  ],
  plugins:    [
    async function tailwindPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
  ],
};
