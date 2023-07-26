import { defineConfig, sharpImageService } from 'astro/config';

import solidJs from "@astrojs/solid-js";
import prefetch from "@astrojs/prefetch";
import sitemap from "@astrojs/sitemap";
import critters from "astro-critters";
import rome from "astro-rome";
import compressor from "astro-compressor";
//import webmanifest from 'astro-webmanifest'; // TODO

//import deno from '@astrojs/deno';
import nodejs from '@astrojs/node';

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
        de: 'de-DE',
      },
    },
  }), critters(), rome(), compressor()],
  experimental: {
    assets: true
  },
  image: {
    service: sharpImageService(),
  },
  output: "server",
  site: "https://lindnerit.io/",
});