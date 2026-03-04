// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://hilfe.pentacode.app",
  integrations: [
    starlight({
      title: "Pentacode Wissensportal",
      locales: {
        root: {
          label: "Deutsch",
          lang: "de",
        },
      },
      sidebar: [
        { slug: "dashboard" },
        { slug: "zeiterfassung" },
        { slug: "stempeluhr" },
        { slug: "mitarbeiter-app" },
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
      head: [
        {
          tag: "link",
          attrs: {
            rel: "stylesheet",
            href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css",
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
