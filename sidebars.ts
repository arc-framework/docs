import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',
    'why-arc',
    'architecture',
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'getting-started/index',
        'getting-started/installation',
        'getting-started/quickstart',
        'getting-started/configuration',
      ],
    },
    {
      type: 'category',
      label: 'Platform Services',
      collapsed: true,
      link: {type: 'doc', id: 'Platform/index'},
      items: [
        'Platform/gateway',
        'Platform/messaging',
        'Platform/persistence',
        'Platform/caching',
        'Platform/telemetry',
        'Platform/secrets',
        'Platform/feature-flags',
        'Platform/auth',
        'Platform/storage',
        'Platform/search',
      ],
    },
    {
      type: 'category',
      label: 'Observability',
      collapsed: true,
      link: {type: 'doc', id: 'Observability/index'},
      items: [
        'Observability/logging',
        'Observability/metrics',
        'Observability/tracing',
        'Observability/dashboards',
      ],
    },
    {
      type: 'category',
      label: 'CLI Reference',
      collapsed: true,
      link: {type: 'doc', id: 'CLI/index'},
      items: [
        'CLI/workspace-commands',
        'CLI/customization',
      ],
    },
    'services',
    'stack',
  ],
};

export default sidebars;
