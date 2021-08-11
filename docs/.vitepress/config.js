module.exports = {
  base: '/',
  lang: 'en-US',
  title: 'Asura',
  description: 'License Management Plugin for Oxygen Builder Design Sets Creator',

  head: [
    ['meta', { property: 'og:title', content: 'Asura' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:image', content: 'https://i1.wp.com/i.ytimg.com/vi/bxdkdLZDFlQ/maxresdefault.jpg?ssl=1' }],
    ['meta', { property: 'og:image:secure_url', content: 'https://i1.wp.com/i.ytimg.com/vi/bxdkdLZDFlQ/maxresdefault.jpg?ssl=1' }],
    ['meta', { property: 'og:image:width', content: '1280' }],
    ['meta', { property: 'og:image:height', content: '720' }],
    ['meta', { property: 'og:image:alt', content: 'License Management Plugin for Oxygen Builder Design Sets Creator' }],
    ['link', { rel: 'icon', href: 'https://i1.wp.com/raw.githubusercontent.com/oxyrealm/asura-docs/main/docs/images/asura-banner.png?ssl=1' }],
  ],

  themeConfig: {
    repo: 'oxyrealm/asura-docs',
    docsDir: 'docs',

    editLinks: true,
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: 'Last Updated',

    nav: [
      { text: 'Download Asura', link: 'https://go.oxyrealm.com/asura' },
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
