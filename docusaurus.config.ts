// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;

const config: Config = {
  title: 'Appvia Terranetes Controller',
  tagline:
    'Enable teams to self-serve cloud and application dependencies easily and securely',
  url: 'https://terranetes.appvia.io',
  baseUrl: '/',
  trailingSlash: true,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon-docs.svg',
  organizationName: 'appvia',
  projectName: 'terranetes',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  themeConfig: {
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    navbar: {
      title: '',
      logo: {
        alt: 'Terranetes Logo',
        src: '/img/index/terranetes-light.svg',
        srcDark: '/img/index/terranetes-dark.svg',
        href: '/',
      },
      items: [
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
              label: 'Terranetes Controller',
              href: 'https://www.appvia.io/terranetes',
            },
            {
              label: 'Wayfinder',
              href: 'https://www.appvia.io/wayfinder',
            },
            {
              label: 'Tako',
              href: 'https://www.appvia.io/tako',
            },
            {
              label: 'Krane',
              href: 'https://github.com/appvia/krane',
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
              label: 'GitHub',
              href: 'https://github.com/appvia',
            },
            {
              label: 'Blog',
              href: 'https://www.appvia.io/blog',
            },
            {
              label: 'YouTube',
              href: 'https://www.youtube.com/@appvia',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Appvia Ltd. All rights reserved.`,
    },
    prism: {
      additionalLanguages: ['powershell', 'hcl'],
      darkTheme: darkCodeTheme,
      theme: lightCodeTheme,
    },
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        blog: {},
        docs: {
          id: 'terranetes-controller',
          path: 'docs/terranetes-controller',
          routeBasePath: 'terranetes-controller',
          sidebarPath: require.resolve('./sidebars-terranetes-controller.ts'),
          editUrl: 'https://github.com/appvia/terranetes/tree/master/',
          editCurrentVersion: true,
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          breadcrumbs: true,
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
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        indexDocs: true,
        indexBlog: false,
        docsPluginIdForPreferredVersion: "terranetes-controller",
        docsRouteBasePath: "terranetes-controller"
      }
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'tf2helm',
        path: 'docs/tf2helm',
        routeBasePath: 'tf2helm',
        sidebarPath: require.resolve('./sidebars-tf2helm.ts'),
        editUrl: 'https://github.com/appvia/terranetes/tree/master/',
        editCurrentVersion: true,
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        breadcrumbs: true,
      },
    ],
  ],
  stylesheets: [
    {
      href: "https://use.fontawesome.com/releases/v5.11.0/css/all.css",
      type: "text/css",
    },
  ],  
};

export default config;
