module.exports = {
  base: '/',
  lang: 'en-US',
  title: 'Asura',
  description: 'Documentation for Asura plugin.',


  themeConfig: {
    repo: 'oxyrealm/asura-docs',
    docsDir: 'docs',

    editLinks: true,
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: 'Last Updated',

    nav: [
      { text: 'Guide', link: '/guide/getting-started', activeMatch: '^/guide/' },
      {
        text: 'Release Notes',
        link: 'https://dplugins.com/products/asura/?changelog=1'
      }
    ],
    sidebar: {
      '/guide/': [
        {
          text: 'Introduction',
          children: [
            { text: 'Why Asura?', link: '/guide/why' },
            { text: 'Getting Started', link: '/guide/getting-started' },
            { text: 'API', link: '/guide/api' },
            { text: 'Remote', link: '/guide/remote' },
            { text: 'Design Sets', link: '/guide/design-set' },
            { text: 'Generator', link: '/guide/generator' },
            { text: 'License', link: '/guide/license' },
            { text: 'E-Commerce Integration', link: '/guide/ecommerce-integration' },
          ]
        },
        {
          text: 'Asura Connector',
          children: [
            { text: 'Getting Started', link: '/guide/asura-connector' },
          ]
        }
      ],
    }
  }
}
