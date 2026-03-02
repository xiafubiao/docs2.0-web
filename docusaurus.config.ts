import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Primus Docs',
  tagline: 'Building the Future of Data Interoperability',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://docs.primuslabs.xyz',
  baseUrl: '/',

  organizationName: 'primus-labs',
  projectName: 'docs2.0',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/primus-labs/docs2.0/tree/main/',
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/primus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Primus',
      logo: {
        alt: 'Primus Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://github.com/primus-labs',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://discord.gg/AYGSqCkZTz',
          label: 'Discord',
          position: 'right',
        },
        {
          href: 'https://dev.primuslabs.xyz',
          label: 'Developer Hub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Quick Start',
              to: '/docs/01-Getting-Started/quick-start',
            },
            {
              label: 'Core Concepts',
              to: '/docs/02-Core-Concepts/zktls-explained',
            },
            {
              label: 'Use Cases',
              to: '/docs/05-Use-Cases/verification-use-cases',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/AYGSqCkZTz',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/primus-labs',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/primuslabs',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Developer Hub',
              href: 'https://dev.primuslabs.xyz',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/primus-labs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Primus Labs. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
