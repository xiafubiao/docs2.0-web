import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Primus Documentation',
  tagline: 'Data Interoperability for Blockchain and AI',
  favicon: 'img/favicon.ico',

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
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Primus Docs',
      items: [
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
      copyright: `Copyright © ${new Date().getFullYear()} Primus Labs.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
