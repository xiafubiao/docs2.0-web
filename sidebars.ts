import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started/quick-start',
        'getting-started/what-is-primus',
        'getting-started/why-primus',
      ],
    },
    {
      type: 'category',
      label: 'Core Concepts',
      items: [
        'core-concepts/zktls-explained',
        'core-concepts/zkfhe-network',
      ],
    },
    {
      type: 'category',
      label: 'Data Verification',
      items: [
        'data-verification/developer-hub',
        {
          type: 'category',
          label: 'Core SDK',
          items: ['data-verification/core-sdk/index'],
        },
        {
          type: 'category',
          label: 'zkTLS SDK',
          items: ['data-verification/zk-tls-sdk/index'],
        },
      ],
    },
    {
      type: 'category',
      label: 'Data Computation',
      items: [
        'data-computation/intro',
      ],
    },
    {
      type: 'category',
      label: 'Use Cases',
      items: [
        'use-cases/verification-use-cases',
        'use-cases/computation-use-cases',
      ],
    },
    {
      type: 'category',
      label: 'Resources',
      items: [
        'resources/error-codes',
        'resources/glossary',
      ],
    },
  ],
};

export default sidebars;
