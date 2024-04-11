import { defineConfig } from 'astro/config';
import solid from "@astrojs/solid-js";
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";
//import sentry from "@sentry/astro";
//import spotlightjs from "@spotlightjs/astro";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  adapter: cloudflare({
    platformProxy: {
      enabled: true
    },
    imageService: 'cloudflare',
    /*routes: {
      extend: {
        exclude: [
          { pattern: "/icons/*" },
          { pattern: "/icons\\*" },
        ]
      }
    }*/
  }),
  prefetch: true,
  integrations: [solid(), sitemap({
    i18n: {
      defaultLocale: "en",
      locales: {
        en: 'en-US',
        de: 'de-DE'
      }
    },
    lastmod: new Date(),
    changefreq: 'monthly'
  }), partytown({
    config: {
      forward: ["dataLayer.push"]
    }
  }), /*sentry({
    dsn: "https://f69d7d9f1a48aecc94b3c4ef7a45aa77@o4506350384906240.ingest.sentry.io/4506350397489152",
    sourceMapsUploadOptions: {
      project: "website",
      authToken: process.env.SENTRY_AUTH_TOKEN
    },
    environment: process.env.NODE_ENV?.toLowerCase()
  }), spotlightjs()*/],
  //image: {
  //  service: sharpImageService(),
  //},
  //output: "hybrid",
  output: "server",
  site: "https://lindnerit.io/",
  compressHTML: true,
  vite: {
    build: {
      /*modulePreload: true,
      minify: "terser"*/
      /*rollupOptions: {
        output: {
          manualChunks: (id) => {
            //console.log(id);
            if (id.includes("node_modules/solid-js")) {
              return "solid-chunk";
            }
          },
        },
      },*/
    }
  }
});