// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://hilfe.pentacode.app",
  integrations: [
    starlight({
      title: "Pentacode Wissensportal",
      customCss: ["./src/styles/custom.css"],
      components: {
        Sidebar: "./src/components/Sidebar.astro",
        PageTitle: "./src/components/PageTitle.astro",
      },
      locales: {
        root: {
          label: "Deutsch",
          lang: "de",
        },
      },
      sidebar: [
        { slug: "stempeluhr" },
        { slug: "mitarbeiter-app" },
        {
          label: "Verwaltung",
          items: [
            { slug: "dashboard" },
            { slug: "zeiterfassung" },
            { slug: "dienstplan" },
            {
              label: "Mitarbeiter",
              autogenerate: { directory: "mitarbeiter" },
            },
            { slug: "recruiting" },
            {
              label: "Umsätze",
              autogenerate: { directory: "umsaetze" },
            },
            {
              label: "Planung",
              autogenerate: { directory: "planung" },
            },
            {
              label: "Berichte",
              autogenerate: { directory: "berichte" },
            },
            {
              label: "Einstellungen",
              autogenerate: { directory: "einstellungen" },
            },
            { slug: "probleme" },
            { slug: "datenexport" },
            { slug: "anzeige" },
          ],
        },
      ],
      head: [
        {
          tag: "link",
          attrs: {
            rel: "stylesheet",
            href: "/fontawesome/css/all.min.css",
          },
        },
      ],
    }),
  ],
  redirects: {
    "/handbuch/arbeitszeitblatt":
      "/mitarbeiter/arbeitszeiten/#das-arbeitszeitblatt",
    "/handbuch/mitarbeiter-app": "/mitarbeiter-app/",
    "/handbuch/stempeluhr": "/stempeluhr/",
    "/handbuch/stempeluhr/tablet-funktionen": "/stempeluhr/",
    "/handbuch/stempeluhr/tagesuebersicht": "/zeiterfassung/",
    "/handbuch/dienstplan/plan-ist-vergleich": "/dienstplan/#plan-ist-vergleich",
    "/handbuch/mitarbeiter/neuer-mitarbeiter": "/mitarbeiter/allgemein/",
  },
});
