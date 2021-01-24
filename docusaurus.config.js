module.exports = {
  noIndex: true, // Defaults to `false`
  title: "Orthopädische Facharztpraxis Roggenland",
  tagline: "Ihre Orthopäden in Bochum",
  url: "https://philipp985.github.io/",
  baseUrl: "/roggenland-orthopaedie-docs/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "philipp985", // Usually your GitHub org/user name.
  projectName: "roggenland-orthopaedie-docs", // Usually your repo name.
  themeConfig: {
    colorMode: {
      defaultMode: "light",
      disableSwitch: true,
    },
    navbar: {
      title: "",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.png",
      },
      items: [
        {
          to: "features",
          // activeBasePath: 'docs',
          label: "Leistungsspektrum",
          position: "left",
        },
        { to: "team", label: "Team", position: "left" },
        { to: "company", label: "Praxis", position: "left" },
        { to: "blog", label: "Aktuelles", position: "left" },
        { to: "contact", label: "Kontakt & Anfahrt", position: "right" },
      ],
    },
    footer: {
      style: "dark",
      links: [
        // {
        //   title: 'Inhalte',
        //   items: [
        //     {
        //       label: 'Leistungsspektrum',
        //       to: 'docs/',
        //     },
        //     {
        //       label: 'Aktuelles',
        //       to: 'docs/doc2/',
        //     },
        //     {
        //       label: 'Team',
        //       to: 'docs/doc2/',
        //     },
        //     {
        //       label: 'Praxis',
        //       to: 'docs/doc2/',
        //     },
        //   ],
        // },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Orthopädische Facharztpraxis Roggenland.<br/><a href="/imprint">Impressum</a> | <a href="/privacy">Datenschutz</a>`,
    },
    announcementBar: {
      id: "support_us", // Any value that will identify this message.
      content:
        'Wir sind auch in Corona Zeiten für Sie da. Lesen Sie <a target="_blank" rel="noopener noreferrer" href="#">hier</a>, was wir zu Ihrer Sicherheit unternehmen.',
      // backgroundColor: '#fafbfc', // Defaults to `#fff`.
      // textColor: '#091E42', // Defaults to `#000`.
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // editUrl:
          //   'https://github.com/philipp985/roggenland-orthopaedie-docs/tree/master/',
        },
        blog: {
          showReadingTime: true,
          blogSidebarTitle: "Inhalt",
          // Please change this to your repo.
          // editUrl:
          //   'https://github.com/qmBase/roggenland-orthopaedie-docs/tree/master/',
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
