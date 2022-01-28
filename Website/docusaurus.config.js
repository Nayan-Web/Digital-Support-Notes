const isDev = process.env.NODE_ENV === 'development';
const pageRef = require('./src/plugins/pageRef');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
const config = {
  i18n: {
    defaultLocale: 'en-GB',
    locales: ['en-GB']
  },
  title: 'Digital Support Services T-Level Notes',
  tagline: 'Open source, documented notes!',
  url: 'https://notes.nayanpatel.net',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Digital Support Notes',
  projectName: 'notes',
  trailingSlash: true,
  themeConfig: {
    colorMode: {
      disableSwitch: true,
    },
     announcementBar: {
       id: 'beta', // Any value that will identify this message.
       content:
         '⭐️ If you like these notes, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/PatelN123/Digital-Support-Notes">GitHub</a>',
       backgroundColor: '#fafbfc', // Defaults to `#fff`.
       textColor: '#091E42', // Defaults to `#000`.
       isCloseable: true, // Defaults to `true`.
     },
     metadata: [{name: 'Digital Support Services T-Level Notes', content: 'notes, docs'}],
    navbar: {
      title: 'Digital Support Services Notes',
      logo: {
        alt: 'nayan notes',
        src: 'img/logo.gif',
        href: '/'
      },
      items: [
        {
          to: '/docs',
          label: 'Notes',
          position: 'left',
        },
        {
          to: '/Presentations',
          label: 'Presentations',
          position: 'left',
        },
        {
          label: 'Tools',
          position: 'left',
          items: [
            {
              label: 'Backdrop Icons',
              to: 'backdropicons',
            },
            {
              label: 'Website Mockups',
              to: 'https://website-mockup.notes.nayanpatel.net',
            },
            {
              label: 'Analytics',
              to: 'https://analytics.notes.nayanpatel.net/share/NmRzIAly/Digital%20Support%20Notes',
            },
            {
              label: '🚧 More comming soon!',
              to: '#',
              className: 'denied',
            },
          ],
        },
        {
          to: '/feature-requests',
          label: 'Feature Request →',
          position: 'left',
          className: 'feature-req',
        },
        {
          href: 'https://github.com/Nayan-Web/Digital-Support-Notes',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
        {
          href: 'https://www.producthunt.com/posts/digital-support-notes',
          position: 'right',
          className: 'header-prod-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Sites',
          items: [
            {
              label: 'Notes',
              to: 'docs',
            },
            {
              label: 'Analytics',
              href: 'https://analytics.notes.nayanpatel.net/share/NmRzIAly/Digital%20Support%20Notes',
            },
            {
              label: 'Main Site',
              href: 'https://nayanpatel.net',
            },
            
          ],
        },
        {
          title: 'More',
          items: [
            {
              html: `
              <a href="https://www.netlify.com" target="_blank" rel="noreferrer noopener" aria-label="Deploys by Netlify">
                <img src="https://www.netlify.com/img/global/badges/netlify-color-accent.svg" alt="Deploys by Netlify" />
              </a>
            `,
            },
          ],
        },
        {
          title: 'Code of Conduct',
          items: [
            {
              label: 'Code of Conduct',
              href: 'https://github.com/Nayan-Web/Digital-Support-Notes/blob/main/Code%20of%20Conduct.md',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Nayan Patel`,
    },
    prism: {
      theme: require('prism-react-renderer/themes/vsLight'),
      darkTheme: require('prism-react-renderer/themes/vsDark'),
      additionalLanguages: [
        'lua',
        'toml',
      ],
    },
    zoomSelector: '.markdown :not(.authority-availability) > img',
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        gtag: {
          trackingID: 'UA-216503437-1',
          anonymizeIP: true,
        },
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),

          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          editUrl: "https://github.com/PatelN123/Digital-Support-Notes/edit/main/Website/",
          beforeDefaultRemarkPlugins: [
            pageRef,
        ],
        },
        blog: {
          showReadingTime: true,
          blogTitle: 'Nayan Notes Blog!',
          blogDescription: 'All official news from Nayan notes!',
          blogSidebarTitle: 'Nayan Notes news',
          blogSidebarCount: 'ALL',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
      },
    ],
  ],
  plugins: [
    [
      'docusaurus-plugin-sass',
      {
      },
    ],
    [
        require.resolve("@easyops-cn/docusaurus-search-local"),
        {
            hashed: true,
            docsDir: 'docs',
            docsRouteBasePath: '/',
            indexDocs: true,
            indexBlog: false,
            indexPages: true,
            highlightSearchTermsOnTargetPage: false
        }
    ],
    [
      '@docusaurus/plugin-pwa',
      {
        debug: true,
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
        ],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/docusaurus.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json', // your PWA manifest
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: 'rgb(37, 194, 160)',
          },
        ],
      },
    ],
    [
      'ideal-image',
      {
        quality: 70,
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 2, // the max number of images generated between min and max (inclusive)
        // disableInDev: false,
      },
    ],
    [
      '@docusaurus/plugin-pwa',
      {
        id: "pwa",
        debug: true,
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
        ],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/logo.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json', // your PWA manifest
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: 'rgb(37, 194, 160)',
          },
        ],
      },
    ],
],
};

async function createConfig() {
  const FeatureRequestsPlugin = (await import('./src/featureRequests/FeatureRequestsPlugin.mjs')).default;
  config.plugins?.push(FeatureRequestsPlugin);
  return config;
}

module.exports = createConfig;