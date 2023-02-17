//@ts-check

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Orthopädische Facharztpraxis",
  tagline: "Ihre Orthopäden in Bochum",
  url: "https://roggenland-orthopaedie.de",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "philipp985", // Usually your GitHub org/user name.
  projectName: "roggenland-orthopaedie-docs", // Usually your repo name.
  i18n: { defaultLocale: "de", locales: ["de"] },
  themeConfig: {
    colorMode: {
      defaultMode: "light",
      disableSwitch: true,
    },
    navbar: {
      title: "",
      logo: {
        alt: "Orthopädische Facharztpraxis Roggenland",
        src: "img/logo.png",
      },
      items: [
        {
          to: "Features",
          // activeBasePath: 'docs',
          label: "Leistungsspektrum",
          position: "left",
        },
        { to: "Aerzte", label: "Ärzte", position: "left" },
        { to: "Team", label: "Team", position: "left" },
        { to: "Praxis", label: "Praxis", position: "left" },
        { to: "Blog", label: "Aktuelles", position: "left" },
        { to: "Kontakt", label: "Kontakt & Anfahrt" },
        {
          to: "Termin",
          label: "Jetzt Termin vereinbaren",
          position: "right",
          className:
            "button button--secondary padding-left--md padding-right--md",
        },
      ],
    },
    footer: {
      style: "dark",
      // links: [
      //   {
      //     title: "Inhalte",
      //     items: [
      //       {
      //         label: "Leistungsspektrum",
      //         to: "docs/",
      //       },
      //       {
      //         label: "Aktuelles",
      //         to: "docs/doc2/",
      //       },
      //       {
      //         label: "Team",
      //         to: "docs/doc2/",
      //       },
      //       {
      //         label: "Praxis",
      //         to: "docs/doc2/",
      //       },
      //     ],
      //   },
      // ],
      copyright: `Copyright © ${new Date().getFullYear()} Orthopädische Facharztpraxis Roggenland<br/><a href="/imprint">Impressum</a> | <a href="/privacy">Datenschutz</a>`,
    },
    announcementBar: {
      id: "new_website", // Any value that will identify this message.
      content:
        'Wir sind auch in der Corona Pandemie für Sie erreichbar. Lesen Sie <a target="_blank" rel="noopener noreferrer" href="/blog/corona">hier</a>, was wir zu Ihrer Sicherheit unternehmen.',
      backgroundColor: "#fafbfc", // Defaults to `#fff`.
      textColor: "#091E42", // Defaults to `#000`.
    },
  },
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
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
      }),
    ],
  ],
  // plugins: ["@docusaurus/plugin-ideal-image"],
};

module.exports = config;
