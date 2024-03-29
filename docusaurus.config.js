// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'GTTP Documentation',
  tagline: 'Go Text Template Parser',
  favicon: 'img/favicon.jpeg',

  // Set the production url of your site here
  url: 'https://docs.gttp.dev',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'gttp-cli', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  scripts: [
    {src: 'https://a.marvinjwendt.dev/js/script.js', defer: true, 'data-domain': 'docs.gttp.dev'}
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/gttp-cli/gttp',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        hashed: true,
        indexBlog: false,
        docsRouteBasePath: '/',
        language: "en",
      }),
    ],
  ],

  themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      // image: 'img/docusaurus-social-card.jpg',
      // announcementBar: {
      //   id: "wip",
      //   content: '🚧 GTTP is a work in progress 🚧',
      //   backgroundColor: '#ff00f0',
      //   textColor: '#091E42',
      //   isCloseable: true,
      // },
      navbar: {
        title: 'GTTP Docs',
        logo: {
          alt: 'GTTP Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar',
            position: 'left',
            label: '🏠 Home',
          },
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar',
            position: 'left',
            label: '🍰 Examples',
          },
          {
            href: 'https://gttp.dev',
            label: '🌐 Website',
            position: 'right',
          },
          {
            href: 'https://gttp.dev/play',
            label: '🛝 Playground',
            position: 'right',
          },
          {
            href: 'https://github.com/gttp-cli/gttp',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'References',
            items: [
              {
                label: 'Go text/template docs',
                href: 'https://pkg.go.dev/text/template',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/Q9DKRwWPwz',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/MarvinJWendt',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Marvin Wendt`,
      },
      colorMode: {
        respectPrefersColorScheme: true,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.oceanicNext,
      },
    }),
};

export default config;
