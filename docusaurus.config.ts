import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";

const config: Config = {
  future: {
    experimental_faster: true,
    v4: true,
  },
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
          to: "features",
          // activeBasePath: 'docs',
          label: "Leistungsspektrum",
          position: "left",
        },
        { to: "aerzte", label: "Ärzte", position: "left" },
        { to: "team", label: "Team", position: "left" },
        { to: "praxis", label: "Praxis", position: "left" },
        { to: "blog", label: "Aktuelles", position: "left" },
        { to: "kontakt", label: "Kontakt & Anfahrt" },
        {
          to: "https://www.doctolib.de/einzelpraxis/bochum/orthopaedische-facharztpraxis-roggenland?utm_campaign=website-button&utm_source=orthopaedische-facharztpraxis-roggenland-website-button&utm_medium=referral&utm_content=option-8&utm_term=orthopaedische-facharztpraxis-roggenland",
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
    // announcementBar: {
    //   id: "xmas-24", // Any value that will identify this message.
    //   content:
    //     "In dringenden Fällen sind wir am 23.12., 27.12. und 30.12. in der Zeit von 9-12:00 Uhr erreichbar",
    //   backgroundColor: "#fafbfc", // Defaults to `#fff`.
    //   textColor: "#091E42", // Defaults to `#000`.
    // },
  } satisfies Preset.ThemeConfig,
  presets: [
    [
      "classic",
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
      } satisfies Preset.Options,
    ],
  ],
  // plugins: ["@docusaurus/plugin-ideal-image"],
};

module.exports = config;
