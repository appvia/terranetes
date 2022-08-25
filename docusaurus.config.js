// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Appvia Terranetes',
  tagline:
    'Enable teams to self-serve cloud and application dependencies easily and securely',
  url: 'https://terranetes.appvia.io',
  baseUrl: '/',
  trailingSlash: true,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/appvia-logo.svg',
  organizationName: 'appvia',
  projectName: 'terranetes',
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
          path: 'docs/terranetes-controller',
          routeBasePath: 'terranetes-controller',
          sidebarPath: require.resolve('./sidebars-terranetes-controller.js'),
          editUrl: 'https://github.com/appvia/terranetes/tree/master/',
          editCurrentVersion: true,
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
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
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'tf2helm',
        path: 'docs/tf2helm',
        routeBasePath: 'tf2helm',
        sidebarPath: require.resolve('./sidebars-tf2helm.js'),
        editUrl: 'https://github.com/appvia/terranetes/tree/master/',
        editCurrentVersion: true,
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Appvia',
        logo: {
          alt: 'Appvia Logo',
          src: '/img/appvia-logo.svg',
          href: 'https://appvia.io',
        },
        items: [
          {
            to: '/terranetes-controller',
            position: 'left',
            label: 'Terranetes Controller',
          },
          {
            to: '/tf2helm',
            position: 'left',
            label: 'tf2helm',
          },
          {
            href: 'https://github.com/appvia/terranetes-controller',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Products',
            items: [
              {
                label: 'Terraform Controller',
                to: '/terranetes-controller',
              },
              {
                label: 'tf2helm',
                to: '/tf2helm',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Kubernetes Slack',
                href: 'https://kubernetes.slack.com/channels/terranetes',
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
                label: 'Wayfinder',
                href: 'https://docs.appvia.io',
              },
              {
                label: 'Krane',
                href: 'https://github.com/appvia/krane',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/appvia',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Appvia Ltd. All rights reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
