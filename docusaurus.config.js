// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Terraform Controller',
  tagline: 'Allowing teams to self-serve cloud and application dependencies',
  url: 'https://terraform-controller.appvia.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/appvia-logo.svg',
  organizationName: 'appvia',
  projectName: 'terraform-controller-docs',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        googleAnalytics: {
          trackingID: 'UA-120919526-1',
        },
        gtag: {
          trackingID: 'UA-120919526-1',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Overview',
        items: [
          {
            type: 'doc',
            docId: 'index',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://github.com/appvia/terraform-controller',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Slack',
                href: 'https://appvia-community.slack.com',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/appvia_io',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                href: 'https://appvia.io/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/appvia',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Terraform Controller, Appvia Ltd`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
