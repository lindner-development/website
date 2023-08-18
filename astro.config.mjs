import { defineConfig } from 'astro/config';
import solidJs from "@astrojs/solid-js";
import prefetch from "@astrojs/prefetch";
import sitemap from "@astrojs/sitemap";
import compressor from "astro-compressor";
import compress from "astro-compress";
import critters from "astro-critters";
import rome from "astro-rome";
//import webmanifest from 'astro-webmanifest'; // TODO

//import deno from '@astrojs/deno';
import nodejs from '@astrojs/node';

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  //adapter: deno(),
  adapter: nodejs({
    mode: 'standalone'
  }),
  integrations: [solidJs(), prefetch(), sitemap({
    i18n: {
      defaultLocale: "en",
      locales: {
        en: 'en-US',
        de: 'de-DE'
      }
    },
    lastmod: new Date(),
    changefreq: 'monthly',
  }), critters(),
  rome(),
  partytown({
    config: {
      forward: ["dataLayer.push"]
    }
  }), compressor(), compress()],
  experimental: {
    //assets: true,
    //viewTransitions: true
  },
  //image: {
  //  service: sharpImageService(),
  //},
  output: "hybrid",
  site: "https://lindnerit.io/",
  compressHTML: true,
  build: {
    split: true
  },
  vite: {
    build: {
      modulePreload: true,
      minify: "terser"
    }
  }
});
