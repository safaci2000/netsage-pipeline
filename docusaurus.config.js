module.exports = {
  title: 'Netsage Pipeline Documentation',
  tagline: 'Netsage Pipeline Documentation',
  url: 'https://netsage-project.github.io',
  baseUrl: '/netsage-pipeline/',
  favicon: 'img/favicon.ico',
  organizationName: 'netsage-project', // Usually your GitHub org/user name.
  projectName: 'netsage-pipeline', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'NetSage Pipeline Documentation',
      logo: {
        alt: 'NetSage Logo',
        src: 'img/logo.png',
      },
      links: [
        {
          to: 'docs/install',
          activeBasePath: 'docs',
          label: 'Pipeline Documentation',
          position: 'left',
        },
        {
          href: 'https://netsage-project.github.io/netsage-grafana-configs/',
          label: 'Dashboard Documentation',
          position: 'left',
        },
        {
          href: 'https://github.com/netsage-project/netsage-pipeline/',
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
            {
              label: 'Style Guide',
              to: 'docs/doc1',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/netsage-project/netsage-pipeline/edit/master/'
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/netsage-project/netsage-pipeline/edit/master/blog/'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
