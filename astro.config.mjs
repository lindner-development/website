import { defineConfig } from 'astro/config';

// https://astro.build/config
import solidJs from "@astrojs/solid-js";

// https://astro.build/config
import AstroPWA from '@vite-pwa/astro';

// https://astro.build/config
import critters from "astro-critters";

// https://astro.build/config
import compress from "astro-compress";

// https://astro.build/config
import rome from "astro-rome";

// https://astro.build/config
import prefetch from "@astrojs/prefetch";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [solidJs(), AstroPWA({
    base: '/',
    scope: '/',
    includeAssets: ['brand.svg', 'favicon.svg', 'favicon.ico', 'favicon-12.png', 'favicon-12.webp', 'favicon-16.png', 'favicon-16.webp', 'favicon-24.png', 'favicon-24.webp', 'favicon-32.png', 'favicon-32.webp', 'favicon-48.png', 'favicon-48.webp', 'favicon-64.png', 'favicon-64.webp', 'favicon-72.png', 'favicon-72.webp', 'favicon-76.png', 'favicon-76.webp', 'favicon-96.png', 'favicon-96.webp', 'favicon-120.png', 'favicon-120.webp', 'favicon-128.png', 'favicon-128.webp', 'favicon-144.png', 'favicon-144.webp', 'favicon-152.png', 'favicon-152.webp', 'favicon-167.png', 'favicon-167.webp', 'favicon-180.png', 'favicon-180.webp', 'favicon-192.png', 'favicon-192.webp', 'favicon-228.png', 'favicon-228.webp', 'favicon-256.png', 'favicon-256.webp'],
    manifest: {
      id: 'lindnerit-web',
      name: 'Lindner IT',
      start_url: 'https://lindnerit.io/',
      lang: 'de',
      short_name: 'Lindner IT',
      description: 'Ihre digitale Verknüpfung zur Lindner IT',
      theme_color: '#0093e7',
      dir: 'ltr',
      orientation: 'portrait-primary',
      icons: [{
        src: 'pwa-icon-12.png',
        sizes: '12x12',
        type: 'image/png'
      }, {
        src: 'pwa-icon-12.webp',
        sizes: '12x12',
        type: 'image/webp'
      }, {
        src: 'pwa-icon-16.png',
        sizes: '16x16',
        type: 'image/png'
      }, {
        src: 'pwa-icon-16.webp',
        sizes: '16x16',
        type: 'image/webp'
      }, {
        src: 'pwa-icon-24.png',
        sizes: '24x24',
        type: 'image/png'
      }, {
        src: 'pwa-icon-24.webp',
        sizes: '24x24',
        type: 'image/webp'
      }, {
        src: 'pwa-icon-32.png',
        sizes: '32x32',
        type: 'image/png'
      }, {
        src: 'pwa-icon-32.webp',
        sizes: '32x32',
        type: 'image/webp'
      }, {
        src: 'pwa-icon-48.png',
        sizes: '48x48',
        type: 'image/png'
      }, {
        src: 'pwa-icon-48.webp',
        sizes: '48x48',
        type: 'image/webp'
      }, {
        src: 'pwa-icon-57.png',
        sizes: '57x57',
        type: 'image/png'
      }, {
        src: 'pwa-icon-57.webp',
        sizes: '57x57',
        type: 'image/webp'
      }, {
        src: 'pwa-icon-60.png',
        sizes: '60x60',
        type: 'image/png'
      }, {
        src: 'pwa-icon-60.webp',
        sizes: '60x60',
        type: 'image/webp'
      }, {
        src: 'pwa-icon-64.png',
        sizes: '64x64',
        type: 'image/png'
      }, {
        src: 'pwa-icon-64.webp',
        sizes: '64x64',
        type: 'image/webp'
      }, {
        src: 'pwa-icon-72.png',
        sizes: '72x72',
        type: 'image/png'
      }, {
        src: 'pwa-icon-72.webp',
        sizes: '72x72',
        type: 'image/webp'
      }, {
        src: 'pwa-icon-76.png',
        sizes: '76x76',
        type: 'image/png'
      }, {
        src: 'pwa-icon-76.webp',
        sizes: '76x76',
        type: 'image/webp'
      }, {
        src: 'pwa-icon-96.png',
        sizes: '96x96',
        type: 'image/png'
      }, {
        src: 'pwa-icon-96.webp',
        sizes: '96x96',
        type: 'image/webp'
      }, {
        src: 'pwa-icon-120.png',
        sizes: '120x120',
        type: 'image/png'
      }, {
        src: 'pwa-icon-120.webp',
        sizes: '120x120',
        type: 'image/webp'
      }, {
        src: 'pwa-icon-128.png',
        sizes: '128x128',
        type: 'image/png'
      }, {
        src: 'pwa-icon-128.webp',
        sizes: '128x128',
        type: 'image/webp'
      }, {
        src: 'pwa-icon-144.png',
        sizes: '144x144',
        type: 'image/png'
      }, {
        src: 'pwa-icon-144.webp',
        sizes: '144x144',
        type: 'image/webp'
      }, {
        src: 'pwa-icon-152.png',
        sizes: '152x152',
        type: 'image/png'
      }, {
        src: 'pwa-icon-152.webp',
        sizes: '152x152',
        type: 'image/webp'
      }, {
        src: 'pwa-icon-167.png',
        sizes: '167x167',
        type: 'image/png'
      }, {
        src: 'pwa-icon-167.webp',
        sizes: '167x167',
        type: 'image/webp'
      }, {
        src: 'pwa-icon-180.png',
        sizes: '180x180',
        type: 'image/png'
      }, {
        src: 'pwa-icon-180.webp',
        sizes: '180x180',
        type: 'image/webp'
      }, {
        src: 'pwa-icon-192.png',
        sizes: '192x192',
        type: 'image/png'
      }, {
        src: 'pwa-icon-192.webp',
        sizes: '192x192',
        type: 'image/webp'
      }, {
        src: 'pwa-icon-228.png',
        sizes: '228x228',
        type: 'image/png'
      }, {
        src: 'pwa-icon-228.webp',
        sizes: '228x228',
        type: 'image/webp'
      }, {
        src: 'pwa-icon-256.png',
        sizes: '256x256',
        type: 'image/png'
      }, {
        src: 'pwa-icon-256.webp',
        sizes: '256x256',
        type: 'image/webp'
      }, {
        src: 'pwa-icon-384.png',
        sizes: '384x384',
        type: 'image/png'
      }, {
        src: 'pwa-icon-384.webp',
        sizes: '384x384',
        type: 'image/webp'
      }, {
        src: 'pwa-icon-512.png',
        sizes: '512x512',
        type: 'image/png'
      }, {
        src: 'pwa-icon-512.webp',
        sizes: '512x512',
        type: 'image/webp'
      }, {
        src: 'pwa-icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'any maskable'
      }]
    },
    minify: true,
    devOptions: {
      enabled: true
    }
  }), critters({
    critters: {
      compress: true,
      inlineFonts: true,
      noscriptFallback: true,
      mergeStylesheets: true
    }
  }), rome(), compress({
    css: true,
    html: true,
    img: true,
    js: true,
    map: true,
    svg: true
  }), prefetch(), sitemap({
    changefreq: "daily"
  })],
  site: 'https://lindnerit.io/'
});