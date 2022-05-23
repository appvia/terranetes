// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Appvia Terranetes',
  tagline: 'Enable teams to self-serve cloud and application dependencies easily and securely',
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
          path: 'docs/terraform-controller',
          routeBasePath: 'terraform-controller',
          sidebarPath: require.resolve('./sidebars-terraform-controller.js'),
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
            to: '/terraform-controller',
            position: 'left',
            label: 'Terraform Controller',
          },
          {
            to: '/tf2helm',
            position: 'left',
            label: 'tf2helm',
          },
          {
            href: 'https://github.com/appvia',
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
                to: '/terraform-controller',
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
                label: 'Slack',
                href: 'https://join.slack.com/t/appvia-community/shared_invite/zt-19ek5zinn-06E8fmpatKQlyHdQQDkzeQ',
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
