import { themes as prismThemes } from 'prism-react-renderer';

import type * as Preset from '@docusaurus/preset-classic';
import type { Config } from '@docusaurus/types';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'A.R.C (Agentic Reasoning Core)',
  tagline:
    'An open-source, modular, Platform-in-a-Box for distributed intelligence.',
  favicon: 'img/arc-icon.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true,
  },

  url: 'https://arc-framework.github.io',
  baseUrl: '/arc-docs/',

  // GitHub pages deployment config.
  organizationName: 'arc-framework',
  projectName: 'arc-docs',

  onBrokenLinks: 'throw',
  onBrokenAnchors: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          lastVersion: 'current',
          versions: {
            current: {
              label: '0.1.0',
            },
          },
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/arc-framework/arc-docs/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/arc-icon.png',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'A.R.C.',
      logo: {
        alt: 'A.R.C. Logo',
        src: 'img/arc-icon.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          to: '/docs/getting-started/',
          label: 'Getting Started',
          position: 'left',
        },
        {
          to: '/docs/services',
          label: 'Services',
          position: 'left',
        },
        {
          href: 'https://github.com/arc-framework/arc-docs',
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
            { label: 'Getting Started', to: '/docs/getting-started/' },
            { label: 'Platform Services', to: '/docs/Platform/' },
            { label: 'CLI Reference', to: '/docs/CLI/' },
          ],
        },
        {
          title: 'Community',
          items: [
            { label: 'GitHub', href: 'https://github.com/arc-framework' },
            { label: 'Contributing', href: 'https://github.com/arc-framework/.github/blob/main/CONTRIBUTING.md' },
          ],
        },
        {
          title: 'More',
          items: [
            { label: 'Professional Services', to: '/docs/services' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} A.R.C (Agentic Reasoning Core)`,
    },
    prism: {
      theme: prismThemes.gruvboxMaterialLight,
      darkTheme: prismThemes.gruvboxMaterialDark,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
